SELECT c.name, o.id FROM Customers c
INNER JOIN Orders o ON c.id = o.id_customers
WHERE EXTRACT(MONTH FROM orders_date) <= 6;