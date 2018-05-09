package com.redhat.raffle.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
/**
The attendee object will be stored in a table with the name "attendee"
**/
@Table(name="attendee", schema="DataServiceLayer")
/**
The Authentication class defines a user object for storage in a relational database system.
**/
public class Attendee {

    @Id
    private Integer id;
    private String firstName;
    private String lastName;

    protected Attendee(){}
    /**
    This is the constructor for the database object.
    **/
    public Attendee(Integer id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setEmail(String firstname) {
        this.firstName = firstname;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
