import java.io.FileInputStream;
import java.util.Scanner;

/**
 * Created by sonbn on 4/23/17.
 */
public class Problem2 {
    public static Node root = null;
    private static final String INPUT_2 = "/Volumes/SharedData/SourceCode/DiscreteMath/Practical3/src/main/java/input2.txt";

    private boolean find(int data){
        Node current = root;
        while (current != null){
            if (current.data == data){
                return true;
            } else if (current.data > data){
                current = current.left;
            } else if (current.data < data){
                current = current.right;
            }
        }
        return false;
    }

    private boolean delete(int data){
        Node parent = root;
        Node current = root;
        boolean isLeftChild = false;
        while (current.data != data){
            parent = current;
            if (current.data > data){
                isLeftChild = true;
                current = current.left;
            } else {
                isLeftChild = false;
                current = current.right;
            }
            if (current == null){
                return false;
            }
        }
        if(current.left==null && current.right==null){
            if(current==root){
                root = null;
            }
            if(isLeftChild ==true){
                parent.left = null;
            }else{
                parent.right = null;
            }
        }
        //Case 2 : if node to be deleted has only one child
        else if(current.right==null){
            if(current==root){
                root = current.left;
            }else if(isLeftChild){
                parent.left = current.left;
            }else{
                parent.right = current.left;
            }
        }
        else if(current.left==null){
            if(current==root){
                root = current.right;
            }else if(isLeftChild){
                parent.left = current.right;
            }else{
                parent.right = current.right;
            }
        }else if(current.left!=null && current.right!=null){

            //now we have found the minimum element in the right sub tree
            Node successor	 = getSuccessor(current);
            if(current==root){
                root = successor;
            }else if(isLeftChild){
                parent.left = successor;
            }else{
                parent.right = successor;
            }
            successor.left = current.left;
        }
        return true;
    }

    public Node getSuccessor(Node deleleNode){
        Node successsor =null;
        Node successsorParent =null;
        Node current = deleleNode.right;
        while(current!=null){
            successsorParent = successsor;
            successsor = current;
            current = current.left;
        }
        //check if successor has the right child, it cannot have left child for sure
        // if it does have the right child, add it to the left of successorParent.
//		successsorParent
        if(successsor!=deleleNode.right){
            successsorParent.left = successsor.right;
            successsor.right = deleleNode.right;
        }
        return successsor;
    }

    public void insert(int id){
        Node newNode = new Node(id);
        if(root==null){
            root = newNode;
            return;
        }
        Node current = root;
        Node parent = null;
        while(true){
            parent = current;
            if(id<current.data){
                current = current.left;
                if(current==null){
                    parent.left = newNode;
                    return;
                }
            }else{
                current = current.right;
                if(current==null){
                    parent.right = newNode;
                    return;
                }
            }
        }
    }

    //Display in post-order
    public void display(Node root){
        if(root!=null){
            display(root.left);
            display(root.right);
            System.out.print(" " + root.data);
        }
    }

    private void initData(){
        root = null;
        try {
            FileInputStream fileInputStream = new FileInputStream(INPUT_2);
            Scanner scanner = new Scanner(fileInputStream);
            while (scanner.hasNextLine()){
                insert(Integer.parseInt(scanner.nextLine()));
            }

        } catch (Exception e){
            System.out.println(e.toString());
        }
    }

    public void exec(){
        initData();
        System.out.println("Original Tree : ");
        display(root);
        System.out.println("");
        System.out.println("Check whether Node with value 15 exists : " + find(15));
        System.out.println("Delete Node with no children (2) : " + delete(2));
        display(root);
        System.out.println("\n Delete Node with one child (4) : " + delete(4));
        display(root);
        System.out.println("\n Delete Node with Two children (10) : " + delete(10));
        display(root);
    }
}
