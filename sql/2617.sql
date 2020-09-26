SELECT p.name, f.name
FROM Products p
INNER JOIN Providers f
ON f.id = p.id_providers
WHERE f.name = 'Ajax SA';