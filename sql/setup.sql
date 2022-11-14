-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS joinTable;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released INT
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    dob VARCHAR NOT NULL,
    pob VARCHAR NOT NULL
);

CREATE TABLE joinTable (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id INT NOT NULL,
    book_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO books (
    title,
    released
)
VALUES
('Paroaria gularis', 1998),
('Himantopus himantopus', 2005),
('Sula nebouxii', 2010),
('Aepyceros mylampus', 2013),
('Thylogale stigmatica', 1997),
('Tursiops truncatus', 2012),
('Heloderma horridum', 2007),
('Colobus guerza', 2009),
('Alces alces', 1989),
('Sylvicapra grimma', 2001),
('Macaca radiata', 2010),
('Bubo sp.', 2005),
('Melophus lathami', 2002),
('Melanerpes erythrocephalus', 2007),
('Gorilla gorilla', 1995),
('Uraeginthus angolensis', 1997),
('Catharacta skua', 2006),
('Bucephala clangula', 2007),
('Dromaeus novaehollandiae', 1994),
('Sagittarius serpentarius', 1995);

INSERT INTO authors (
    name,
    dob,
    pob
)
VALUES
('Clayson Woffenden', '04/30/1967', 'Kiel'),
('Edeline Winton', '07/07/1935', 'Bořitov'),
('Dianna Underdown', '03/06/1921', 'Ulluaya'),
('Cass Rameaux', '04/11/1973', 'Bitin'),
('Rabi Nortunen', '01/07/1960', 'Wasagu'),
('Jessica Barthelmes', '02/10/1947', 'Mandesan'),
('Wendye McCamish', '08/08/1946', 'Białogard'),
('Danella Tuminelli', '06/19/1966', 'Izrā'),
('Clemmy Lorenzin', '05/04/1904', 'Wohyń'),
('Trix Kupec', '07/25/1947', 'Janja'),
('Sigmund Gorioli', '09/17/1967', 'Timoulilt'),
('Linell Tirrell', '12/02/1918', 'Makata'),
('Ardelle Errol', '03/22/1950', 'Wanjiazhuang'),
('Bartholomeus Ilyuchyov', '05/30/1999', 'Yylanly'),
('Trudie Overland', '07/12/1915', 'Duermenqin'),
('Gretchen Espino', '12/03/1919', 'Zhatay'),
('Kelby Brightling', '03/24/1995', 'Santo Antônio de Pádua'),
('Marysa Plum', '01/18/1926', 'Lusk'),
('Lynsey Joseph', '10/22/1960', 'Nowe Miasto nad Pilicą'),
('Wandie Cordeau', '05/13/1925', 'Tvrdonice');

INSERT INTO joinTable (
    author_id,
    book_id
)
VALUES
(10, 12),
(17, 1),
(11, 10),
(3, 18),
(18, 4),
(4, 7),
(13, 12),
(12, 5),
(8, 16),
(2, 10),
(2, 9),
(1, 18),
(19, 16),
(16, 9),
(15, 1),
(1, 9),
(4, 4),
(3, 10),
(20, 19),
(19, 12),
(8, 8),
(16, 8),
(3, 17),
(15, 20),
(19, 5),
(8, 15),
(13, 11),
(3, 10),
(20, 13),
(8, 20);
