package com.example.springapp.contoller;
import com.example.springapp.model.UserModel;
import com.example.springapp.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@RestController
@RequestMapping
public class UserModelController {
    @Autowired
    private UserInfoService userinfoService;

    @GetMapping("/Users")
    public List<UserModel> getAllUsers(){
        return userinfoService.getAllusers();
    }
    @PostMapping("/addUser")
    public String addUser(@RequestBody UserModel user){

        userinfoService.addUser(user);
        return "User/ Admin added";
    }

    @PutMapping("/editUser/{userId}")
    public ResponseEntity<UserModel> editUser(@PathVariable long userId, @RequestBody UserModel user){
        UserModel allUsers = userinfoService.getElementsByuserId(userId);
        allUsers.setEmail(user.getEmail());
        allUsers.setPassword(user.getPassword());
        allUsers.setUsername(user.getUsername());
        allUsers.setMobileNumber(user.getMobileNumber());
        allUsers.setUserRole(user.getUserRole());
        userinfoService.editUser(allUsers);
        return ResponseEntity.ok(allUsers);
    }
    @DeleteMapping("/deleteUser/{userId}")
    public String deleteUser(@PathVariable long userId) {
        userinfoService.deleteUser(userId);
        return "User/Admin deleted";
    }

    //unique
    @GetMapping("/login/getUserId/{email}")
    public long getUserIdbyEmail(@PathVariable String email)
    {
        long userId = userinfoService.getUserIdbyEmail(email);
        return userId;
    }

    //get by  userId
    @GetMapping("/getUser/{userId}")
    public ResponseEntity<UserModel> getcustomerByuserId(@PathVariable long userId)
    {
        UserModel customer= userinfoService.getElementsByuserId(userId);
        return ResponseEntity.ok(customer);
    }

    //Getting the User's list
    @GetMapping("/getUserDetailsByRole/{userRole}")
    public ResponseEntity<List<Map<String, Object>>> getUserDetailsByRole(@PathVariable String userRole) {
        List<UserModel> users = userinfoService.getUsersByRole(userRole);

        if (users.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<Map<String, Object>> userDetailsList = new ArrayList<>();

        for (UserModel user : users) {
            Map<String, Object> userDetails = new HashMap<>();
            userDetails.put("id", user.getUserId());
            userDetails.put("username", user.getUsername());
            userDetails.put("email", user.getEmail());
            userDetails.put("phone", user.getMobileNumber());
            userDetailsList.add(userDetails);
        }

        return ResponseEntity.ok(userDetailsList);
    }

}
