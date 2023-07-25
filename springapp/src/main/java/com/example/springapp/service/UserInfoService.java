package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.LoginModel;
import com.example.springapp.model.UserModel;
import com.example.springapp.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepository userRepo;
    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

    public UserModel saveUser(UserModel user) {
        String encryptedPwd = bcrypt.encode(user.getPassword());
        user.setPassword(encryptedPwd);
        return userRepo.save(user);
    }

    public UserModel isUserPresent(LoginModel loginModel) {
        UserModel user = userRepo.findByEmail(loginModel.getEmail());
       if(user != null && bcrypt.matches(loginModel.getPassword(), user.getPassword())){
           return user;
        }
       return null;
    }

    public List<UserModel> getAllusers() {
        return userRepo.findAll();
    }

    public void addUser(UserModel user) {
        String encryptedPwd = bcrypt.encode(user.getPassword());
        user.setPassword(encryptedPwd);
        userRepo.save(user);
    }

    public UserModel getElementsByuserId(long userId) {
        return userRepo.findByuserId(userId);
    }

    public void editUser(UserModel user) {
        userRepo.save(user);
    }

    public void deleteUser(long userId) {
        userRepo.deleteById(userId);
    }

    public UserModel getbyEmailid(String email) {
        return userRepo.findByEmail(email);
    }
}
