USE business_db;

INSET INTO departments(name)
VALUES 
("Operations"),
("Engineering"),
("Product Management"),
("Design");

INSERT INTO roles(title,salary,deparment_id)
VALUES
    ("Operations Director",100000.00,1,),
    ("Operations Specialist",45000.00,1),

    ("Engineering Director",200000.00,2),
    ("Engineer",120000.00,2),

    ("PMO Director",180000.00,3),
    ("Product Manager",70000.00,3),

    ("Design Director",190000.00,4),
    ("UI/UX Designer",100000.00,4);
INSERT INTO employees(first_name, last_name, role_id, manager_id)
    VALUES
    ("Luke", "Skywalker", 5),
    ("Darth", "Vader", 2),
    ("Master", "Yoda", 3),
    ("Ahsoka", "Tano", 4),
    ("Din", "Djarin", 3),
    ("Boba", "Fett", 4),
    ("Leia", "Skywalker", 7),
    ("Artoo", "Deeto", 6),
    ("Han", "Solo", 3),
    ("Obi-Wan", "Kenobi", 4);
  