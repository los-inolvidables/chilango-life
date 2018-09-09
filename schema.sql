DROP DATABASE IF EXISTS chilango;

CREATE DATABASE chilango;

USE chilango;

CREATE TABLE comments(
 id int NOT NULL AUTO_INCREMENT,
 description text(100) NOT NULL,
 description2 text(600) NOT NULL,
 PRIMARY KEY (ID)
);
INSERT INTO comments (description2, description) VALUES ("hola", "database");
INSERT INTO comments (description2, description) VALUES ("hey", "you");
