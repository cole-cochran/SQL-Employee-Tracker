# SQL-employees-Tracker
SELECT roles.title AS "title", roles.salary AS "salary", department_name AS "departments name" FROM roles roles LEFT JOIN departments AS departments ON departments.id = roles.department_id

21:32:48	SELECT roles.title AS "title", roles.salary AS "salary", department_name AS "departments name" FROM roles roles LEFT JOIN departments AS departments ON departments.id = roles.departments_id LIMIT 0, 1000	Error Code: 1146. Table 'my_business.roles' doesn't exist	0.00068 sec


21:36:31	SELECT roles.title AS "title", roles.salary AS "salary", department_name AS "departments name" FROM roles roles LEFT JOIN departments AS departments ON departments.id = roles.departments_id LIMIT 0, 1000	Error Code: 1054. Unknown column 'roles.departments_id' in 'on clause'	0.00046 sec

