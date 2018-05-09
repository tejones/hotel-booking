package com.redhat.raffle.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redhat.raffle.bean.Attendee;
import com.redhat.raffle.repository.RaffleRepository;

@Service
@Transactional
class RaffleServiceImpl implements RaffleService {

	@Autowired
	private RaffleRepository raffleRepository;

    @Value("${RAFFLE_SERVICE_GET_ATTENDEES_URL://booking-state-service:8080/getattendees}")
    private String RAFFLE_SERVICE_GET_ATTENDEES_URL;

    @Value("${BOOKING_STATE_SERVICE_DELETE_URL:http://booking-state-service:8080/getrandomattendees}")
    private String RAFFLE_SERVICE_GET_RANDOM_ATTENDEES_URL;

	@Override
	public Page<Attendee> getAttendees(Pageable pageable) throws IOException {
		return raffleRepository.getAttendees(pageable);
	}

	@Override
	public List<Attendee> getRandomAttendees() throws IOException {
		ArrayList<Attendee> attendees = (ArrayList<Attendee>) raffleRepository.getRandomAttendees();
		Collections.shuffle(attendees);
		return attendees;
	}

}
