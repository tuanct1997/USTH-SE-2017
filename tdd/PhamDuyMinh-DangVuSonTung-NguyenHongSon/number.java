/**
 * Created by Pham Duy Minh on 23-Apr-17.
 */
public class number {
    private int num;
    public number(int n){
        num = n;
    }

    public boolean isEven(){
        if(num%2 == 0)
            return true;
        else
            return false;
    }
}
