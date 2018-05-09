package com.redhat.raffle.repository;


import org.springframework.data.repository.CrudRepository;

import com.redhat.raffle.bean.Authentication;

public interface AuthenticationRepository extends CrudRepository<Authentication, Integer> {
    public Authentication findByEmail(String email);
}