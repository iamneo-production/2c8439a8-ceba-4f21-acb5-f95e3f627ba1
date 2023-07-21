package com.example.springapp.contoller;

import com.example.springapp.exception.ResourceNotFoundException;
import com.example.springapp.model.Inquiry;
import com.example.springapp.service.InquiryService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/inquiries")
@CrossOrigin("http://localhost:4200")
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    @GetMapping
    public List<Inquiry> getAllInquiries() {
        return inquiryService.getAllInquiries();
    }

    @PostMapping
    public Inquiry createInquiry(@RequestBody @NotNull Inquiry inquiry) {
        return inquiryService.createInquiry(inquiry);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inquiry> getInquiryById(@PathVariable long id) {
        Inquiry inquiry = inquiryService.getInquiryById(id);
        return ResponseEntity.ok(inquiry);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Inquiry> updateInquiry(@PathVariable long id, @RequestBody Inquiry inquiryDetails) {
        Inquiry updatedInquiry = inquiryService.updateInquiry(id, inquiryDetails);
        return ResponseEntity.ok(updatedInquiry);
    }

    @DeleteMapping("/{id}")
    public List<Inquiry> deleteInquiryById(@PathVariable long id) {
        inquiryService.deleteInquiryById(id);
        return inquiryService.getAllInquiries();
    }
}
