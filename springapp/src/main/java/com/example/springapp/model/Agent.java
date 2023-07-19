package com.example.springapp.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="agents")
public class Agent {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable=false)
    private String name;
	
	@Column(nullable=false, unique=true)
    private String email;
	
	@Column(nullable=false)
	private String password;
	
	@Column(nullable=false)
	private String phone;
	
	@Column(nullable=false)
	private String profileImageurl;

	public String getProfileImageurl() {
		return profileImageurl;
	}
	
	@OneToMany(mappedBy="agent")
    private List<Property> properties;

	
	
	public List<Property> getProperties() {
		return properties;
	}

	public void setProperties(List<Property> properties) {
		this.properties = properties;
	}

	public void setProfileImageurl(String profileImageurl) {
		this.profileImageurl = profileImageurl;
	}

	public int getId() {
		return id;
	}

	

	public void setId(int id) {
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
	


public Agent(int id, String name, String email, String password, String phone, String profileImageurl,
			List<Property> properties) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.profileImageurl = profileImageurl;
		this.properties = properties;
	}

public Agent() {
	super();
}


}