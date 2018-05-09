package com.redhat.raffle.controller;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.redhat.raffle.bean.Attendee;
import com.redhat.raffle.service.RaffleService;
import com.redhat.raffle.service.ScannerService;


@RestController
//specifying endpoint location
@RequestMapping("/raffle")
public class RaffleController {

    @Autowired
    private RaffleService raffleService;
    
    @Autowired
    private ScannerService scannerService;

    /**
     the getAll method retrieves all food items in the database. This is mapped to the GET rest action.
     @return A List() of Reservation items
     **/
    @RequestMapping(method=RequestMethod.GET, value="/getattendees")
    public Page<Attendee> getAttendees(Pageable pageable) throws IOException {
        return raffleService.getAttendees(pageable);
    }

    @RequestMapping(method=RequestMethod.GET, value="/getrandomattendees")
    public List<Attendee> getRandomAttendees() throws IOException, ParseException {
        return raffleService.getRandomAttendees();
    }
    
    @RequestMapping(method=RequestMethod.GET, value="/parsescannedvalue")
    public Attendee parseScannedValue(@RequestParam("scannedvalue") String scannedvalue) throws IOException, ParseException {
        return scannerService.parseScannedValue(scannedvalue);
    }
}