package com.example.springapp.service.impl;
import java.util.*;

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
    BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();

    @Override
    public Boolean checkUserbyEmail(String email) {

        UserModel user = userRepo.findByEmail(email);
        if(user!=null ) {
            return true;//if email is exist already
        }
        else
            return false;
    }

    @Override
    public UserModel getbyEmailid(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public UserModel saveUser(UserModel user) {
        BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
        String encrpytedPwd=bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        return userRepo.save(user);
    }

    @Override
    public UserModel saveAdmin(UserModel user) {
        BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
        String encrpytedPwd=bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        return userRepo.save(user);
    }

    @Override
    public UserModel saveAgent(UserModel user) {
        BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
        String encrpytedPwd=bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        return userRepo.save(user);
    }

    @Override
    public Boolean isUserPresent(LoginModel loginModel) {
        UserModel user=userRepo.findByEmail(loginModel.getEmail());

        if(user!=null  && user.getUserRole().equals("User")
                && bcrypt.matches(loginModel.getPassword(),user.getPassword())){
            return true;
        }
        else
            return false;
    }

    @Override
    public Boolean isAdminPresent(LoginModel loginModel) {
        UserModel user=userRepo.findByEmail(loginModel.getEmail());

        if(user!=null  && user.getUserRole().equals("Admin")
                && bcrypt.matches(loginModel.getPassword(),user.getPassword()) ){
            return true;
        }
        else
            return false;
    }
    @Override
    public Boolean isAgentPresent(LoginModel loginModel) {
        UserModel user=userRepo.findByEmail(loginModel.getEmail());

        if(user!=null  && user.getUserRole().equals("Agent")
                && bcrypt.matches(loginModel.getPassword(),user.getPassword()) ){
            return true;
        }
        else
            return false;
    }

    @Override
    public List<UserModel> getAllusers() {
        return userRepo.findAll();
    }

    @Override
    public void addUser(UserModel user) {
        BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
        String encrpytedPwd=bcrypt.encode(user.getPassword());
        user.setPassword(encrpytedPwd);
        userRepo.save(user);
    }

    @Override
    public UserModel getElementsByuserId(long userId) {
        return userRepo.findByuserId(userId);
    }

    @Override
    public void editUser(UserModel user) {
        userRepo.save(user);
    }

    @Override
    public void deleteUser(long userId) {
        userRepo.deleteById(userId);
    }

    @Override
    public long getUserIdbyEmail(String email) {
        UserModel user=userRepo.findByEmail(email);
        if(user != null)
            return user.getUserId();
        else
            return 0;
    }

    @Override
    public List<UserModel> getUsersByRole(String userRole) {
        return userRepo.findByUserRole(userRole);
    }

    @Override
    public String checkUserRolebyEmail(String email) {
        UserModel user=userRepo.findByEmail(email);
        if(user != null)
            return user.getUserRole();
        else
            return "Email ID not found";
    }



}
