\c postgres
DROP DATABASE IF EXISTS yelp;
CREATE DATABASE yelp;
\c yelp

CREATE TABLE restaurant(
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       city TEXT,
       state TEXT,
       zip TEXT,
       type TEXT,
       dollars TEXT
);
INSERT INTO restaurant( name, city, state, zip, type, dollars)VALUES
('example restaurant', 'Sacremento', 'CA', '94203', 'georgian', '$$$');

CREATE TABLE reviews(
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      zip TEXT,
      reviewer TEXT,
      rating TEXT,
      review TEXT
      
 );
  INSERT INTO reviews(name, zip, reviewer, rating, review)VALUES
 ('example review', '94203', 'Don Johnson', '5', 'very good restaurant');
