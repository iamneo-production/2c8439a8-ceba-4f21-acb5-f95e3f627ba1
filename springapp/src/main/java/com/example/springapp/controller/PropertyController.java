package com.example.springapp.controller;

import com.example.springapp.model.Property;
import com.example.springapp.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/properties")

@CrossOrigin(origins = "https://8081-deacaeadeadfafaaafbdbeaeaadbdbabf.project.examly.io/")  //Suganya

public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    // Get all properties
    @GetMapping
    public List<Property> getAllProperty() {
        return propertyService.getAllProperty();
    }

    // Create a new property
    @PostMapping
    public Property createProperty(@RequestBody Property property) {
        return propertyService.createProperty(property);
    }

    // Get property by id
    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable long id) {
        Property property = propertyService.getPropertyById(id);
        return ResponseEntity.ok(property);
    }

    // Update property by id
    @PutMapping("/{id}")
    public ResponseEntity<Property> updateProperty(@PathVariable long id, @RequestBody Property propertyDetails) {
        Property updatedProperty = propertyService.updateProperty(id, propertyDetails);
        return ResponseEntity.ok(updatedProperty);
    }

    // Delete property by id
    @DeleteMapping("/{id}")
    public List<Property> deletePropertyById(@PathVariable long id) {
        propertyService.deletePropertyById(id);
        return propertyService.getAllProperty();
    }
    
    // Get property by Agent Id
    @GetMapping("/getbyAgentid/{agentId}")
    public List<Property> getpropertybyAgentid(@PathVariable("agentId") long agentId){
        return propertyService.getpropertyAgentid(agentId);
    }
}
