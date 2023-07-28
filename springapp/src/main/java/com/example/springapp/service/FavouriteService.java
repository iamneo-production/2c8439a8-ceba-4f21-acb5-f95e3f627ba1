package com.example.springapp.service;

import com.example.springapp.model.Favourite;
import com.example.springapp.repository.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavouriteService {
    @Autowired
    private FavouriteRepository favouriteRepository;


    // Create a new favourite
    public Favourite createFavourite(Favourite favourite) {
        return favouriteRepository.save(favourite);
    }

    // Get all favourites by user_id
    public List<Favourite> getAllByUserId(Long userid){
        return favouriteRepository.findByUserId(userid);
    }

    // Delete favourite by id
    public Favourite deleteFavouriteById(long id) {
        Favourite favourite = favouriteRepository.findById(id).get();
        favouriteRepository.deleteById(id);
        return favourite;
    }
}
