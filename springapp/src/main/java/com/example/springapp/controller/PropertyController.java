package com.example.springapp.controller;

import com.example.springapp.model.Property;
import com.example.springapp.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController









public class PropertyController {


    private final PropertyRepository propertyRepository;

    @Autowired
    public PropertyController(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @PostMapping
    public Property addProperty(@RequestBody Property property) {
        return propertyRepository.save(property);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
        Optional<Property> property = propertyRepository.findById(id);
        return property.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Property> updateProperty(@PathVariable Long id, @RequestBody Property propertyDetails) {
        Optional<Property> optionalProperty = propertyRepository.findById(id);
        if (optionalProperty.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Property property = optionalProperty.get();
        property.setTitle(propertyDetails.getTitle());
        property.setDescription(propertyDetails.getDescription());
        property.setAddress(propertyDetails.getAddress());
        property.setPrice(propertyDetails.getPrice());
        property.setType(propertyDetails.getType());
        property.setStatus(propertyDetails.getStatus());
        property.setImageUrls(propertyDetails.getImageUrls());
        property.setVideoUrls(propertyDetails.getVideoUrls());
        property.setFeatures(propertyDetails.getFeatures());
        property.setAgent(propertyDetails.getAgent());

        Property updatedProperty = propertyRepository.save(property);
        return ResponseEntity.ok(updatedProperty);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProperty(@PathVariable Long id) {
        Optional<Property> optionalProperty = propertyRepository.findById(id);
        if (optionalProperty.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Property property = optionalProperty.get();
        propertyRepository.delete(property);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}

