
#create_time:	2016/3/22
#author:	mumudev
#description:	初定名字为时间规划局，这个数据库是为APP登录后后台获取数据所使用，后期看是否需要在安卓客户端做数据持久化。
#
DROP DATABASE IF EXISTS timemanager;
CREATE DATABASE timemanager;
USE timemanager;
CREATE TABLE user(
	user_id		INT 		NOT NULL	AUTO_INCREMENT,
	username	VARCHAR(100)	NOT NULL,
	email		VARCHAR(60)	NOT NULL,
	password	VARCHAR(32)	NOT NULL,
	ico		VARCHAR(255),
	PRIMARY KEY	(user_id)
);
CREATE TABLE subject(
	subject_id	INT 		NOT NULL	AUTO_INCREMENT,
	name		VARCHAR(50)	NOT NULL,
	teacher		VARCHAR(50)	NOT NULL,
	class		VARCHAR(50)	NOT NULL,
	classroom	VARCHAR(50)	NOT NULL,
	PRIMARY KEY 	(subject_id)
);
CREATE TABLE schedule(
	schedule_id	INT 		NOT NULL	AUTO_INCREMENT,
	week		VARCHAR(20)	NOT NULL,
	lession		INT 		NOT NULL,
	subject_id	INT 		NOT NULL,
	KEY		subject	(subject_id),
	PRIMARY KEY	(schedule_id),
	CONSTRAINT	subject_fkid FOREIGN KEY (subject_id) REFERENCES subject (subject_id)
);
CREATE TABLE category(
	category_id	INT 		NOT NULL	AUTO_INCREMENT,
	user_id		INT 		NOT NULL,
	contant 	VARCHAR(150)	NOT NULL,
	create_time	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP,
	update_time	TIMESTAMP 	NOT NULL	DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	KEY		user(user_id),
	PRIMARY KEY	(category_id),
	CONSTRAINT	user_fkid FOREIGN KEY (user_id) REFERENCES user(user_id)
);
CREATE TABLE alarmclock(
	alarmclock_id	INT 		NOT NULL	AUTO_INCREMENT,
	category_id	INT 		NOT NULL,
	alarmtime	DATETIME	NOT NULL,
	KEY		category(category_id),
	PRIMARY KEY	(alarmclock_id),
	CONSTRAINT	category_fkid FOREIGN KEY (category_id) REFERENCES category(category_id)
);