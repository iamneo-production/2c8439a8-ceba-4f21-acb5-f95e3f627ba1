package com.realestateapi.backend.controller;


// import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.realestateapi.backend.entity.Admin;
import com.realestateapi.backend.service.AdminService;
import com.realestateapi.backend.service.JwtService;

// import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin")
public class MainController {

    @Autowired
    private AdminService service;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    // @GetMapping("/getadmins")
    // @PreAuthorize("hasAuthority(\"ROLE_ADMIN\")")
    // public List<Admin> getAllAdmins() {
    //     return adminRepository.findAll();
    // }

    // @GetMapping("/{id}")
    // @PreAuthorize("hasAuthority(\"ROLE_USER\")")
    // public ResponseEntity<Admin> getAdminById(@PathVariable(value = "id") Long adminId) {
    //     Admin admin = adminRepository.findById(adminId)
    //     .orElseThrow();
    //     return ResponseEntity.ok().body(admin);
    // }

    // @PostMapping("/newadmin")
    // public Admin createAdmin(@Valid @RequestBody Admin admin) {
    //     return adminRepository.save(admin);
    // }

    // @PostMapping("/loginadmin")
    // public ResponseEntity<?> loginAdmin (@RequestParam String username, @RequestParam String password) {
    //     Optional<Admin> admin = adminRepository.findByName(username);

    //     if (admin == null || !admin.getPassword().equals(password)) {
    //         throw new RuntimeException("Invalid email or pasword");
    //     }
    //     return ResponseEntity.ok().body("Agent Logged in Successfully");
    // }

    @PostMapping("/new")
    public String addNewUser(@RequestBody Admin admin) {
        return service.addAdmin(admin);
    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

        if(authentication.isAuthenticated()) {

            return jwtService.generateToken(username);

        } else {
            throw new UsernameNotFoundException("Invalid Username or Password");
        }
    }

    @GetMapping("/home")
    @PreAuthorize("hasAuthority(\"ROLE_ADMIN\")")
    public String homepage() {
        return "Homepage reached";
    }

}
