package RomanCoverter;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RomanConverterTests {

    private void assertToRoman(int arabic, String expected) {
        assertEquals(expected, RomanConverter.toRomanNumber(arabic));
    }

    private RomanConverter conveter;
    @Before
    public void setUp() throws Exception {
        conveter = new RomanConverter();
    }

    @Test
    public void convertNUll() throws Exception{
        assertToRoman(1, "I");
        assertToRoman(2, "II");
        assertToRoman(3, "III");
        assertToRoman(4, "IV");
        assertToRoman(5, "V");
        assertToRoman(6,"VI");
        assertToRoman(9,"IX");
    }

    @Test
    public void testIfNeedOfObject() throws Exception{
        assertToRoman(1, "I");
    }
}
