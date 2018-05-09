package com.redhat.raffle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redhat.raffle.bean.Attendee;
import com.redhat.raffle.repository.RaffleRepository;

@Service
@Transactional
class ScannerServiceImpl implements ScannerService {

	@Autowired
	private RaffleRepository raffleRepository;

	@Override
	public Attendee parseScannedValue(String scannedValue) {
		String[] splitValue = scannedValue.split("|");
		String lastName = splitValue[2];
		String firstName = splitValue[1];
		String id = splitValue[0];
		
		Attendee attendee = new Attendee(Integer.getInteger(id), firstName, lastName);
		
		return raffleRepository.insertAttendee(attendee);
	}

}
