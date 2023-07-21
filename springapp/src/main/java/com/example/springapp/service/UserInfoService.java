package com.example.springapp.service;
import java.util.*;
import com.example.springapp.model.LoginModel;
import com.example.springapp.model.UserModel;


public interface UserInfoService {
    UserModel saveUser(UserModel user);
    public Boolean checkUserbyEmail(String email) ;
    UserModel getbyEmailid(String email);

    UserModel saveAdmin(UserModel user);

    UserModel saveAgent(UserModel user);

    public Boolean isUserPresent(LoginModel loginModel);

    Boolean isAdminPresent(LoginModel loginModel);

    public String checkUserRolebyEmail(String email);

    Boolean isAgentPresent(LoginModel loginModel);

    List<UserModel> getAllusers();

    void addUser(UserModel user);

    UserModel getElementsByuserId(long userId);

    void editUser(UserModel allUsers);

    void deleteUser(long userId);

    long getUserIdbyEmail(String email);

    List<UserModel> getUsersByRole(String userRole);
}


