import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
    Scanner e = new Scanner(System.in);

    int a = e.nextInt();
    e.nextLine();

    int c = 0;
    for(int i = 0; i < a; i++){
      c += (e.nextInt() - 1);
    }

    System.out.println(c);
 
    }
 
}