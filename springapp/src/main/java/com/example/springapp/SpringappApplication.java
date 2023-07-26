package com.example.springapp;

<<<<<<< HEAD
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringappApplication {
=======
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

@org.springframework.boot.autoconfigure.SpringBootApplication
public class SpringappApplication implements CommandLineRunner {
>>>>>>> 99f8be77dac03d432ab8aa66c3e44c78a8172314

	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}
<<<<<<< HEAD

=======
	@Override
	public void run(String... args) throws Exception {

	}
>>>>>>> 99f8be77dac03d432ab8aa66c3e44c78a8172314
}
