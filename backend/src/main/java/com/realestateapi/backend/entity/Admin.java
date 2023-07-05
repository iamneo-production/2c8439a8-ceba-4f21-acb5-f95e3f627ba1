package com.realestateapi.backend.entity;

import jakarta.persistence.Column;

// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message="Name is required")
    @Size(max = 100)
    private String name;

    @NotBlank
    @Size(max = 100)
    private String email;

    @NotBlank
    @Column(name = "password",columnDefinition = "LONGTEXT")
    private String password;

    @NotBlank
    @Size(max = 20)
    private String phone;

    @Size(max = 500)
    private String profileImageUrl;

    private String roles;

    // @OneToMany(mappedBy = "agent", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    // @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    // private List<Property> properties;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    // public List<Property> getProperties() {
    //     return properties;
    // }

    // public void setProperties(List<Property> properties) {
    //     this.properties = properties;
    // }
}
