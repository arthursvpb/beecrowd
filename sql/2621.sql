SELECT p.name FROM Products p
INNER JOIN Providers f
ON p.id_providers = f.id
WHERE p.amount BETWEEN 10 AND 20
AND f.name LIKE 'P%';