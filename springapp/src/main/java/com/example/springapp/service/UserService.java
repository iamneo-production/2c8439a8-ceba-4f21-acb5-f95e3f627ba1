package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;

@Service
public class UserService {
	
@Autowired
	private UserRepository userRepository;
	
	public String register(User user) {
		if(! userRepository.existsByEmail(user.getEmail())) {
			userRepository.save(user);
			return "User created";
		}
		return "User not created, email is already registered";
	}
	
	public User getUserProfile(int id, String email, String password) {
		if(userRepository.existsByEmailAndPassword(email, password)) {
			return userRepository.findById(id).orElse(null);
		}
		else {
			return null;
		}
	}
	
	public String updateUserProfile(User user) {
		boolean userExists = userRepository.existsById(user.getId());
		if(userExists) {
			userRepository.save(user);
			return "";
		}
		else {
			return "No user with the given id";
		}
	}
}