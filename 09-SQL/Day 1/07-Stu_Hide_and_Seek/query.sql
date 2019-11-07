--DROP TABLE IF EXISTS wordassociatino;

--CREATE TABLE wordassociations_two();
-- (
-- 	author VARCHAR,
-- 	word1 VARCHAR,
-- 	word2 VARCHAR,
-- 	source VARCHAR
-- );

SELECT * FROM wordassociations LIMIT 10;

-- SELECT *
-- FROM wordassociations
-- WHERE word1 LIKE 'p_e' OR word2 LIKE 'pi%';

-- SELECT author, word1 AS "Story 1", word2 AS "Story 2", SOURCE FROM wordassociations;

-- SELECT author, concat(word1,' ',word2) AS words
-- INTO test
-- FROM wordassociations;

-- SELECT * FROM test;

SELECT CASE
WHEN word1 = 'pie' THEN 'NICE PIE' 
WHEN word1 LIKE 'mo%' THEN 'EEK MOUSE!'
ELSE 'GREAT' END AS newComment
FROM wordassociations
WHERE word1 = 'pie' OR word2 LIKE 'mo%';