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
<<<<<<< HEAD
@CrossOrigin(origins = "https://8081-bddebfabedaecdbaafaaafbdbeaeaadbdbabf.project.examly.io/")  //Vasanth
// @CrossOrigin(origins = "https://8081-dedcbcbaedafaaafbdbeaeaadbdbabf.project.examly.io/")  //Revan
// @CrossOrigin(origins = "https://8081-fcbcbadfadafaaafbdbeaeaadbdbabf.project.examly.io/")  //Anshi
// @CrossOrigin(origins = "https://8081-eedfeafbdafaaafbdbeaeaadbdbabf.project.examly.io/")  //Raas
=======

@CrossOrigin(origins = "https://8081-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/")  //Suganya

>>>>>>> f135a4cf2a2c6158d88d2b29fa2dd43e71c2bbb9
public class FavouriteController {
    @Autowired
    private FavouriteService favouriteService;

    // Create a new favourite
    @PostMapping
    public Favourite createFavourite(@RequestBody Favourite favourite) {
        return favouriteService.createFavourite(favourite);
    }

    // Get favourite by id
    @GetMapping("/{id}")
    public ResponseEntity<List<Favourite>> getFavouriteByUserId(@PathVariable long id) {
        List<Favourite> favourite = favouriteService.getAllByUserId(id);
        return ResponseEntity.ok(favourite);
    }

    // Delete favourite by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Favourite> deleteFavouriteById(@PathVariable long id) {
        Favourite favourite = favouriteService.deleteFavouriteById(id);
        return new ResponseEntity<>(favourite,HttpStatus.OK);
    }
}
