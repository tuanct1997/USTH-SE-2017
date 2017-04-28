import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Pham Duy Minh on 23-Apr-17.
 */
public class numberTest {
    @Test
    public void isEven() throws Exception {
        number num = new number(2);
        assertEquals ( true , num.isEven() );
    }

}