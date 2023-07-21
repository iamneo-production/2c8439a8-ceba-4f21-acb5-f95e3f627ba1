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

    // Get all favourites
    public List<Favourite> getAllFavourites() {
        return favouriteRepository.findAll();
    }

    // Get favourite by id
    public Favourite getFavouriteById(long id) {
        Optional<Favourite> optionalFavourite = favouriteRepository.findById(id);
        return optionalFavourite.orElse(null);
    }

    // Create a new favourite
    public Favourite createFavourite(Favourite favourite) {
        return favouriteRepository.save(favourite);
    }

    // Update favourite by id
    public Favourite updateFavourite(long id, Favourite favouriteDetails) {
        Optional<Favourite> optionalFavourite = favouriteRepository.findById(id);
        if (optionalFavourite.isPresent()) {
            Favourite existingFavourite = optionalFavourite.get();
            existingFavourite.setImg(favouriteDetails.getImg());
            existingFavourite.setType(favouriteDetails.getType());
            existingFavourite.setPrice(favouriteDetails.getPrice());
            existingFavourite.setName(favouriteDetails.getName());
            return favouriteRepository.save(existingFavourite);
        } else {
            return null; // Favourite with the given id not found
        }
    }

    // Delete favourite by id
    public void deleteFavouriteById(long id) {
        favouriteRepository.deleteById(id);
    }
}
