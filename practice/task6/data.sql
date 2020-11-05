\c postgres
DROP DATABASE IF EXISTS tasksix;
CREATE DATABASE tasksix;
\c tasksix

CREATE TABLE users(
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  screenName TEXT NOT NULL
);
INSERT INTO users(username, password, screenName)VALUES
  ('userpass34', 'user45g&', 'usertest');
