DROP DATABASE IF EXISTS chilango;

CREATE DATABASE chilango;

USE chilango;

CREATE TABLE comments(
 id int NOT NULL AUTO_INCREMENT,
 description text(600) NOT NULL,
 PRIMARY KEY (ID)
);
