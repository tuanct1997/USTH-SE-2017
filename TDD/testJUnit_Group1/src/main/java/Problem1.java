import java.io.FileInputStream;
import java.util.Scanner;

/**
 * Created by sonbn on 4/23/17.
 */
public class Problem1{
    private static final int NUMBER_OF_VERTEX = 5;
    private static final String INPUT_1 = "/Volumes/SharedData/SourceCode/DiscreteMath/Practical3/src/main/java/input1.txt";

    private Graph graph;
    private void init(){
        graph = new Graph(NUMBER_OF_VERTEX);
        try {
            FileInputStream fileInputStream = new FileInputStream(INPUT_1);
            Scanner scanner = new Scanner(fileInputStream);
            int row = 0;
            while (scanner.hasNextLine()){
                String vertex = scanner.nextLine().trim();
                int column = 0;
                for (String s : vertex.split(" ")){
                    if (s.equals("1")){
                        if (column > row){
                            graph.addEdge(row, column);
                        }
                    }
                    column++;
                }
                row++;
            }

        } catch (Exception e){
            System.out.println(e.toString());
        }
    }

    public void exec(){
        init();
        if (graph.isTree())
            System.out.println("Yes, the graph is a tree");
        else
            System.out.println("No, the graph is not a tree");
    }
}
