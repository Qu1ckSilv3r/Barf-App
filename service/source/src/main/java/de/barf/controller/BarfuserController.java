package de.barf.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Barfuser;
import de.barf.repository.IBarfuserService;

@CrossOrigin(origins = "*")
@RestController
public class BarfuserController {
	@Autowired
	private IBarfuserService barfuserService;
	
	//geht
	@GetMapping("/barfusers")
	public List<Barfuser> findBarfusers(){
		return barfuserService.findAll();
	}
	
	//geht
	@RequestMapping(value = "/barfusers/{name}", method = RequestMethod.GET)
	public Barfuser findBarfusers(@PathVariable("name") String name){
		return barfuserService.findByName(name);
	}
	
	//geht
	@RequestMapping(value = "/barfuser/{user_id}", method = RequestMethod.GET)
	public Barfuser findBarfusersById(@PathVariable("user_id") long user_id){
		return barfuserService.findById(user_id);
	}
	
	//geht
	@RequestMapping(value = "/barfusers/create", method = RequestMethod.POST)
	public Barfuser createUser(@RequestBody Barfuser user){
		return barfuserService.saveUser(user);
	}
	
	//geht
	@RequestMapping(value = "/barfusers/login", method = RequestMethod.POST)
	public Barfuser login(@RequestBody LoginDto credentials){
		return barfuserService.checkCredentials(credentials);
	}
	
	//Password zurücksetzten
	
	//geht
	@DeleteMapping("/barfusers/delete/{user_id}")
	public void delete(@PathVariable("user_id") long user_id){
		barfuserService.delete(user_id);
	}
	//error message erstellen
}
