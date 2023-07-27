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
>>>>>>> c8ef5cdd793a62583d1b1867056e26b597bb1316

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
>>>>>>> c8ef5cdd793a62583d1b1867056e26b597bb1316
