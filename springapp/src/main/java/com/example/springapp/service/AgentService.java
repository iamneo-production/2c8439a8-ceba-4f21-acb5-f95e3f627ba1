package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Agent;
import com.example.springapp.repository.AgentRepository;

@Service
public class AgentService {
	
@Autowired
	private AgentRepository agentRepository;
	
	public Agent getAgentProfile(int id, String email, String name) {
		if(agentRepository.existsByEmailAndName(email, name)) {
		    return agentRepository.findById(id).orElse(null);
		}
		else {
			return null;
		}
	}
	
	public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }
}