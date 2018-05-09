package com.redhat.raffle.repository;


import org.springframework.data.repository.CrudRepository;

import com.redhat.raffle.bean.Authentication;
import com.redhat.raffle.bean.Details;

public interface DetailsRepository extends CrudRepository<Details, Integer> {
}