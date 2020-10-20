\c postgres
DROP DATABASE IF EXISTS workshopv2;
CREATE DATABASE workshopv2;
\c workshopv2

CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       username TEXT NOT NULL,
       firstname TEXT,
       lastname TEXT,
       email TEXT
);
INSERT INTO users( username, firstname, lastname,email)VALUES
('aloveland', 'Alexander', 'Loveland', 'aloveland@gmail.com'),
('bdylan','Barry', 'Dylan', 'ddylan@gmail.com');

CREATE TABLE workshopinfo(
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      location TEXT NOT NULL,
      maxseats NUMERIC,
      instructor TEXT
 );
 INSERT INTO workshopinfo(title, date, location, maxseats, instructor)VALUES
 ('Tensorflow', '2020-11-01', 'Albuquerque', '40', 'Fiona Helbron');
 
 CREATE TABLE attendees(
     id SERIAL PRIMARY KEY,   
     username TEXT,
     title TEXT,
     date TEXT,
     location TEXT
 );
 
 INSERT INTO attendees(username, title, date, location)VALUES
    ('aloveland', 'Tensorflow', '2020-11-01', 'Albequerque');
