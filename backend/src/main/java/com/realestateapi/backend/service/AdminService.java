package com.realestateapi.backend.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.realestateapi.backend.repository.AdminRepository;

import java.util.Optional;

import com.realestateapi.backend.entity.Admin;


@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String addAdmin(Admin admin) {
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        adminRepository.save(admin);
        return "User Successfully Saved";
    }

    public boolean checkPassword(String username, String password) {
        Optional<Admin> admin = adminRepository.findByName(username);
        if(admin != null) {
            return passwordEncoder.matches(password, admin.orElseThrow().getPassword());
        } else {
            return false;
        }
    }
}
