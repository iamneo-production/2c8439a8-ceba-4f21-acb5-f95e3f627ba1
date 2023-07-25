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

    public List<Property> getAllProperty() {
        return propertyRepository.findAll();
    }

    public Property createProperty(Property property) {
        return propertyRepository.save(property);
    }

    public Property getPropertyById(long id) {
        return propertyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Property not found with id: " + id));
    }

    public Property updateProperty(long id, Property propertyDetails) {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Property not found with id: " + id));

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
        property.setAgents(propertyDetails.getAgents());
        return propertyRepository.save(property);
    }

    public void deletePropertyById(long id) {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Property not found with id: " + id));
        propertyRepository.delete(property);
    }
}
