-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Depts" (
    "dept_no" var   NOT NULL,
    "dept_name" var   NOT NULL,
    CONSTRAINT "pk_Depts" PRIMARY KEY (
        "dept_no"
     )
);

CREATE TABLE "Dept_emp" (
    "emp_no" int   NOT NULL,
    "dept_no" var   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL
);

CREATE TABLE "Dept_mgr" (
    "dep_no" var   NOT NULL,
    "emp_no" int   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL
);

CREATE TABLE "emp" (
    "emp_no" int   NOT NULL,
    "birth_date" date   NOT NULL,
    "first_name" var   NOT NULL,
    "last_name" var   NOT NULL,
    "gender" var   NOT NULL,
    "hire_date" date   NOT NULL,
    CONSTRAINT "pk_emp" PRIMARY KEY (
        "emp_no"
     )
);

CREATE TABLE "sal" (
    "emp_no" int   NOT NULL,
    "salary" int   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL
);

CREATE TABLE "titl" (
    "emp_no" into   NOT NULL,
    "title" var   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL
);

ALTER TABLE "Dept_emp" ADD CONSTRAINT "fk_Dept_emp_emp_no" FOREIGN KEY("emp_no")
REFERENCES "emp" ("emp_no");

ALTER TABLE "Dept_emp" ADD CONSTRAINT "fk_Dept_emp_dept_no" FOREIGN KEY("dept_no")
REFERENCES "Depts" ("dept_no");

ALTER TABLE "Dept_mgr" ADD CONSTRAINT "fk_Dept_mgr_dep_no" FOREIGN KEY("dep_no")
REFERENCES "Depts" ("dept_no");

ALTER TABLE "Dept_mgr" ADD CONSTRAINT "fk_Dept_mgr_emp_no" FOREIGN KEY("emp_no")
REFERENCES "emp" ("emp_no");

ALTER TABLE "sal" ADD CONSTRAINT "fk_sal_emp_no" FOREIGN KEY("emp_no")
REFERENCES "emp" ("emp_no");

ALTER TABLE "titl" ADD CONSTRAINT "fk_titl_emp_no" FOREIGN KEY("emp_no")
REFERENCES "emp" ("emp_no");

