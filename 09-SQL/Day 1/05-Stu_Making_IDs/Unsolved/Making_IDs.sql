DROP TABLE If Exists programming_languages;

CREATE TABLE programming_languages
(
	id SERIAL PRIMARY KEY,
	language VARCHAR(20),
	rating INT
);

INSERT INTO programming_languages (language, rating)
VALUES
('HTML',95),
('JS',99),
('JQuery',98),
('MySQL',70),
('MySQL',70);

SELECT *
FROM programming_languages
WHERE language = 'MySQL';

DELETE FROM programming_languages
WHERE id = 5;

UPDATE programming_languages
SET language = 'JavaScript'
WHERE language = 'JS';

UPDATE programming_languages
SET rating = 90
WHERE language = 'HTML';

ALTER TABLE programming_languages
ADD COLUMN mastered BOOLEAN DEFAULT 'true';

SELECT *
FROM programming_languages
ORDER BY 2 DESC, 3;