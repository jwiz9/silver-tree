INSERT INTO departments (name)
VALUES 
  ('Customer Service'),
  ('Marketing'),
  ('Finance'),
  ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Sales consultant', 100000, 1),
  ('Sales representative', 110000, 1),
  ('Sales manager', 120000, 1),
  ('Marketing analyst', 135000, 2),
  ('Marketing specialist', 136000, 2),
  ('Marketing consultant', 140000, 2),
  ('Account broker', 115000, 3),
  ('Payroll clerk', 120000, 3),
  ('Payroll manager', 140000, 3),
  ('Budget analyst', 132000, 3),
  ('Director of recruiting', 145000, 4),
  ('Benefits manager', 132000, 4),
  ('Recruiter', 99000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Bruce', 'Bennoit', 3, NULL),
  ('Jamie', 'Miller', 2, 1),
  ('Sasha', 'Dimwar', 1, 1),
  ('Kylie', 'Gardener', 2, 1),
  ('Rick', 'Forest', 6, NULL),
  ('Andy', 'Smith', 5, NULL),
  ('Yen', 'Li', 4, NULL),
  ('Sid', 'Singh', 9, NULL),
  ('Kalvin', 'Fisher', 8, 8),
  ('Warren', 'Darnel', 7, 8),
  ('Ernie', 'Astin', 10, 8),
  ('Kayla', 'Hill', 11, NULL),
  ('Nathan', 'Meeks', 12, 12),
  ('Kim', 'Jefferson', 13, 12);