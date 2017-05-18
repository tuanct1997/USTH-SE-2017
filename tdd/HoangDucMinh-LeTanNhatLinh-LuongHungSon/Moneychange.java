public class Moneychange {
	public String evaluate(int a) {
        String s = "";
        int n = a;
        int qt = n/25;
 		n = n%25;
 		s = s + qt + " quarters ";
 		int dim = n/10;
 		n = n%10;
 		s = s + dim + " dimes ";
 		int nk = n/5;
 		n = n%5;
 		s = s + nk + " nickels ";
 		s = s + n + " pennies ";
        return s;
    }
}