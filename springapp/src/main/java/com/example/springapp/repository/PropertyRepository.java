package com.example.springapp.repository;

import com.example.springapp.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {


    Property findById(long id);

}
