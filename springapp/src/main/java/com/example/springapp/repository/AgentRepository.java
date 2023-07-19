package com.example.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Agent;

public interface AgentRepository extends JpaRepository<Agent, Integer> {
	Optional<Agent> findByEmail(String email);
	
	public Boolean existsByEmail(String email);
	
	public Boolean existsByEmailAndName(String email, String name);
}