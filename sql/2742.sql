SELECT lr.name, ROUND(lr.omega*1.618, 3) AS "Fator N" FROM Dimensions d
INNER JOIN Life_Registry lr
ON d.id = lr.dimensions_id
WHERE d.name in ('C875', 'C774') AND lr.name LIKE 'Richard%'
ORDER BY "Fator N";