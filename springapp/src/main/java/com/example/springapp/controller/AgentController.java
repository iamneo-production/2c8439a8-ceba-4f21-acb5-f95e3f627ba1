package com.example.springapp.controller;

import com.example.springapp.model.Agent;
import com.example.springapp.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agents")
<<<<<<< HEAD
@CrossOrigin(origins = "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/")  //Vasanth
// @CrossOrigin(origins = "https://8081-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/")  //Revan
// @CrossOrigin(origins = "https://8081-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/")  //Anshi
// @CrossOrigin(origins = "https://8081-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/")  //Raas
=======
@CrossOrigin(origins = "https://8081-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/")  //Suganya

>>>>>>> f135a4cf2a2c6158d88d2b29fa2dd43e71c2bbb9
public class AgentController {
    @Autowired
    private AgentService agentService;

    // Get all agents
    @GetMapping
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    // Create a new agent
    @PostMapping
    public Agent createAgent(@RequestBody Agent agent) {
        return agentService.createAgent(agent);
    }

    // Get agent by id
    @GetMapping("/{id}")
    public ResponseEntity<Agent> getAgentById(@PathVariable long id) {
        Agent agent = agentService.getAgentById(id);
        return ResponseEntity.ok(agent);
    }

    // Update agent by id
    @PutMapping("/{id}")
    public ResponseEntity<Agent> updateAgent(@PathVariable long id, @RequestBody Agent agentDetails) {
        Agent updatedAgent = agentService.updateAgent(id, agentDetails);
        return ResponseEntity.ok(updatedAgent);
    }

    // Delete agent by id
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteAgentById(@PathVariable long id) {
        agentService.deleteAgentById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
