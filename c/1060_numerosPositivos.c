#include <stdio.h>
 
int main() {
 
    float numero = 0.0;
    int positivos, i = 0;
    
    for(i = 0; i < 6 ; i++){
        scanf("%f", &numero);
        if (numero >= 0){
            positivos++;
        }
    }
    
    printf("%d valores positivos\n", positivos);
 
    return 0;
}