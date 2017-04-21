/**
 * Created by sonbn on 4/21/17.
 */
public class Main {
    public static boolean isPerfectNumber(int number){
        int sum = 0;
        for (int i = 1; i <= number/2; i++){
            if (number%i == 0){
                sum += i;
            }
        }
        if (sum == number){
            return true;
        } else {
            return false;
        }
    }
}
