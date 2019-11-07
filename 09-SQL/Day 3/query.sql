select * from film limit 10;

SELECT COUNT(film_id) AS "Total Films" FROM film;

SELECT rating, COUNT(film_id) AS "Total Films"
FROM film
GROUP BY rating;

SELECT DISTINCT rating FROM film;
SELECT rating FROM film GROUP BY rating;

SELECT DISTINCT rental_rate FROM film;

SELECT rating, rental_rate, COUNT(film_id) AS "Total Films"
FROM film
WHERE rating = 'PG'
GROUP BY rating, rental_rate
ORDER BY rating;

SELECT rating, rental_rate, COUNT(film_id) AS "Total Films"
FROM film
GROUP BY rating, rental_rate
HAVING COUNT(film_id) > 50;
--ORDER BY rating;

SELECT a.*
FROM
(SELECT rating, rental_rate, COUNT(film_id) AS "Total Films"
 FROM film
 GROUP BY 1, 2) AS a
 WHERE a."Total Films" > 70;

SELECT a.*
FROM
(SELECT rating, rental_rate, COUNT(film_id) AS "Total Films"
 FROM film
 GROUP BY 1, 2) AS a
 WHERE a."Total Films" > 60 AND a.rating IN  ('R','G');

SELECT f.film_id, rating, actor_id
FROM film f
JOIN film_actor a
ON f.film_id = a.film_id;

ALTER TABLE film
ADD PRIMARY KEY (film_id);

ALTER TABLE Film_actor
ADD FOREIGN KEY(film_id) REFERENCES film(film_id);

-- SELECT
-- FROM
-- JOIN
-- 	ON
-- WHERE
-- GROUP BY