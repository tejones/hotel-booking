package com.redhat.raffle.repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.redhat.raffle.bean.Attendee;

public interface RaffleRepository extends PagingAndSortingRepository<Attendee, String> {
    Page<Attendee> getAttendees(Pageable pageable);
    
    List<Attendee> getRandomAttendees();
    
    Attendee insertAttendee(Attendee attendee);
}

