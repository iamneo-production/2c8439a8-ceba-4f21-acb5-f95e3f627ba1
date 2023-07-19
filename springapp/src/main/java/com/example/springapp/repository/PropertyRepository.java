package com.example.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Integer> {
	Optional<Property> findByTitle(String title);
	
	public Boolean existsByTitle(String title);
	
	public Boolean existsByTitleAndAddress(String title, String address);
}