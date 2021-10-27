USE my_business;
SET FOREIGN_KEY_CHECKS=0;

INSERT INTO departments(department_name)
VALUES 
("Operations"),
("Engineering"),
("Product Management"),
("Design");

INSERT INTO roles(title,salary,department_id)
VALUES
    ("Operations Director",100000.00,1),
    ("Operations Specialist",45000.00,1),

    ("Engineering Director",200000.00,2),
    ("Engineer",120000.00,2),

    ("PMO Director",180000.00,3),
    ("Product Manager",70000.00,3),

    ("Design Director",190000.00,4),
    ("UI/UX Designer",100000.00,4);
INSERT INTO employees(first_name, last_name, role_id, manager_id)
    VALUES
    ("Luke", "Skywalker", 1, NULL),
    ("Darth", "Vader", 2, 1),
    ("Boba", "Fett", 4, NULL),
    ("Din", "Djarin", 3, 2),
    ("Princess", "Leia", 7, 3),
    ("Han", "Solo", 3, NULL),
    ("Artoo", "Deeto", 6, NULL),
    ("Obi-Wan", "Kenobi", 4, 4);
  