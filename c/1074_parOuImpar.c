#include <stdio.h>

int main(int argc, char** argv)
{
	int numero, vezes, i;
	scanf("%d", &vezes);
	
	for(i = 0; i < vezes; i++){
		
		scanf("%d", &numero);

		if(numero == 0){
			printf("NULL\n");
		}
		else if (numero % 2 == 0){
			printf("EVEN ");
		}
		else{
			printf("ODD ");
		}
		
		if (numero > 0){
			printf("POSITIVE\n");
		}
		else if (numero < 0){
			printf("NEGATIVE\n");
		}
		
	}

	return 0;
}
