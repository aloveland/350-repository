\c postgres
DROP DATABASE IF EXISTS workshopv1;
CREATE DATABASE workshopv1;
\c workshopv1

CREATE TABLE 'React Fundementals'{
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
};
INSERT INTO 'React Fundementals' (name) VALUES
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

CREATE TABLE HardWorkers{
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
};
INSERT INTO HardWorkers (name) VALUES
('Brad Pitt'),
('Leo DiCaprio'),
('Ben Affleck'),
('George Clooney');
