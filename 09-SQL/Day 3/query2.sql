SELECT * FROM Address LIMIT 10;

SELECT city, city_id FROM City
WHERE city LIKE 'Q%';


SELECT Address.district
FROM Address
JOIN City
ON City.city_id = Address.city_id
WHERE city LIKE 'Q%';


SELECT c.first_name, c.last_name
FROM Customer c
JOIN
(SELECT Address.address_id
 FROM Address
 JOIN City
 ON City.city_id = Address.city_id
 WHERE city LIKE 'Q%') AS a
ON c.address_id = a.address_id;
