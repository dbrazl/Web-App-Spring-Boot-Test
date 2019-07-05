package br.com.dbrazl.Controllers;

import java.awt.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.dbrazl.Repositories.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/{name}")
	public User findUserByName (@PathVariable String name) {
		return userRepository.findByName(name);
	}
	
	@GetMapping("/{email}")
	public User findUserByEmail (@PathVariable String email) {
		return userRepository.findByEmail(email);
	}
	
	@GetMapping("/all")
	public List findAllUsers () {
		return (List) userRepository.findAll();
	}
	
	@PostMapping("/register")
	public User saveNewUser (@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@PutMapping("/update")
	public String updateUser (@RequestBody User user) {
		return "redirect:register";
	}
	
	@DeleteMapping("/delete/{name}")
	public void deleteUserByName (@PathVariable String name) {
		User user = findUserByName(name);
		userRepository.delete(user);
	}
	
	@DeleteMapping("/delete/{email}")
	public void deleteUserByEmail (@PathVariable String email) {
		User user = findUserByEmail(email);
		userRepository.delete(user);
	}

}
