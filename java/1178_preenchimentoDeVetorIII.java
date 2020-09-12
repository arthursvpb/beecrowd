import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in).useLocale(Locale.US);

		double n = input.nextDouble();
		double[] nArr = new double[100];
		
		for (int i = 0; i < 100; i++) {
			nArr[i] = n;
			n /= 2;
			System.out.printf("N[" + i + "] = %.4f%n", nArr[i]);
		}

	}

}
