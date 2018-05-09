package com.redhat.raffle.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.redhat.raffle.bean.Authentication;
import com.redhat.raffle.repository.AuthenticationRepository;

@Service
@Transactional
class AuthenticationServiceImpl implements AuthenticationService {

	@Autowired
	private AuthenticationRepository authenticationRepository;

	@Override
	public Authentication authenticate(String email) {
		return authenticationRepository.findByEmail(email);
	}
}
