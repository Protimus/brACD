/** Cria o banco de dados do sistema **/
CREATE DATABASE bracd;
use bracd;

/** Cria a tabela de contas **/
CREATE TABLE IF NOT EXISTS `acc` (
	`acc_id`	int(10) unsigned NOT NULL AUTO_INCREMENT,
    `user`	varchar(25) COLLATE utf8_unicode_ci NOT NULL,
    `mail`	varchar(30)	NOT NULL,
    `pass`	varchar(25) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY	(`account_id`),
    UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/** Cria a tabela de grupos **/
CREATE TABLE IF NOT EXISTS `acc_group` (
	`acc_id`	int(10) unsigned NOT NULL,
	`group_id` 	int(10) unsigned NOT NULL AUTO_INCREMENT,
	`title`	varchar(20)	DEFAULT 'Membro',
	PRIMARY KEY (`group_id`),
	FOREIGN KEY (`acc_id`) REFERENCES `acc`(`acc_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/** Cria a tabela de traduções 
- Status 0 = Aguardando tradução
- Status 1 = Realizando tradução 
- Status 2 = Revisando tradução
- Status 3 = Conclusão de tradução **/
CREATE TABLE IF NOT EXISTS `translation` (
	`trans_id`	int(10) unsigned NOT NULL AUTO_INCREMENT,
	`acc_id` 	int(10) unsigned NOT NULL,
	`trans_status` smallint(2) NOT NULL,
	`trans_name`	varchar(30) NOT NULL,
	PRIMARY KEY	(`trans_id`),
	FOREIGN KEY (`account_id`) REFERENCES `acc`(`account_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;

/* População de usuário padrão para conta de administrador */
INSERT INTO acc (acc_id, user, mail, pass) VALUES ('1','root','admin@dev.brathena.org','toor');
INSERT INTO acc_group(acc_id, group_id, title) VALUES ('1','1','Administrador');