package com.example.springapp.contoller;
import com.example.springapp.model.LoginModel;
import com.example.springapp.model.UserModel;
import com.example.springapp.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
public class AuthController {

    @Autowired
    private UserInfoService userinfoService;

    // Check if a user with the given email exists
    @GetMapping("/user/signup/{email}")
    public Boolean checkUserbyEmail(@PathVariable String email) {
        Boolean flag = userinfoService.checkUserbyEmail(email);
        return flag;
    }

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

    // Save a new admin user
    @PostMapping("/admin/signup")
    public String saveAdmin(@RequestBody UserModel user) {
        UserModel u = userinfoService.getbyEmailid(user.getEmail());
        if (u == null) {
            userinfoService.saveAdmin(user);
            return "Admin user added";
        } else {
            return "Admin User already exists";
        }
    }

    // Save a new agent user
    @PostMapping("/agent/signup")
    public String saveAgent(@RequestBody UserModel user) {
        UserModel u = userinfoService.getbyEmailid(user.getEmail());
        if (u == null) {
            userinfoService.saveAgent(user);
            return "Agent user added";
        } else {
            return "Agent User already exists";
        }
    }

    // Check if a user with the provided credentials exists (User login)
    @PostMapping("/user/login")
    public Boolean isUserPresent(@RequestBody LoginModel loginModel) {
        Boolean flag = userinfoService.isUserPresent(loginModel);
        return flag;
    }

    // Check if an admin user with the provided credentials exists (Admin login)
    @PostMapping("/admin/login")
    public Boolean isAdminPresent(@RequestBody LoginModel loginModel) {
        Boolean flag = userinfoService.isAdminPresent(loginModel);
        return flag;
    }

    // Check if an agent user with the provided credentials exists (Agent login)
    @PostMapping("/agent/login")
    public Boolean isAgentPresent(@RequestBody LoginModel loginModel) {
        Boolean flag = userinfoService.isAgentPresent(loginModel);
        return flag;
    }

    // Check userRole by email
    @GetMapping("/login/checkUserRole/{email}")
    public String checkUserRolebyEmail(@PathVariable String email) {
        String userRole = userinfoService.checkUserRolebyEmail(email);
        return userRole;
    }
}
