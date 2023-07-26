package com.example.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "favourite_list")
public class Favourite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Img")
    private String img;

    @Column(name = "UserId")
    private String userid;

    @Column(name = "PropertyId")
    private String propertyid;

    @Column(name = "Type")
    private String type;

    @Column(name = "Price")
    private String price;

    @Column(name = "Name")
    private String name;

    @Column(name = "Status")
    private String status;
}
