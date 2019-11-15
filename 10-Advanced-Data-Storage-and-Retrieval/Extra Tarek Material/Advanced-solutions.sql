
-- 1. Git top 10 buying customers
select c.customer_id, concat(c.first_name, ' ', c.last_name) as Full_Name, sum(amount) as SaleAmount
from payment p
join customer c on
	c.customer_id = p.customer_id
group by 1,2
order by 3 desc
limit 10;



-- select c.first_name, c.last_name, c.active, top.SaleAmount
-- from customer as c
-- left outer join
--     (select customer_id, sum(amount) as SaleAmount
--         from payment
--         group by customer_id
--         order by 2 desc limit 10) as top
-- on top.customer_id = c.customer_id;

--2.
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


--3. 
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
order by 3 desc