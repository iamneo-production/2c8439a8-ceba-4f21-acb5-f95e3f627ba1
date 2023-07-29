package com.example.springapp.repository;

import com.example.springapp.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    List<Admin> findAll();

    Optional<Object> findById(long id);

    Admin findByEmail(String email);

}

