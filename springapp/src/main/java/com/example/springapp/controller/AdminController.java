package com.example.springapp.controller;

import com.example.springapp.model.Admin;
import com.example.springapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admins") // Update the URL mapping to "/admins"
@CrossOrigin("http://localhost:4200")
public class AdminController {
    @Autowired
    private AdminService adminService; // Change the service to AdminService

    // Get all admins
    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    // Create a new admin
    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin);
    }

    // Get admin by id
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable long id) {
        Admin admin = adminService.getAdminById(id);
        return ResponseEntity.ok(admin);
    }

    // Update admin by id
    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable long id, @RequestBody Admin adminDetails) {
        Admin updatedAdmin = adminService.updateAdmin(id, adminDetails);
        return ResponseEntity.ok(updatedAdmin);
    }

    // Delete admin by id
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteAdminById(@PathVariable long id) {
        adminService.deleteAdminById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
