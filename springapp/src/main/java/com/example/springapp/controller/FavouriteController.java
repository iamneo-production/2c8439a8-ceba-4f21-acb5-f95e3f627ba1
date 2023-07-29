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
//@CrossOrigin(origins = "https://8081-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Vasanth
// @CrossOrigin(origins = "https://8081-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Anshi
// @CrossOrigin(origins = "https://8081-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Lakshana
// @CrossOrigin(origins = "https://8081-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Raas
// @CrossOrigin(origins = "https://8081-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Suganya
// @CrossOrigin(origins = "https://8081-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Susmit
// @CrossOrigin(origins = "https://8081-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Subhashini
 @CrossOrigin(origins = "https://8081-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Bhavana
// @CrossOrigin(origins = "https://8081-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Revan
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
