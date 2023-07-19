package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Property;
import com.example.springapp.service.PropertyService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("")
public class PropertyController {
	
	@Autowired
	private PropertyService propertyService;
	
	@GetMapping("/properties")
	public ResponseEntity<List<Property>> getAllProperties() {
		 List<Property> properties = propertyService.getAllProperties();
	        return ResponseEntity.ok(properties);
	}

	@GetMapping("/properties/id")
	public Property getProperty(@RequestParam int id, @RequestHeader String title, @RequestHeader String address) {
		return propertyService.getProperty(id, title, address);
	}	
}
