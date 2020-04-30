CREATE TABLE IF NOT EXISTS accounts  (
	id SERIAL PRIMARY KEY,
	accountname TEXT,
	password TEXT,
	networth NUMERIC
);

CREATE TABLE IF NOT EXISTS users  (
	id SERIAL PRIMARY KEY,
	account_id INTEGER,
	username TEXT,
	income TEXT
);

CREATE TABLE IF NOT EXISTS bankaccounts  (
	id SERIAL PRIMARY KEY,
	accountdescription TEXT,
	amount INTEGER,
	account_id INTEGER,
	bank TEXT
);

CREATE TABLE IF NOT EXISTS investments  (
	id SERIAL PRIMARY KEY,
	name TEXT,
	value TEXT,
	description TEXT,
	account_id INTEGER
);

CREATE TABLE IF NOT EXISTS outgoings  (
	id SERIAL PRIMARY KEY,
	name TEXT,
	payment TEXT,
	description TEXT,
	account_id INTEGER
);

CREATE TABLE IF NOT EXISTS others  (
	id SERIAL PRIMARY KEY,
	title TEXT,
	comments TEXT,
	account_id INTEGER
);