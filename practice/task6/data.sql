\c postgres
DROP DATABASE IF EXISTS taskSix;
CREATE DATABASE taskSix;
\c taskSix

CREATE TABLE users(
  username SERIAL PRIMARY KEY,
  password TEXT NOT NULL,
  screenName TEXT NOT NULL,
);
INSERT INTO users(username, password, screenName)VALUES
  ('user1', 'userpass34', 'user example');
