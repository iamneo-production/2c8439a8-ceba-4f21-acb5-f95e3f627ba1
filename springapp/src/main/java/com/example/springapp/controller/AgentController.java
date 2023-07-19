package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Agent;
import com.example.springapp.service.AgentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("")
public class AgentController {
	
	@Autowired
	private AgentService agentService;
	
	
	@GetMapping("/agent/id")
	public Agent getAgentProfile(@RequestParam int id, @RequestHeader String email, @RequestHeader String name) {
		return agentService.getAgentProfile(id, email, name);
	}
	
	@GetMapping("/agents")
	public ResponseEntity<List<Agent>> getAllAgents() {
		 List<Agent> agents = agentService.getAllAgents();
	        return ResponseEntity.ok(agents);
	}
}
	