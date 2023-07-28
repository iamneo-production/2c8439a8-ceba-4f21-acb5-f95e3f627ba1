package com.example.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;

import com.example.springapp.model.UserModel;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserInfoRepository extends JpaRepository<UserModel,Long> {
    @Query("FROM UserModel WHERE email = ?1  ")
    public UserModel findByEmail(String email);

    UserModel findByuserId(long userId);

}
