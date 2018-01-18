CREATE TABLE users
(id SERIAL PRIMARY KEY,
first_name VARCHAR(40),
last_name VARCHAR(40),
email TEXT,
password VARCHAR(20),
workout_id INTEGER)