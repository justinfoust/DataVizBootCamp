--1) List the following details of each employee: employee number, last name, first name, gender, and salary.

-- SELECT
-- 	e.emp_no,
-- 	e.last_name,
-- 	e.first_name,
-- 	e.gender,
-- 	s.salary
-- FROM Emp e
-- JOIN Sal s
-- ON e.emp_no = s.emp_no;


--2) List employees who were hired in 1986

-- SELECT *
-- FROM Emp
-- WHERE hire_date > '1986-01-01' AND hire_date < '1986-12-31';


--3) List the manager of each deparment with the following information:
--   department number, department name, manager's employee number, last name, first name, start and end dates

SELECT *
FROM Depts;

--4) List the deaprtment of each employee with the following information: 
--   employee number, last name, first name, and department name.


--5) List all employees whose first name is "Hercules" and last names begin with "B".


--6) List all employees in the Sales department, including their 
--   employee number, last name, first name, and department name.


--7) List all employees in the Sales and Development departments, including their: 
--   employee number, last name, first name, and department name.


--8) In descending order, list the frequency count of employee last names 
--   i.e., how many employees share each last name.

-- SELECT
-- FROM
-- JOIN
-- 	ON
-- WHERE
-- GROUP BY