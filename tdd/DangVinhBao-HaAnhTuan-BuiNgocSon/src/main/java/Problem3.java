import java.util.Stack;

/**
 * Created by sonbn on 4/23/17.
 */
public class Problem3 {
    private long calculate(String s){
        Stack<Long> numbers = new Stack<Long>();
        s = s.trim();
        for (String i : s.split(" ")){
            if (i.equals("+") || i.equals("-") || i.equals("*") || i.equals("/")){
                long firstNumber = numbers.pop();
                long secondNumber = numbers.pop();
                switch (i) {
                    case "+":
                        numbers.push(firstNumber + secondNumber);
                        break;
                    case "-":
                        numbers.push(secondNumber - firstNumber);
                        break;
                    case "*":
                        numbers.push(firstNumber*secondNumber);
                        break;
                    case "/":
                        numbers.push(secondNumber/firstNumber);
                        break;
                }
            } else {
                numbers.push(Long.parseLong(i));
            }
        }
        return numbers.pop();
    }

    public void exec(){
        String example = "5 1 2 + 4 * + 3 -";
        System.out.println("Result = " + calculate(example));
    }
}
