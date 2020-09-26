SELECT concat(
substring(n.cpf, 1, 3),'.',
substring(n.cpf, 4, 3),'.',
substring(n.cpf, 7, 3),'-',
substring(n.cpf, 10, 2)
) as CPF
FROM Natural_Person n
INNER JOIN Customers c
ON n.id_customers = c.id;