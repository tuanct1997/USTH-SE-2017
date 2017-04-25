import java.io.FileInputStream;
import java.util.*;

/**
 * Created by sonbn on 4/23/17.
 */
public class Problem5 {
    private int[] input;
    private final int N = 100;
    private int size = 0;
    private static final String INPUT_5 = "/Volumes/SharedData/SourceCode/DiscreteMath/Practical3/src/main/java/input5.txt";


    private void init(){
        Stack<Integer> inputStack = new Stack<Integer>();
        size = 0;
        try {
            FileInputStream fileInputStream = new FileInputStream(INPUT_5);
            Scanner scanner = new Scanner(fileInputStream);

            while (scanner.hasNextLine()){
                inputStack.push(Integer.parseInt(scanner.nextLine()));
                size++;
            }

        } catch (Exception e){
            System.out.println(e.toString());
        }
        input = new int[size];
        for (int i = 0; i < size; i++) {
            input[i] = inputStack.pop();
        }
    }

//    private void insertionSort(int size){
//        for (int i = 0; i < size; i++){
//            int j = min(i+1, size);
//            swap(i, j);
//        }
//    }
//
//    private int min(int startIndex, int size){
//        int dominator = startIndex;
//        for (int i = startIndex + 1; i < size; i++){
//            if (input[dominator] > input[i]){
//                dominator = i;
//            }
//        }
//        return dominator;
//    }
//
//
//
//    private void swap(int firstIndex, int lastIndex){
//        int temp = input[firstIndex];
//        input[firstIndex] = input[lastIndex];
//        input[lastIndex] = temp;
//    }

    public List<List<Integer>> subsets(int[] nums, int target) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(list, new ArrayList<>(), nums, target, 0);
        return list;
    }

    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums, int remain, int start){
        if(remain < 0) {
            return;
        }
        else if(remain == 0) {
            list.add(new ArrayList<>(tempList));
        } else{
            for(int i = start; i < nums.length; i++) {
                if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates
                tempList.add(nums[i]);
                backtrack(list, tempList, nums, remain - nums[i], i + 1);
                tempList.remove(tempList.size() - 1);
            }
        }
    }

    private void printSum(List<Integer> sum){
        String result = "";
        for (int i = 0; i < sum.size()-1; i++) {
            result += sum.get(i) + " + ";
        }
        result += sum.get(sum.size()-1);
        System.out.println(result);
    }

    public void exec(){
        init();
        Arrays.sort(input);
        for (int i : input){
            System.out.println(i);
        }
        List<List<Integer>> result = subsets(input, N);
        for (int i = 0; i < result.size(); i++) {
            List<Integer> sums = result.get(i);
            System.out.print("Sum " + i + " = ");
            printSum(sums);
        }
    }
}
