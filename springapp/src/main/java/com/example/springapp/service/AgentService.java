package com.example.springapp.service;

import com.example.springapp.model.Agent;
import com.example.springapp.exception.ResourceNotFoundException;
import com.example.springapp.model.LoginModel;
import com.example.springapp.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;

    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

    // Get all agents from the database
    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    // Create a new agent and save it in the database
    public Agent createAgent(Agent agent) {
        String encryptedPwd = bcrypt.encode(agent.getPassword());
        agent.setPassword(encryptedPwd);
        return agentRepository.save(agent);
    }

    // Get an agent by its ID from the database
    public Agent getAgentById(long id) {
        return agentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Agent not found with id: " + id));
    }

    // Update an existing agent with the provided agent details
    public Agent updateAgent(long id, Agent agentDetails) {
        Agent agent = agentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Agent not found with id: " + id));
        agent.setName(agentDetails.getName());
        agent.setEmail(agentDetails.getEmail());
        agent.setPhone(agentDetails.getPhone());
        agent.setProfileImageUrl(agentDetails.getProfileImageUrl());
        return agentRepository.save(agent);
    }

    // Delete an agent from the database by its ID
    public void deleteAgentById(long id) {
        Agent agent = agentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Agent not found with id: " + id));
        agentRepository.delete(agent);
    }

    public Agent getbyEmailid(String email) {
        return agentRepository.findByEmail(email);
    }

    public Agent saveAgent(Agent agent) {
        String encryptedPwd = bcrypt.encode(agent.getPassword());
        agent.setPassword(encryptedPwd);
        return agentRepository.save(agent);
    }

    public Agent isAgentPresent(LoginModel loginModel) {
        Agent agent = agentRepository.findByEmail(loginModel.getEmail());

        if(agent != null && bcrypt.matches(loginModel.getPassword(), agent.getPassword())){
            return agent;
        }
        return null;
    }
}

