package com.redhat.raffle.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.redhat.raffle.bean.Authentication;

import java.io.IOException;

public interface AuthenticationService {
    public Authentication authenticate(String email);
}