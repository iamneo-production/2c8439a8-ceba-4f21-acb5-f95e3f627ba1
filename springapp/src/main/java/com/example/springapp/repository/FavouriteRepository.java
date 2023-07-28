package com.example.springapp.repository;

import com.example.springapp.model.Favourite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteRepository extends JpaRepository<Favourite, Long> {


    @Query(value = "select * from favourite_list where user_id=?1",nativeQuery = true)
    List<Favourite> findByUserId(Long user_id);
}
