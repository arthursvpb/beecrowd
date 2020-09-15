SELECT c.name, sum(p.amount) sum FROM Products p INNER JOIN Categories c ON p.id_categories = c.id GROUP BY c.name;

