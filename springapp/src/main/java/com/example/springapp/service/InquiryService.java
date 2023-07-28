package com.example.springapp.service;

import com.example.springapp.model.Inquiry;
import com.example.springapp.exception.ResourceNotFoundException;
import com.example.springapp.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    // Get all inquiries from the database
    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }

    // Create a new inquiry and save it in the database
    public Inquiry createInquiry(Inquiry inquiry) {
        inquiry.setDate(LocalDate.now());
        return inquiryRepository.save(inquiry);
    }

    // Get an inquiry by its ID from the database
    public Inquiry getInquiryById(long id) {
        return inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry not found with id: " + id));
    }

    // Update an existing inquiry with the provided inquiry details
    public Inquiry updateInquiry(long id, Inquiry inquiryDetails) {
        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry not found with id: " + id));
        inquiry.setName(inquiryDetails.getName());
        inquiry.setEmail(inquiryDetails.getEmail());
        inquiry.setQuestion(inquiryDetails.getQuestion());
        inquiry.setDate(LocalDate.now());
        inquiry.setStatus(inquiryDetails.getStatus());
        inquiry.setAnswer(inquiryDetails.getAnswer());
        return inquiryRepository.save(inquiry);
    }

    // Delete an inquiry from the database by its ID
    public void deleteInquiryById(long id) {
        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry not found with id: " + id));
        inquiryRepository.delete(inquiry);
    }
}
