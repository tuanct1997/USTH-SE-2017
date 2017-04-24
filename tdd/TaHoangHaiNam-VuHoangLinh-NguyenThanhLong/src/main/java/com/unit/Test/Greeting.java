package com.unit.Test;

/**
 * Created by KingK on 4/23/2017.
 */
public class Greeting {
    private String name;

    public Greeting(String name) {
        this.name = name;
    }

    public String sayHello() {
        return "Hello " + name;
    }

    public String sayHello(String other) {
        return "Hello " + other;
    }
}
