package com.example.springapp.service;

import com.example.springapp.exception.ResourceNotFoundException;
import com.example.springapp.model.Admin;
import com.example.springapp.model.LoginModel;
import com.example.springapp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin createAdmin(Admin admin) {
        String encryptedPwd = bcrypt.encode(admin.getPassword());
        admin.setPassword(encryptedPwd);
        return adminRepository.save(admin);
    }

    public Admin getAdminById(long id) {
        return (Admin) adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + id));
    }

    public Admin updateAdmin(long id, Admin adminDetails) {
        Admin admin = (Admin) adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + id));

        admin.setName(adminDetails.getName());
        admin.setEmail(adminDetails.getEmail());

        return adminRepository.save(admin);
    }

    public void deleteAdminById(long id) {
        Admin admin = (Admin) adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + id));
        adminRepository.delete(admin);
    }

    public Admin getAdminByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    public Admin saveAdmin(Admin admin) {
        String encryptedPwd = bcrypt.encode(admin.getPassword());
        admin.setPassword(encryptedPwd);
        return adminRepository.save(admin);
    }

    public Admin isAdminPresent(LoginModel loginModel) {
        Admin admin = adminRepository.findByEmail(loginModel.getEmail());

        if(admin != null && bcrypt.matches(loginModel.getPassword(), admin.getPassword())){
            return admin;
        }
        return null;
    }
}






