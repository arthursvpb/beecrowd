SELECT p.name, f.name, c.name from Products p
INNER JOIN Providers f ON p.id_providers = f.id
INNER JOIN Categories c ON p.id_categories = c.id
WHERE f.name = 'Sansul SA' AND c.name = 'Imported';