SELECT c.name FROM Customers c
INNER JOIN Legal_person l
ON c.id = l.id_customers;