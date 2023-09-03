CREATE TABLE IF NOT EXISTS authentication (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(320) NOT NULL,
    salt VARCHAR(256) NOT NULL,
    hash VARCHAR(256) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO authentication (email, salt, hash)
VALUES ("test1@6uogames.com", "some_random_salt", "2013620fbb68e16b1e4c311fa0603ff700b96a3f50f858659c7bababf38d533e6e86cc13ef1055ddbf43fa50aa24322b753dfd6ea865eb387ba146d8da94917e"),
("satyafariznur@gmail.com", "some_random_salt", "d319df142e86df80d8670b422ce8aec592fa208bb29e249f66079ace6f72d51bd341d30ac0e547a6721f066005ae6e60d4d97dc15729fdb00126e2ca615dd603");