-- SELECT c.id, c.name, SUM(p.amount) AS "saleamount"
-- FROM Customer_list c
-- JOIN Payment p 
-- ON c.id = p.customer_id
-- GROUP BY c.id, c.name
-- ORDER BY "saleamount" DESC
-- LIMIT 10;


-- SELECT c.first_name, c.last_name,
-- 	CASE WHEN top.SaleAmount IS NOT NULL THEN True ELSE False END AS "Top 10"
-- FROM Customer AS c
-- LEFT OUTER JOIN
-- 	(SELECT customer_id, SUM(amount) AS SaleAmount
-- 	FROM Payment
-- 	GROUP BY customer_id
-- 	ORDER BY 2 DESC LIMIT 10) AS top
-- ON top.customer_id = c.customer_id
-- ORDER BY "Top 10" DESC;

-- WITH top_ten AS (
-- SELECT customer_id, sum(amount) AS SaleAmount
-- 	FROM Payment
-- 	GROUP BY customer_id
-- 	ORDER BY 2 DESC LIMIT 10
-- )

-- SELECT c.first_name, c.last_name,
-- 	CASE WHEN top.SaleAmount IS NOT NULL THEN True ELSE False END AS "Top 10"
-- FROM Customer AS c
-- ON top.customer_id = c.customer_id
-- ORDER BY "Top 10" DESC;

-- SELECT c.first_name, c.last_name,
-- 	CASE WHEN top.SaleAmount IS NOT NULL THEN True ELSE False END AS "Top 10"
-- FROM Customer AS c
-- LEFT OUTER JOIN
-- 	(SELECT customer_id, SUM(amount) AS SaleAmount
-- 	FROM Payment
-- 	GROUP BY customer_id
-- 	ORDER BY 2 DESC LIMIT 10) AS top
-- ON top.customer_id = c.customer_id
-- ORDER BY "Top 10" DESC;



CREATE VIEW foo
SELECT c.id, c.name, SUM(p.amount) AS "saleamount"
FROM Customer_list c
JOIN Payment p 
ON c.id = p.customer_id
GROUP BY c.id, c.name
ORDER BY "saleamount" DESC
LIMIT 5
UNION 
SELECT c.id, c.name, SUM(p.amount) AS "saleamount"
FROM Customer_list c
JOIN Payment p 
ON c.id = p.customer_id
GROUP BY c.id, c.name
ORDER BY "saleamount" 
-- SOLVED --

select c.customer_id, concat(c.first_name, ' ', c.last_name) as Full_Name, sum(amount) as SaleAmount
from payment p
join customer c on
	c.customer_id = p.customer_id
group by 1,2
order by 3 desc
limit 10;

--------

select c.first_name, c.last_name,
	   case when top.SaleAmount is not null then True else False end as "Top 10"
from customer as c
left outer join
    (select customer_id, sum(amount) as SaleAmount
    from payment
    group by customer_id
    order by 2 desc limit 10) as top
on top.customer_id = c.customer_id
order by "Top 10" desc;

---------

with top_ten as (
select customer_id, sum(amount) as SaleAmount
    from payment
    group by customer_id
    order by 2 desc limit 10
)
select c.first_name, c.last_name,
	   case when top.SaleAmount is not null then True else False end as "Top 10"
from customer as c
left outer join top_ten as top
on top.customer_id = c.customer_id
order by "Top 10" desc;

-----------

select a.*
from
    (select c.first_name, c.last_name, sum(p.amount) as SaleAmount, 'Top 5' as Status
    from payment p
        join customer c on
	c.customer_id = p.customer_id
    group by 1,2
    order by 3 desc
limit 5) a
UNION 
select b.* from
(select c.first_name, c.last_name, sum(p.amount) as SaleAmount, 'Bottom 5' as Status
    from payment p
        join customer c on
	c.customer_id = p.customer_id
    group by 1,2
    order by 3 asc
limit 5) b
order by 3 desc;