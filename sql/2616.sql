SELECT c.id, c.name FROM Customers c
WHERE c.id NOT IN(
	SELECT l.id_customers
	FROM Locations l
);