package com.example.springapp.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="properties")
public class Property {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable=false)
    private String title;
	
	@Column(nullable=false)
    private String description;
	
	@Column(nullable=false)
	private String address;
	
	@Column(nullable=false)
    private double price;
	
	@Column(nullable=false)
    private String type;
	
	@Column(nullable=false)
    private String status;
	
	@ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
	@CollectionTable(name = "imageUrls", joinColumns = @JoinColumn(name = "property_id"))
	@Column(name = "imageUrl", nullable = false)
	private List<String> imageUrls = new ArrayList<>();

	@ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
	@CollectionTable(name = "videoUrls", joinColumns = @JoinColumn(name = "property_id"))
	@Column(name = "videoUrl", nullable = false)
	private List<String> videoUrls = new ArrayList<>();

	@ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
	@CollectionTable(name = "features", joinColumns = @JoinColumn(name = "property_id"))
	@Column(name = "features", nullable = false)
	private List<String> features = new ArrayList<>();

	
	@ManyToOne
    @JoinColumn(name="property_id", nullable=false)
    private Agent agent;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<String> getImageUrls() {
		return imageUrls;
	}

	public void setImageUrls(List<String> imageUrls) {
		this.imageUrls = imageUrls;
	}
	
	



	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}

	public List<String> getVideoUrls() {
		return videoUrls;
	}

	public void setVideoUrls(List<String> videoUrls) {
		this.videoUrls = videoUrls;
	}

	public List<String> getFeatures() {
		return features;
	}

	public void setFeatures(List<String> features) {
		this.features = features;
	}

	public Property() {
		super();
	}

	public Property(int id, String title, String description, String address, double price, String type, String status,
			List<String> imageUrls, List<String> videoUrls, List<String> features, Agent agent) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.address = address;
		this.price = price;
		this.type = type;
		this.status = status;
		this.imageUrls = imageUrls;
		this.videoUrls = videoUrls;
		this.features = features;
		this.agent = agent;
	}



}