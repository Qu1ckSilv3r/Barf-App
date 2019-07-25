package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Barfuser;
import de.barf.repository.BarfuserService;
import de.barf.repository.IBarfuserService;

@RestController
public class BarfuserController {
	@Autowired
	private IBarfuserService barfuserService;
	
	@GetMapping("/barfusers")
	public List<Barfuser> findBerfusers(){
		return barfuserService.findAll();
	}
	@RequestMapping(value = "/barfusers/{name}", method = RequestMethod.GET)
	public Barfuser findBerfusers(@PathVariable("name") String name){
		return barfuserService.findByName(name);
	}
	@RequestMapping(value = "/barfusers/create", method = RequestMethod.POST)
	public Barfuser createUser(@RequestBody Barfuser user){
		return barfuserService.saveUser(user);
	}
	
	@RequestMapping(value = "/barfusers/login", method = RequestMethod.POST)
	public Barfuser login(@RequestBody LoginDto credentials){
		return barfuserService.checkCredentials(credentials);
	}
}
