DROP DATABASE IF EXISTS my_business;
CREATE DATABASE my_business;

USE business_db;

CREATE TABLE departments(
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
        PRIMARY KEY(id),
);

CREATE TABLE roles(
    id INT AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    salary DECIMAL NOT NULL, 
        PRIMARY KEY(id),
            FOREIGN KEY(departments_id),
            REFERENCES departments(id),
ON DELETE SET NULL
);

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INT,
            FOREIGN KEY(departments_id),
            REFERENCES departments(id),
ON DELETE SET NULL
);