package com.example.springapp.service;

import com.example.springapp.model.Property;
import com.example.springapp.exception.ResourceNotFoundException;
import com.example.springapp.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    // Get all properties from the database
    public List<Property> getAllProperty() {
        return propertyRepository.findAll();
    }

    // Create a new property and save it in the database
    public Property createProperty(Property property) {
        return propertyRepository.save(property);
    }

    // Get a property by its ID from the database
    public Property getPropertyById(long id) {
        return propertyRepository.findById(id);

    }

    // Update an existing property with the provided property details
    public Property updateProperty(long id, Property propertyDetails) {
        Property property = propertyRepository.findById(id);
        property.setTitle(propertyDetails.getTitle());
        property.setDescription(propertyDetails.getDescription());
        property.setAddress(propertyDetails.getAddress());
        property.setPrice(propertyDetails.getPrice());
        property.setType(propertyDetails.getType());
        property.setLocation(propertyDetails.getLocation());
        property.setStatus(propertyDetails.getStatus());
        property.setImageUrls(propertyDetails.getImageUrls());
        property.setVideoUrls(propertyDetails.getVideoUrls());
        property.setFeatures(propertyDetails.getFeatures());
        property.setMaplocation(propertyDetails.getMaplocation());
        property.setFloor(propertyDetails.getFloor());
        property.setAmenities(propertyDetails.getAmenities());
        property.setAgents(propertyDetails.getAgents());
        property.setAgentid(propertyDetails.getAgentid());
        return propertyRepository.save(property);
    }


    // Delete a property from the database by its ID
    public void deletePropertyById(long id) {
        Property property = propertyRepository.findById(id);
        propertyRepository.delete(property);
    }

    public List<Property> getpropertyAgentid(long agentId) {
        return propertyRepository.getpropertybyAgentid(agentId);
    }
}
