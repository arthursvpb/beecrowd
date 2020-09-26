SET DateStyle TO ymd;

SELECT c.name, r.rentals_date 
FROM Customers c INNER JOIN Rentals r
ON c.id = r.id_customers
AND EXTRACT(MONTH FROM r.rentals_date) = 9
AND EXTRACT(YEAR FROM r.rentals_date) = 2016