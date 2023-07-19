package com.example.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmail(String email);
	
	public Boolean existsByEmail(String email);
	
	public Boolean existsByEmailAndPassword(String email, String password);
}
