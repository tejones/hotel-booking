package com.redhat.raffle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.redhat.raffle.bean.Authentication;
import com.redhat.raffle.bean.Details;
import com.redhat.raffle.service.AuthenticationService;
import com.redhat.raffle.service.ScannedValueService;

import java.io.IOException;


@RestController
//specifying endpoint location
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ScannedValueService scannedValueService;

    /**
     the getAll method retrieves all attendees in the database. This is mapped to hte GET rest action
     @return A List() of Authentication items
     **/
    @RequestMapping(method=RequestMethod.GET, value="/authenticate")
    public Authentication authenticate(@RequestParam("email") String email) throws IOException {
        return authenticationService.authenticate(email);
    }

    /**
     the getAll method retrieves all food items in the database. This is mapped to hte GET rest action
     @return A List() of Authentication items
     **/
    @RequestMapping(method=RequestMethod.GET, value="/details")
    public Details getDetails(@RequestParam("customerid") Integer customerid) throws IOException {
        return scannedValueService.get(customerid);
    }
}