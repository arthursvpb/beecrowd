import java.io.*;
import java.util.*;

/**
 * IMPORTANT: O nome da classe deve ser "Main" para que a sua solução execute
 * Class name must be "Main" for your solution to execute El nombre de la clase
 * debe ser "Main" para que su solución ejecutar
 */
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String valor = br.readLine();
        // Criando uma string para manipular o valor double.
        String[] dinheiro = new String[2];
        // Convertendo o valor double em String.
        String valorString = String.valueOf(valor);
        // Split da string para separar notas e moedas.
        dinheiro = valorString.split("\\.");

        // Variáveis usadas para realização dos cálculos
        int notas = Integer.parseInt(dinheiro[0]);
        int moedas = Integer.parseInt(dinheiro[1]);
        int restoNotas = 0;
        int restoMoedas = 0;

        // Notas
        int notasCem = notas / 100;
        restoNotas = (notas % 100);
        int notasCinquenta = restoNotas / 50;
        restoNotas %= 50;
        int notasVinte = restoNotas / 20;
        restoNotas %= 20;
        int notasDez = restoNotas / 10;
        restoNotas %= 10;
        int notasCinco = restoNotas / 5;
        restoNotas %= 5;
        int notasDois = restoNotas / 2;
        restoNotas %= 2;
        int notasUm = restoNotas;

        // Moedas
        int moedasCinquenta = moedas / 50;
        restoMoedas = (moedas % 50);
        int moedasVinteECinco = restoMoedas / 25;
        restoMoedas %= 25;
        int moedasDez = restoMoedas / 10;
        restoMoedas %= 10;
        int moedasCinco = restoMoedas / 5;
        restoMoedas %= 5;
        int moedasUm = restoMoedas;

        System.out.println(
                "NOTAS:\n"
                + notasCem + " nota(s) de R$ 100.00\n"
                + notasCinquenta + " nota(s) de R$ 50.00\n"
                + notasVinte + " nota(s) de R$ 20.00\n"
                + notasDez + " nota(s) de R$ 10.00\n"
                + notasCinco + " nota(s) de R$ 5.00\n"
                + notasDois + " nota(s) de R$ 2.00\n"
                + "MOEDAS:\n"
                + notasUm + " moeda(s) de R$ 1.00\n"
                + moedasCinquenta + " moeda(s) de R$ 0.50\n"
                + moedasVinteECinco + " moeda(s) de R$ 0.25\n"
                + moedasDez + " moeda(s) de R$ 0.10\n"
                + moedasCinco + " moeda(s) de R$ 0.05\n"
                + moedasUm + " moeda(s) de R$ 0.01");
    }

}
