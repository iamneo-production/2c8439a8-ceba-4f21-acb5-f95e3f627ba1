package com.example.springapp.contoller;

import com.example.springapp.model.Agent;
import com.example.springapp.exception.ResourceNotFoundException;
import com.example.springapp.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/agents")
@CrossOrigin("http://localhost:4200")
public class AgentController {
    @Autowired
    private AgentService agentService;

    @GetMapping
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @PostMapping
    public Agent createAgent(@RequestBody Agent agent) {
        return agentService.createAgent(agent);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agent> getAgentById(@PathVariable long id) {
        Agent agent = agentService.getAgentById(id);
        return ResponseEntity.ok(agent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Agent> updateAgent(@PathVariable long id, @RequestBody Agent agentDetails) {
        Agent updatedAgent = agentService.updateAgent(id, agentDetails);
        return ResponseEntity.ok(updatedAgent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteAgentById(@PathVariable long id) {
        agentService.deleteAgentById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
