DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  /* Entity for messages - holds a UUID, message text, room name, and user's UUID*/
  id INT NOT NULL AUTO_INCREMENT,
  text varchar(280),
  roomname char,
  userid INT,
  Primary KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Entity for users - holds a UUID, username */
  id INT NOT NULL AUTO_INCREMENT,
  userid INT,
  username varchar(15),
  Primary KEY (id)
);

-- CREATE TABLE rooms (
--   /* Entity for messages - holds a UUID, message text, room name, and user's UUID*/
--   id INT(100) NOT NULL AUTO_INCREMENT,
--   roomname char(255),
--   Primary KEY (id)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

