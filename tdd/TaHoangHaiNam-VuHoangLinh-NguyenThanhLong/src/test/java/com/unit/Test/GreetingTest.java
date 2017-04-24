package com.unit.Test;

import org.junit.Assert;
import org.junit.Test;

/**
 * Created by KingK on 4/23/2017.
 */
public class GreetingTest {

    @Test
    public void say_Hello_correctly() {
        Greeting greeting = new Greeting("Paul");

        Assert.assertEquals("Hello Paul", greeting.sayHello());
        Assert.assertEquals("Hello Sean", greeting.sayHello("Sean"));

        Assert.assertNotEquals("Hello Sean", greeting.sayHello());
    }
}
