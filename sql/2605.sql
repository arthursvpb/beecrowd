SELECT p.name, f.name FROM Products p INNER JOIN Providers f ON p.id_providers = f.id WHERE p.id_categories = 6;