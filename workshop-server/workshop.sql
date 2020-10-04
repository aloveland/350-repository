\c postgres
DROP DATABASE IF EXISTS workshopV1;
CREATE DATABASE workshopV1;
\c workshopV1

CREATE TABLE React Fundementals{
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
};
INSERT INTO React Fundementals (name) VALUES
('Ahmed Abdelali'),
('Ann Frank'),
('Ann Mulkern'),
('Clara Weick'),
('James Archer'),
('Linda Park'),
('Lucy Smith'),
('Roz Billingsley'),
('Samantha Eggert'),
('Tim Smith');
