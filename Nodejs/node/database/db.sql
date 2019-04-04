-- crear database
create database crudNodejs;

-- usar database
use crudNodejs;

-- crear tabla
create table vendedor{
    idven int AUTO_INCREMENT primary key not null,
    nombre varchar(20) not null,
    apellido varchar(30) not null,
    telf char(9) not null
};

-- mostrar todas las tablas
SHOW TABLES

-- descripcion la tabla
describe customer;