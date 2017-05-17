+import org.junit.Test;
+
+import static org.junit.Assert.*;
+
+public class testequation {
+
+    @Test
+    public void testlinear() throws Exception {
+        equation m = new equation();
+        assertEquals(5,m.linear(3,2,1));
+    }
+
+    @Test
+    public void testquadratic() throws Exception {
+        equation m= new equation();
+        assertEquals(21,m.quadratic(4,1,3,2));
+    }
+
+    @Test
+    public void multi() throws Exception {
+        equation m=new equation();
+        assertEquals(41,m.cubic(3,2,4,1,2));
+    }
+}
