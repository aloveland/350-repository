\c postgres
DROP DATABASE IF EXISTS workshopv1;
CREATE DATABASE workshopv2;
\c workshopv2

CREATE TABLE workshop(
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       workshopgroup TEXT NOT NULL
);
INSERT INTO workshopmembers (name, workshopgroup) VALUES
('Brad Pitt', 'testShop'),
('George Clooney','Oceans11');
CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       firstname TEXT,
       lastname TEXT,
       username NOT NULL,
       email TEXT
);
INSERT INTO users(firstname, lastname, username, email)VALUES
('Alexander', 'Loveland', 'aloveland, 'aloveland@gmail.com'),
('Barry', 'Dylan', 'bdylan', 'ddylan@gmail.com');

CREATE TABLE workshopinfo(
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      location TEXT NOT NULL,
      maxseats NUMERIC,
      instructor TEXT
 );
 INSERT INTO workshopinfo(title, date, location, maxseats, instructor)(
 ('Tensorflow', '2020-11-01', 'Albuquerque', '40', 'Fiona Helbron');
