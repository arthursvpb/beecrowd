import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int t = input.nextInt();
		input.nextLine(); // Consume newline left-over

		for (int i = 0; i < t; i++) {
			String string = input.nextLine();
			String[] arrString = string.split(" ");

			int pa = Integer.parseInt(arrString[0]);
			int pb = Integer.parseInt(arrString[1]);
			double g1 = Double.parseDouble(arrString[2]);
			double g2 = Double.parseDouble(arrString[3]);

			int years = 0;

			while (pa <= pb) {
				years++;
				pa += (int) (pa * (g1 / 100));
				pb += (int) (pb * (g2 / 100));
				if (years > 100) {
					System.out.println("Mais de 1 seculo.");
					break;
				}
			}

			if (years <= 100) {
				System.out.println(years + " anos.");
			}

		}

	}

}
