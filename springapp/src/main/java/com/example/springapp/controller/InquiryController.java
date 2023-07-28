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
// @CrossOrigin(origins = "https://8081-bddebfabedaecdbaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Vasanth
// @CrossOrigin(origins = "https://8081-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Anshi
// @CrossOrigin(origins = "https://8081-bfbceacbaecbecafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Lakshana
@CrossOrigin(origins = "https://8081-eedfeafbdafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Raas
// @CrossOrigin(origins = "https://8081-deacaeadeadfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Suganya
// @CrossOrigin(origins = "https://8081-dcdbfcfaafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Susmit
// @CrossOrigin(origins = "https://8081-cfcedadddfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Subhashini
// @CrossOrigin(origins = "https://8081-cdcbcbdbddadfacfafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Bhavana
// @CrossOrigin(origins = "https://8081-dedcbcbaedafaaafbdbcfcbaedbffbeeaadbbb.project.examly.io/")  //Revan
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
