CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth_id VARCHAR(255) UNIQUE,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email_address VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hikes_list (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  length VARCHAR(255) NOT NULL,
  elevation_gain VARCHAR(255),
  time VARCHAR(255),
  keywords VARCHAR(255),
  latitude DECIMAL NOT NULL,
  longitude DECIMAL NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE trip_reports (
  id SERIAL PRIMARY KEY,
  hike_id INT NOT NULL,
  user_id INT NOT NULL,
  name VARCHAR(255),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  hiked_at VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hike_id) REFERENCES hikes_list (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);



-- Troubleshooting creating trigger 

-- CREATE OR REPLACE FUNCTION log_updated_time()
-- RETURNS TRIGGER
-- LANGUAGE PLPGSQL
-- AS $$
-- BEGIN 
--   new.updated_at = TIMESTAMP
-- END;
-- $$

-- delimiter $$
-- CREATE TRIGGER update_timestamp
-- AFTER UPDATE 
-- ON users
-- FOR EACH ROW
-- EXECUTE PROCEDURE log_updated_time();
-- $$

-- CREATE TABLE users_history (
--   id SERIAL PRIMARY KEY,
--   user_id INT NOT NULL,
--   changed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFRENCES users (id)
-- );

-- CREATE TABLE trip_reports_history (
--   id SERIAL PRIMARY KEY,
--   hike_id INT NOT NULL,
--   user_id INT NOT NULL,
--   changed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (hike_id) REFERENCES hikes_list (id),
--   FOREIGN KEY (user_id) REFERENCES users (id)
-- );

-- CREATE TABLE hikes_list_history (
--   id SERIAL PRIMARY KEY,
--   hike_id INT NOT NULL,
--   changed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );