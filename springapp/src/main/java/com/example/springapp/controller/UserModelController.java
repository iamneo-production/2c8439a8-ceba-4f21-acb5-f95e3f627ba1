package com.example.springapp.controller;

import com.example.springapp.model.UserModel;
import com.example.springapp.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Vasanth
public class UserModelController {

    @Autowired
    private UserInfoService userinfoService;

    // Get all users
    @GetMapping
    public List<UserModel> getAllUsers() {
        return userinfoService.getAllusers();
    }

    // Get user by userId
    @GetMapping("/{userId}")
    public ResponseEntity<UserModel> getElementsByuserId(@PathVariable long userId) {
        UserModel customer= userinfoService.getElementsByuserId(userId);
        return ResponseEntity.ok(customer);
    }

    // Add a new user or admin
    @PostMapping
    public String addUser(@RequestBody UserModel user) {
        userinfoService.addUser(user);
        return "User added";
    }

    // Edit an existing user or admin by userId
    @PutMapping("/{userId}")
    public ResponseEntity<UserModel> editUser(@PathVariable long userId, @RequestBody UserModel user) {
        UserModel allUsers = userinfoService.getElementsByuserId(userId);
        allUsers.setEmail(user.getEmail());
        allUsers.setPassword(user.getPassword());
        allUsers.setUsername(user.getUsername());
        allUsers.setMobileNumber(user.getMobileNumber());
        userinfoService.editUser(allUsers);
        return ResponseEntity.ok(allUsers);
    }

    // Delete a user or admin by userId
    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable long userId) {
        userinfoService.deleteUser(userId);
        return "User deleted";
    }

}
