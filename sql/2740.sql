(SELECT CONCAT('Podium: ', team) AS name FROM league LIMIT 3)
UNION ALL
(SELECT CONCAT('Demoted: ', team) FROM
	(SELECT * FROM League ORDER BY position DESC LIMIT 2) as subquery
 ORDER BY position)