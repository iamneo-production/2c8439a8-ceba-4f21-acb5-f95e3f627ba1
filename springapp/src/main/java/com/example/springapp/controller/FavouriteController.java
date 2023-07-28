package com.example.springapp.controller;

import com.example.springapp.model.Favourite;
import com.example.springapp.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favourites")
@CrossOrigin(origins = "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Vasanth
public class FavouriteController {
    @Autowired
    private FavouriteService favouriteService;

    // Get all favourites
    @GetMapping
    public List<Favourite> getAllFavourites() {
        return favouriteService.getAllFavourites();
    }

    // Create a new favourite
    @PostMapping
    public Favourite createFavourite(@RequestBody Favourite favourite) {
        return favouriteService.createFavourite(favourite);
    }

    // Get favourite by id
    @GetMapping("/{id}")
    public ResponseEntity<Favourite> getFavouriteById(@PathVariable long id) {
        Favourite favourite = favouriteService.getFavouriteById(id);
        return ResponseEntity.ok(favourite);
    }

    // Update favourite by id
    @PutMapping("/{id}")
    public ResponseEntity<Favourite> updateFavourite(@PathVariable long id, @RequestBody Favourite favouriteDetails) {
        Favourite updatedFavourite = favouriteService.updateFavourite(id, favouriteDetails);
        return ResponseEntity.ok(updatedFavourite);
    }

    // Delete favourite by id
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteFavouriteById(@PathVariable long id) {
        favouriteService.deleteFavouriteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
