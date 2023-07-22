package com.example.springapp.controller;
import com.example.springapp.model.Admin;
import com.example.springapp.model.LoginModel;
import com.example.springapp.model.UserModel;
import com.example.springapp.service.AdminService;
import com.example.springapp.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Boolean isUserPresent(@RequestBody LoginModel loginModel) {
        Boolean flag = userinfoService.isUserPresent(loginModel);
        return flag;
    }

    // Save a new agent
    @PostMapping("/agent/signup")
    public String saveAgent(@RequestBody Agent agent){

        Agent a= agentService.getbyEmailid(agent.getEmail());
        if(a!=null){
            return "Agent already exists";
        }else{
            agentService.saveAgent(agent);
            return "Agent added";
        }
    }

    // Agent Login
    @PostMapping("/agent/login")
    public Boolean isAgentPresent(@RequestBody LoginModel loginModel){
        Boolean flag = agentService.isAgentPresent(loginModel);
        return flag;
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
    public Boolean isAdminPresent(@RequestBody LoginModel loginModel) {
        Boolean flag = adminService.isAdminPresent(loginModel);
        return flag;
    }

}
