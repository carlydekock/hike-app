const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const createJWKSMock = require('mock-jwks');
require('dotenv').config();
const domain = process.env.REACT_APP_AUTH0_DOMAIN;


const client = jwksClient({
  jwksUri: `https://${domain}/.well-known/jwks.json`,
});

const verifyAuth0Token = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(decoded);
    });
  });
};

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) {
      callback(err);
      return;
    }
    const signingKey = key.getPublicKey();

    callback(null, signingKey);
  });
};

describe('Testing auth', () => {
  const jwks = createJWKSMock.default(`https://${domain}/`);

  beforeEach(() => {
    jwks.start();
  });

  afterEach(() => {
    jwks.stop();
  });

  it('should verify the token', async () => {
    const token = jwks.token({});
  
    const data = await verifyAuth0Token(token);
  
    expect(data).toEqual({});
  });
});