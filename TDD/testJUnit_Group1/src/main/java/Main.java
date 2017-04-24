import java.util.Scanner;

/**
 * Created by sonbn on 4/23/17.
 */
public class Main {
    public static void main(String[] args){

        Problem1 problem1 = new Problem1();
        Problem2 problem2 = new Problem2();
        Problem3 problem3 = new Problem3();
        Problem4 problem4 = new Problem4();
        Problem5 problem5 = new Problem5();
        Scanner scanner = new Scanner(System.in);
        int selection;
        do {

            System.out.println("Choose a selection:");
            System.out.println("1. Problem 1");
            System.out.println("2. Problem 2");
            System.out.println("3. Problem 3");
            System.out.println("4. Problem 4");
            System.out.println("5. Problem 5");
            System.out.println("6. Exit");
            selection = Integer.parseInt(scanner.nextLine());
            switch (selection){
                case 1:
                    problem1.exec();
                    break;
                case 2:
                    problem2.exec();
                    break;
                case 3:
                    problem3.exec();
                    break;
                case 4:
                    problem4.exec();
                    break;
                case 5:
                    problem5.exec();
                    break;
                default:
                    break;
            }
        } while (selection != 6);
    }
}

