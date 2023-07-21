package com.example.springapp.service.impl;

import java.util.List;

import com.example.springapp.model.LoginModel;
import com.example.springapp.model.UserModel;
import com.example.springapp.repository.UserInfoRepository;
import com.example.springapp.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserInfoImpl implements UserInfoService {

    @Autowired
    private UserInfoRepository userRepo;
    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

    // Check if a user with the given email exists in the database
    @Override
    public Boolean checkUserbyEmail(String email) {
        UserModel user = userRepo.findByEmail(email);
        return user != null;
    }

    // Get the user with the given email from the database
    @Override
    public UserModel getbyEmailid(String email) {
        return userRepo.findByEmail(email);
    }

    // Save a user to the database, encrypting the password before saving
    @Override
    public UserModel saveUser(UserModel user) {
        String encrpytedPwd = bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        return userRepo.save(user);
    }

    // Save an admin user to the database, encrypting the password before saving
    @Override
    public UserModel saveAdmin(UserModel user) {
        String encrpytedPwd = bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        return userRepo.save(user);
    }

    // Save an agent user to the database, encrypting the password before saving
    @Override
    public UserModel saveAgent(UserModel user) {
        String encrpytedPwd = bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        return userRepo.save(user);
    }

    // Check if a user with the given login credentials (email and password) exists in the database
    @Override
    public Boolean isUserPresent(LoginModel loginModel) {
        UserModel user = userRepo.findByEmail(loginModel.getEmail());

        return user != null && user.getUserRole().equals("User") && bcrypt.matches(loginModel.getPassword(), user.getPassword());
    }

    // Check if an admin user with the given login credentials (email and password) exists in the database
    @Override
    public Boolean isAdminPresent(LoginModel loginModel) {
        UserModel user = userRepo.findByEmail(loginModel.getEmail());

        return user != null && user.getUserRole().equals("Admin") && bcrypt.matches(loginModel.getPassword(), user.getPassword());
    }

    // Check if an agent user with the given login credentials (email and password) exists in the database
    @Override
    public Boolean isAgentPresent(LoginModel loginModel) {
        UserModel user = userRepo.findByEmail(loginModel.getEmail());

        return user != null && user.getUserRole().equals("Agent") && bcrypt.matches(loginModel.getPassword(), user.getPassword());
    }

    // Get all users from the database
    @Override
    public List<UserModel> getAllusers() {
        return userRepo.findAll();
    }

    // Add a user to the database, encrypting the password before saving
    @Override
    public void addUser(UserModel user) {
        String encrpytedPwd = bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        userRepo.save(user);
    }

    // Get a user by their ID from the database
    @Override
    public UserModel getElementsByuserId(long userId) {
        return userRepo.findByuserId(userId);
    }

    // Update an existing user in the database
    @Override
    public void editUser(UserModel user) {
        userRepo.save(user);
    }

    // Delete a user from the database by their ID
    @Override
    public void deleteUser(long userId) {
        userRepo.deleteById(userId);
    }

    // Get the user ID by their email from the database
    @Override
    public long getUserIdbyEmail(String email) {
        UserModel user = userRepo.findByEmail(email);
        return user != null ? user.getUserId() : 0;
    }

    // Get a list of users with the specified role from the database
    @Override
    public List<UserModel> getUsersByRole(String userRole) {
        return userRepo.findByUserRole(userRole);
    }

    // Get the user role by their email from the database
    @Override
    public String checkUserRolebyEmail(String email) {
        UserModel user = userRepo.findByEmail(email);
        return user != null ? user.getUserRole() : "Email ID not found";
    }
}
