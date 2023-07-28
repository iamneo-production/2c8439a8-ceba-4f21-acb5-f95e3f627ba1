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
>>>>>>> b0c4b7c59d43d8a047c26597d6a84017127db85b

	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}
<<<<<<< HEAD

}
=======
	@Override
	public void run(String... args) throws Exception {

	}
}
>>>>>>> b0c4b7c59d43d8a047c26597d6a84017127db85b
