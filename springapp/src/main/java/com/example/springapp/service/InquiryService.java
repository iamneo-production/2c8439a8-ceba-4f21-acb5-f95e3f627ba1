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

    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }

    public Inquiry createInquiry(Inquiry inquiry) {
        inquiry.setDate(LocalDate.now());
        return inquiryRepository.save(inquiry);
    }

    public Inquiry getInquiryById(long id) {
        return inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry not found with id: " + id));
    }

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

    public void deleteInquiryById(long id) {
        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry not found with id: " + id));
        inquiryRepository.delete(inquiry);
    }
}
