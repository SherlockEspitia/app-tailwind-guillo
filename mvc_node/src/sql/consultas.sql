CREATE DATABASE node_mvc;
USE mvc;
CREATE TABLE usuarios(
    id INT AUTO_INCREMENT,
    nombre VARCHAR(200),
    email VARCHAR(100),
    telefono VARCHAR(50),
    PRIMARY KEY(id)
)Engine = InnoDB;