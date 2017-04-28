import java.io.FileInputStream;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

/**
 * Created by sonbn on 4/23/17.
 */
public class Problem4 {
    private static final int NUMBER_OF_VERTEX = 4;
    private static final String INPUT_4 = "/Volumes/SharedData/SourceCode/DiscreteMath/Practical3/src/main/java/input4.txt";
    private Graph graph;

    private void initData(){
        graph = new Graph(NUMBER_OF_VERTEX);
        try {
            FileInputStream fileInputStream = new FileInputStream(INPUT_4);
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
        initData();

        //Find spanning tree from vertex 0
        LinkedList<Integer> result = graph.DFS(0);
        System.out.println("Result");
        for (int i = 0; i < result.size(); i++) {
            System.out.println(result.get(i));
        }
    }
}
