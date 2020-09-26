SELECT p.name, f.name, p.price FROM Products p
INNER JOIN Providers f ON p.id_providers = f.id
INNER JOIN Categories c ON p.id_categories = c.id
WHERE p.price > 1000 AND c.name = 'Super Luxury';