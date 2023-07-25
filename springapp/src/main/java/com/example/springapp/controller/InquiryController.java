package com.example.springapp.controller;

import com.example.springapp.model.Inquiry;
import com.example.springapp.service.InquiryService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inquiries")
@CrossOrigin(origins = "https://8080-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Vasanth
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    // Get all inquiries
    @GetMapping
    public List<Inquiry> getAllInquiries() {
        return inquiryService.getAllInquiries();
    }

    // Create a new inquiry
    @PostMapping
    public Inquiry createInquiry(@RequestBody @NotNull Inquiry inquiry) {
        return inquiryService.createInquiry(inquiry);
    }

    // Get inquiry by id
    @GetMapping("/{id}")
    public ResponseEntity<Inquiry> getInquiryById(@PathVariable long id) {
        Inquiry inquiry = inquiryService.getInquiryById(id);
        return ResponseEntity.ok(inquiry);
    }

    // Update inquiry by id
    @PutMapping("/{id}")
    public ResponseEntity<Inquiry> updateInquiry(@PathVariable long id, @RequestBody Inquiry inquiryDetails) {
        Inquiry updatedInquiry = inquiryService.updateInquiry(id, inquiryDetails);
        return ResponseEntity.ok(updatedInquiry);
    }

    // Delete inquiry by id
    @DeleteMapping("/{id}")
    public List<Inquiry> deleteInquiryById(@PathVariable long id) {
        inquiryService.deleteInquiryById(id);
        return inquiryService.getAllInquiries();
    }
}
