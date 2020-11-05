\c postgres
DROP DATABASE IF EXISTS tasksix;
CREATE DATABASE tasksix;
\c taskSix

CREATE TABLE users(
  username SERIAL PRIMARY KEY,
  password TEXT NOT NULL,
  screenName TEXT NOT NULL,
);
INSERT INTO users(password, screenName)VALUES
  ('userpass34', 'user example');
