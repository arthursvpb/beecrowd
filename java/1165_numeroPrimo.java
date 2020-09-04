import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int n = input.nextInt();

		for (int i = 0; i < n; i++) {

			int x = input.nextInt();

			if (checkPrime(x)) {
				System.out.println(x + " eh primo");
			} else {
				System.out.println(x + " nao eh primo");
			}

		}

	}

	public static boolean checkPrime(int x) {

		for (int i = 2; i < x; i++) {
			if (x % i == 0) {
				return false;
			}
		}

		return true;
	}

}
