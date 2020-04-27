CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    tweet TEXT,
    user_id INTEGER
);

CREATE TABLE hashtags (
		id SERIAL PRIMARY KEY,
		hashtag TEXT
);

CREATE TABLE hashtags_tweets (
		id SERIAL PRIMARY KEY,
		hashtag_id INTEGER,
		tweet_id INTEGER
);