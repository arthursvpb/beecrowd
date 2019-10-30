#include <stdio.h>

int main(int argc, char** argv)
{
	int n, i;

	scanf("%d", &n);

	for(i = 0; i < 10000; i++)
	{

		if(i % n == 2)
		{
			printf("%d\n", i);
		}

	}


	return 0;
}
