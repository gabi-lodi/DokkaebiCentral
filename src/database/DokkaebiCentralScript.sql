DROP DATABASE DokkaebiCentral;
CREATE DATABASE DokkaebiCentral;
USE DokkaebiCentral;

CREATE TABLE Personagem(
idPerso int primary key auto_increment,
nome varchar(50)
);

CREATE TABLE Arco(
idArco int primary key auto_increment,
nome varchar(120)
);

CREATE TABLE Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(256),
senha varchar(100),
dtNasc date,
fkPersoFav int,
	constraint fkPersoUsuario foreign key (fkPersoFav)
		references Personagem(idPerso),
fkArcoFav int,
	constraint fkArcoUsuario foreign key (fkArcoFav)
		references Arco(idArco)
);

CREATE TABLE ProgressoLeitura(
idProgresso int primary key auto_increment,
capitulo int,
fkUsuario int,
	constraint fkProgressoUsuario foreign key (fkUsuario)
		references Usuario(idUsuario)
);

SELECT COUNT(idProgresso) FROM ProgressoLeitura WHERE fkUsuario = 1;

CREATE TABLE Postagem(
idPostagem int primary key auto_increment,
dtPostagem date,
titulo varchar(40),
descricao varchar(300),
fkUsuario int,
    constraint fkPostagensUsuario foreign key (fkUsuario)
		references Usuario(idUsuario)
);

CREATE TABLE Comentario(
idComentario int primary key auto_increment,
conteudo varchar(300),
fkPostagem int,
fkComentarioUsuario int,
	constraint fkComPost foreign key (fkPostagem)
		references Postagem(idPostagem),
    constraint fkComUsuario foreign key (fkComentarioUsuario)
		references Usuario(idUsuario)
);

INSERT INTO Personagem (nome) VALUES
	('Kim Dokja'),
	('Yoo Joonghyuk'),
	('Han Sooyoung'),
	('Lee Hyunsung'),
	('Jung Heewon'),
	('Lee Jihye'),
	('Yoo Sangah'),
	('Shin Yooshung'),
	('Lee Gilyoung');
    
INSERT INTO Arco (nome) VALUES
	('Chegada dos Novatos'),
	('Domínio da Guerra'),
	('Grande Guerra de Estrelas'),
	('Guerra Civil de Seul'),
	('Candidatos à Transcendência'),
	('Novo Mundo'),
	('Cenário Final'),
	('Epilogo');

INSERT INTO Personagem (nome) VALUES
	('Não Definido');
    
INSERT INTO Arco (nome) VALUES
	('Não Definido');

select * from Usuario; 
select * from Personagem; 
select * from Arco; 
select * from Postagem;
select * from ProgressoLeitura;

SELECT p.titulo, p.descricao, u.nome FROM Postagem as p JOIN Usuario as u ON p.fkUsuario = u.idUsuario;


