\c postgres
DROP DATABASE IF EXISTS workshopv1;
CREATE DATABASE workshopv1;
\c workshopv1

CREATE TABLE workshop(
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       workshopgroup TEXT NOT NULL
);
INSERT INTO workshop (name, workshopgroup) VALUES
('Brad Pitt', 'testShop'),
('George Clooney','Oceans11');
