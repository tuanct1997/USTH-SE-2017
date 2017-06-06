package RomanCoverter;

import java.util.Arrays;
import java.util.List;

public class RomanConverter {
    private static String Symbols[] = {"M","D","CD","C","CD","L","XL","X","IX","V","IV","I"};
    private static int Values[] = {1000,500,400,100,90,50,40,10,9,5,4,1};
    public static String toRomanNumber(int arabic) {
        StringBuilder arabicNumber = new StringBuilder();
        int remainder = arabic;
        for (int i=0;i<Values.length;i++)
            for(;remainder>=Values[i];remainder -= Values[i])
                arabicNumber.append(Symbols[i]);
        return arabicNumber.toString();
    }

}
