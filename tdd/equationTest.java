import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by MyPC on 21/04/2017.
 */
public class equationTest {
    @Test
    public void testAdd() throws Exception {
        equation j = new equation();
        assertEquals(4,j.add(1,3));
    }

    @Test
    public void testSub() throws Exception {
        equation j= new equation();
        assertEquals(4,j.sub(5,1));
    }

    @Test
    public void multi() throws Exception {
        equation j=new equation();
        assertEquals(4,j.multi(2,2));
    }

    @Test
    public void div() throws Exception {
        equation j=new equation();
        assertEquals(4,j.div(8,2));
    }

}
