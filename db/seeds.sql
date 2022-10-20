INSERT INTO department (name)
VALUES
    ('IT Department'),
    ('Law Department'),
    ('Clean Crew'),
    ('Research Department');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Technician', 65000, 1),
    ('Lawyer', 78000, 2),
    ('Janitor', 32000, 3),
    ('Engineer', 147000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
    ('Ned', 'Jackson', 1, null),
    ('Manny', 'Higgins', 2, null),
    ('Ben', 'Woods', 1, 1);