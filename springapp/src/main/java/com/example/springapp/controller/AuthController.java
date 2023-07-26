package com.example.springapp.controller;
import com.example.springapp.model.Admin;
import com.example.springapp.model.LoginModel;
import com.example.springapp.model.UserModel;
import com.example.springapp.service.AdminService;
import com.example.springapp.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.model.Agent;
import com.example.springapp.service.AgentService;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
public class AuthController {

    @Autowired
    private UserInfoService userinfoService;

    @Autowired
    private AgentService agentService;
    @Autowired
    private AdminService adminService;

    // Save a new user
    @PostMapping("/user/signup")
    public String saveUser(@RequestBody UserModel user) {
        UserModel u = userinfoService.getbyEmailid(user.getEmail());
        if (u != null) {
            return "User already exists";
        } else {
            userinfoService.saveUser(user);
            return "User added";
        }
    }

    // Check if a user with the provided credentials exists (User login)
    @PostMapping("/user/login")
    public ResponseEntity<?> isUserPresent(@RequestBody LoginModel loginModel) {
        UserModel user = userinfoService.isUserPresent(loginModel);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Save a new agent
    @PostMapping("/agent/signup")
    public String saveAgent(@RequestBody Agent agent) {

        Agent a = agentService.getbyEmailid(agent.getEmail());
        if (a != null) {
            return "Agent already exists";
        } else {
            agentService.saveAgent(agent);
            return "Agent added";
        }
    }

    // Agent Login
    @PostMapping("/agent/login")
    public ResponseEntity<?> isAgentPresent(@RequestBody LoginModel loginModel) {
        Agent agent = agentService.isAgentPresent(loginModel);
        if (agent != null) {
            return new ResponseEntity<>(agent, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Save a new admin
    @PostMapping("admin/signup") // Change the endpoint to "/admins/signup"
    public String saveAdmin(@RequestBody Admin admin) {
        Admin a = adminService.getAdminByEmail(admin.getEmail());
        if (a != null) {
            return "Admin already exists";
        } else {
            adminService.saveAdmin(admin);
            return "Admin added";
        }
    }

    // Admin Login
    @PostMapping("admin/login") // Change the endpoint to "/admins/login"
    public ResponseEntity<?> isAdminPresent(@RequestBody LoginModel loginModel) {
        Admin admin = adminService.isAdminPresent(loginModel);
        if (admin != null) {
            return new ResponseEntity<>(admin, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}