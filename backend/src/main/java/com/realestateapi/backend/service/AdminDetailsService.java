package com.realestateapi.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.realestateapi.backend.repository.AdminRepository;
import com.realestateapi.backend.entity.Admin;
import com.realestateapi.backend.config.AdminInfoUserDetails;

@Component
public class AdminDetailsService implements UserDetailsService{

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<Admin> adminInfo = adminRepository.findByName(username);

        return adminInfo.map(AdminInfoUserDetails::new)
            .orElseThrow(()->new UsernameNotFoundException("Cannot find user " + username));
    }

}
