DROP DATABASE IF EXISTS zlsAlbum;

CREATE DATABASE zlsAlbum;

USE zlsAlbum;

/*==============================================================*/
/* Table: USER用户表                                            */
/*==============================================================*/
CREATE TABLE USER
(
  u_id INT PRIMARY KEY AUTO_INCREMENT,   
  u_name VARCHAR(50),
  u_date DATETIME,
  u_state INT DEFAULT 1
);


/*==============================================================*/
/* Table: album相册表                                           */
/*==============================================================*/
CREATE TABLE album
(
  a_id	INT PRIMARY KEY AUTO_INCREMENT,
  u_id	INT ,
  a_name	VARCHAR(200),
  a_thumbnail	TEXT,
  a_top	INT,
  album	DATETIME,
  a_state	INT DEFAULT 1
);

USER;

/*==============================================================*/
/* Table: albumList相册图片表                                   */
/*==============================================================*/
CREATE TABLE albumList
(
  l_id	INT PRIMARY KEY AUTO_INCREMENT,
  a_id	INT,
  l_imgPath	TEXT,
  l_desc	TEXT,
  l_praise	INT,
  l_date	DATETIME,
  l_state	INT DEFAULT 1
);

