CREATE TABLE foobar (
	country VARCHAR,
	ISO3 VARCHAR,
	rank INT,
	TotalPopulation INT,
	ManpowerAvailable INT,
	TotalMilitaryPersonnel INT,
	ActivePersonnel INT,
	ReservePersonnel INT,
	TotalAircraftStrength INT,
	FighterAircraft INT,
	AttackAircraft INT,
	TotalHelicopterStrength INT,
	AttackHelicopters INT
);

SELECT * FROM firepower;

-- UPDATE firepower
-- SET fighteraircraft = 1
-- WHERE fighteraircraft = 0;

SELECT COUNT(*)
FROM firepower
WHERE totalaircraftstrength = 0;

UPDATE firepower
SET totalaircraftstrength = totalaircraftstrength + 1
WHERE fighteraircraft = 1;

SELECT AVG(totalmilitarypersonnel), AVG(totalaircraftstrength), AVG(totalhelicopterstrength), AVG(totalpopulation)
FROM firepower;

INSERT INTO firepower(country, iso3, rank, totalpopulation, manpoweravailable, totalmilitarypersonnel, activepersonnel, reservepersonnel, totalaircraftstrength, fighteraircraft, attackaircraft, totalhelicopterstrength, attackhelicopters)
VALUES
(
	'foobar',
	'FB',
	500,
	500,
	1,
	AVG(totalmilitarypersonnel),
	3,
	4,
	5,
	6,
	7,
	8,
	9
);

SELECT country, totalhelicopterstrength FROM firepower
ORDER BY 2 DESC LIMIT 10 OFFSET 2
TO STDOUT;



SELECT *
FROM firepower
WHERE country = 'foobar'

COPY  firepower(country,iso3)
FROM 'C:\Users\jfoust\Documents\git\DBC_Files\DataVizBootCamp\09-SQL\Day 1\08-Stu_CRUD\Resources\GlobalFirePower.csv' DELIMITER ',' CSV HEADER;


COPY foobar FROM '/Users/jfoust/Documents/git/DBC_Files/DataVizBootCamp/09-SQL/Day 1/08-Stu_CRUD/Resources/GlobalFirePower.csv';