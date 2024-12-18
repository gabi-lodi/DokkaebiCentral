
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

-- CREATE TABLE Comentario(
-- idComentario int primary key auto_increment,
-- conteudo varchar(300),
-- fkPostagem int,
-- fkComentarioUsuario int,
-- 	constraint fkComPost foreign key (fkPostagem)
-- 		references Postagem(idPostagem),
--     constraint fkComUsuario foreign key (fkComentarioUsuario)
-- 		references Usuario(idUsuario)
-- );

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

-- UPDATE Usuario SET fkPersoFav = ${persoFav} AND fkArcoFav = ${arcoFav} WHERE idUsuario = ${idUsuario};

SELECT p.nome FROM Personagem AS p JOIN Usuario AS u ON u.fkPersoFav = p.idPerso;

-- select para o ranking de arcos mais populares
SELECT p.nome, COUNT(u.idUsuario) AS quantidade 
	FROM Usuario AS u RIGHT 
    JOIN Arco AS p 
		ON u.fkArcoFav = p.idArco 
	GROUP BY p.nome 
    ORDER BY quantidade DESC;

-- select para o ranking de personagens
SELECT p.nome, COUNT(u.idUsuario) AS quantidade 
	FROM Usuario AS u 
	RIGHT JOIN Personagem AS p 
		ON u.fkPersoFav = p.idPerso 
	GROUP BY p.nome 
	ORDER BY quantidade DESC;

-- select para as postagens
SELECT p.idPostagem, p.titulo, p.descricao, u.nome FROM Postagem as p JOIN Usuario as u ON p.fkUsuario = u.idUsuario ORDER BY idPostagem desc;

-- select para quantidade de postagens
SELECT COUNT(idPostagem) FROM Postagem WHERE fkUsuario = 1;

-- select para mostrar o personagem favorito de um determinado usuário
SELECT p.nome FROM Personagem as p JOIN Usuario as u ON u.fkPersoFav = p.idPerso WHERE u.idUsuario = 1;

-- select para mostrar o arco favorito de um determindado usuário
SELECT a.nome FROM Arco as a JOIN Usuario as u ON u.fkPersoFav = a.idArco WHERE u.idUsuario = 1;

-- UPDATE Usuario SET fkPersoFav = 1 WHERE idUsuario = 1;

-- select para o gráfico de progresso
SELECT PL.capitulo FROM ProgressoLeitura as PL JOIN Usuario as U ON PL.fkUsuario = U.idUsuario  WHERE nome = '' AND email = ''AND senha = '';

-- select para a média do progresso de leitura dos usuários (média de capitulos lidos)
SELECT ROUND(AVG(capitulo)) FROM ProgressoLeitura;

SELECT p.nome, COUNT(u.idUsuario) AS quantidade
FROM Usuario AS u
JOIN Personagem AS p 
    ON u.fkPersoFav = p.idPerso
GROUP BY p.idPerso
ORDER BY quantidade DESC
LIMIT 1;