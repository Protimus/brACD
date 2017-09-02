/** Cria o banco de dados do sistema **/
CREATE DATABASE bracd;
use bracd;

/** Cria a tabela de contas **/
CREATE TABLE IF NOT EXISTS `user` (
	`uid`	int(10) unsigned NOT NULL AUTO_INCREMENT,
    `user`	varchar(25) COLLATE utf8_unicode_ci NOT NULL,
    `mail`	varchar(30)	NOT NULL,
    `pass`	varchar(25) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY	(`uid`),
    UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/** Cria a tabela de grupos **/
CREATE TABLE IF NOT EXISTS `user_group` (
	`uid`	int(10) unsigned NOT NULL,
	`gid` 	int(10) unsigned NOT NULL AUTO_INCREMENT,
	`title`	varchar(20)	DEFAULT 'Membro',
	PRIMARY KEY (`gid`),
	FOREIGN KEY (`uid`) REFERENCES `user`(`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/** Cria a tabela de traduções 
- Status 0 = Aguardando tradução
- Status 1 = Realizando tradução 
- Status 2 = Revisando tradução
- Status 3 = Conclusão de tradução **/
CREATE TABLE IF NOT EXISTS `translation` (
	`tid`	int(10) unsigned NOT NULL AUTO_INCREMENT,
	`tstatus` smallint(2) NOT NULL,
	`tname`	varchar(30) NOT NULL,
	PRIMARY KEY	(`tid`),
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/** Cria a tabela de vinculação da tradução com usuário **/
CREATE TABLE IF NOT EXISTS `user_translation` (
	`tid`	int(10) unsigned NOT NULL AUTO_INCREMENT,
	`uid` 	int(10) unsigned NOT NULL,
	`tdate` date NOT NULL,
	FOREIGN KEY (`uid`) REFERENCES `user`(`uid`),
FOREIGN KEY (`tid`) REFERENCES `translation`(`tid`),
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/** Cria a tabela de bugs **/
CREATE TABLE IF NOT EXISTS `bugs` (
	`bid`	int(10) unsigned NOT NULL AUTO_INCREMENT,
	`btitle`	varchar(30) NOT NULL, 
	`bstatus`	smallint(2) NOT NULL,
	`bauthor`	int(10) unsigned NOT NULL,
	PRIMARY KEY (`bid`),
	FOREIGN KEY (`bauthor`) REFERENCES `user`(`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;


/** Cria a tabela de postagem em bugs **/
CREATE TABLE IF NOT EXISTS `bugs_post` (
	`bid`	int(10) unsigned NOT NULL,
	`bpost`	varchar(30) NOT NULL, 
	`bauthor`	int(10) unsigned NOT NULL,
	FOREIGN KEY (`big`) REFERENCES `bid`(`bid`),
	FOREIGN KEY (`bauthor`) REFERENCES `user`(`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/* População de usuário padrão para conta de administrador */
INSERT INTO user(uid, user, mail, pass) VALUES ('1','root','admin@dev.brathena.org','toor');
INSERT INTO user_group(uid, gid, title) VALUES ('1','1','Administrador');
