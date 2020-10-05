SELECT name, customers_number From Lawyers
WHERE customers_number = (SELECT MAX(customers_number) FROM Lawyers)
UNION ALL
SELECT name, customers_number FROM Lawyers
WHERE customers_number = (SELECT MIN(customers_number) FROM Lawyers)
UNION ALL
SELECT 'Average' as name, CAST(AVG(customers_number) AS int) FROM Lawyers;