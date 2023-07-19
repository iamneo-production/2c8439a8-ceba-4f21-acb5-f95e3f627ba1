package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Property;
import com.example.springapp.repository.PropertyRepository;

@Service
public class PropertyService {
	
@Autowired
	private PropertyRepository propertyRepository;
	
	public Property getProperty(int id, String title, String address) {
		if(propertyRepository.existsByTitleAndAddress(title, address)) {
			Property property = propertyRepository.findById(id).orElse(null);
			return property;
		}
		else {
			return null;
		}
	}
	
	public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }
}