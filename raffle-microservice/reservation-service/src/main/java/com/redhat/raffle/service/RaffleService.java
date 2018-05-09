package com.redhat.raffle.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.redhat.raffle.bean.Attendee;

public interface RaffleService {
  
    public Page<Attendee> getAttendees(Pageable pageable) throws IOException;
    public List<Attendee> getRandomAttendees() throws IOException;
    
}