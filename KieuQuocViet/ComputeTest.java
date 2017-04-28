/**
 * Created by hp 8470 on 4/28/2017.
 */

import static org.junit.Assert.*;
import org.junit.Test;

public class ComputeTest {
    @Test
    public void Multi(){
        equation a = new equation();
        assertEquals(10,a.multi(2*5));
    }
}
