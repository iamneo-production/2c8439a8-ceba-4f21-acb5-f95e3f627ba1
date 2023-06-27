package com.example.springapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "property_table")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Title")
    private String title;

    @Column(name = "Description")
    private String description;

    @Column(name = "Address")
    private String address;

    @Column(name = "Price")
    private String price;

    @Column(name = "Type")
    private String type;

    @Column(name = "Location")
    private String location;

    @Column(name = "Status")
    private String status;

    @Column(name = "ImageUrl")
    private String imageUrls;

    @Column(name = "VideoUrls")
    private String videoUrls;

    @Column(name = "Features")
    private String features;

    @Column(name = "Agents")
    private String agents;
}
