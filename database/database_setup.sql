DROP DATABASE IF EXISTS barf;
DROP USER IF EXISTS barfuser; 
CREATE USER barfuser WITH PASSWORD 'password';

CREATE DATABASE barf OWNER barfuser;