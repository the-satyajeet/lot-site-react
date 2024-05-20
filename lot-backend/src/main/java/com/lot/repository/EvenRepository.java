package com.lot.repository;

import com.lot.module.EventRegister;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EvenRepository extends JpaRepository<EventRegister,Integer> {

   // public List<EventRegister> findEventsByUserId(Integer userId);
}
