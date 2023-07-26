package com.example.springapp.controller;

import com.example.springapp.model.UserModel;
import com.example.springapp.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:4200")
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

    @PutMapping("/updatepass/{id}/{oldpass}/{newpass}")
    public ResponseEntity<UserModel> updatepass(@PathVariable("id") Long id, @PathVariable("oldpass") String old_Pass, @PathVariable("newpass") String new_Pass){
        UserModel user = userinfoService.getElementsByuserId(id);
        if(user.getPassword().equals(old_Pass)){
            user.setPassword(new_Pass);
            userinfoService.saveUser(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }
}
