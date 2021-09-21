// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'GET',
    url: Cypress.env('AUTH_URL'),
    body: {
      grant_type: 'password',
      username: Cypress.env('AUTH0_USERNAME'),
      password: Cypress.env('AUTH0_PASSWORD'),
      audience: Cypress.env('REACT_APP_AUTH0_AUDIENCE'),
      scope: 'openid profile email',
      client_id: Cypress.env('REACT_APP_AUTH0_CLIENT_ID'),
      client_secret: Cypress.env('REACT_APP_AUTH0_CLIENT_SECRET'),
    },
  };

  cy.request(options);
});

// Cypress.Commands.add(
//   'loginByAuth0Api',
//   (username, password) => {
//     cy.log(`Logging in as ${username}`)
//     const client_id = Cypress.env('REACT_APP_AUTH0_CLIENT_ID')
//     const client_secret = Cypress.env('REACT_APP_AUTH0_CLIENT_SECRET')
//     const audience = Cypress.env('REACT_APP_AUTH0_AUDIENCE')
//     const scope = 'openid profile email'

//     cy.request({
//       method: 'GET',
//       url: `https://${Cypress.env('AUTH_URL')}oauth/token`,
//       body: {
//         grant_type: 'password',
//         username,
//         password,
//         audience,
//         scope,
//         client_id,
//         client_secret,
//       },
//     }).then(({ body }) => {
//       const claims = jwt.decode(body.id_token)
//       const {
//         nickname,
//         name,
//         picture,
//         updated_at,
//         email,
//         email_verified,
//         sub,
//         exp,
//       } = claims

//       const item = {
//         body: {
//           ...body,
//           decodedToken: {
//             claims,
//             user: {
//               nickname,
//               name,
//               picture,
//               updated_at,
//               email,
//               email_verified,
//               sub,
//             },
//             audience,
//             client_id,
//           },
//         },
//         expiresAt: exp,
//       }

//       window.localStorage.setItem('auth0Cypress', JSON.stringify(item))

//       cy.visit('/')
//     })
//   }
// )