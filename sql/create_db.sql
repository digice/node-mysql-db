CREATE USER 'dbuser'@'%';
CREATE USER 'dbuser'@'127.0.0.1';
CREATE USER 'dbuser'@'localhost';
ALTER USER 'dbuser'@'%' IDENTIFIED WITH mysql_native_password BY 'dbpass';
ALTER USER 'dbuser'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'dbpass';
ALTER USER 'dbuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dbpass';
GRANT USAGE ON *.* TO 'dbuser';
CREATE DATABASE dbname;
GRANT ALL PRIVILEGES ON `dbname`.* TO 'dbuser'@'%';
GRANT ALL PRIVILEGES ON `dbname`.* TO 'dbuser'@'127.0.0.1';
GRANT ALL PRIVILEGES ON `dbname`.* TO 'dbuser'@'localhost';
