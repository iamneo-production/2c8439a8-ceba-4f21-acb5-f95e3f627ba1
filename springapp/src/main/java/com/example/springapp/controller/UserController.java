package com.example.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/user/register")
	public String register(@RequestBody User user) {
		return userService.register(user);
	}
	
	@PutMapping("/user")
	public String updateUserProfile(@RequestBody User user) {
		return userService.updateUserProfile(user);
	}
}
