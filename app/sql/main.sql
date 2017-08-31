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
	`uid` 	int(10) unsigned NOT NULL,
	`tstatus` smallint(2) NOT NULL,
	`tname`	varchar(30) NOT NULL,
	PRIMARY KEY	(`tid`),
	FOREIGN KEY (`uid`) REFERENCES `user`(`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `bugs` (
	`big`	int(10) unsigned NOT NULL AUTO_INCREMENT,
	`btitle`	varchar(30) NOT NULL, 
	`bstatus`	smallint(2) NOT NULL,
	`bauthor`	int(10) unsigned NOT NULL,
	PRIMARY KEY (`big`),
	FOREIGN KEY (`bauthor`) REFERENCES `user`(`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/* População de usuário padrão para conta de administrador */
INSERT INTO user(uid, user, mail, pass) VALUES ('1','root','admin@dev.brathena.org','toor');
INSERT INTO user_group(uid, gid, title) VALUES ('1','1','Administrador');
