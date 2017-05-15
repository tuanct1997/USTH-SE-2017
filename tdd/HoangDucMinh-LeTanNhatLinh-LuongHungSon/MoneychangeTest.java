import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by nlag on 4/24/17.
 */
public class MoneychangeTest {
    @Test
    public void evaluate() throws Exception {
        Moneychange money = new Moneychange();
        String sum = money.evaluate(17);
        assertEquals("0 quarters 1 dimes 1 nickels 2 pennies ", sum);
    }
}
