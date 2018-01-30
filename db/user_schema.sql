CREATE TABLE users
(id SERIAL PRIMARY KEY,
username VARCHAR(180),
email VARCHAR(180),
profile_pic TEXT,
auth_id TEXT,
workout_id INTEGER)