package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
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
	@RequestMapping(value = "/barfuser/findByName/{name}", method = RequestMethod.GET)
	public Barfuser findBarfusers(@PathVariable("name") String name){
		return barfuserService.findByName(name);
	}
	
	//geht
	@RequestMapping(value = "/barfuser/findById/{user_id}", method = RequestMethod.GET)
	public Barfuser findBarfusersById(@PathVariable("user_id") long user_id){
		return barfuserService.findById(user_id);
	}
	
	//geht
	@RequestMapping(value = "/barfuser/create", method = RequestMethod.POST)
	public Barfuser createUser(@RequestBody Barfuser user){
		return barfuserService.saveUser(user);
	}
	
	//geht
	@RequestMapping(value = "/barfuser/login", method = RequestMethod.POST)
	public Barfuser login(@RequestBody LoginDto credentials){
		return barfuserService.checkCredentials(credentials);
	}
	
	//geht
	//-->erstmal hart ohne email, zweimal das selbe Passwort angeben
	@PutMapping("/barfuser/resetPasswordOf/{user_id}")
	public Barfuser resetPassword(@PathVariable("user_id") long user_id, @RequestBody ResetPasswordDto credentials){
		Barfuser user = barfuserService.findById(user_id);
		user.setPassword(barfuserService.resetPassword(credentials));
		return barfuserService.saveUser(user);
	}
	
	//geht
	@PutMapping("/barfuser/changeName/{user_id}")
	public Barfuser changeName(@PathVariable("user_id")long user_id, @RequestBody String userName){
		Barfuser user = barfuserService.findById(user_id);
		if(userName != null && !userName.isEmpty()){
			user.setUsername(userName);
		}
		return barfuserService.saveUser(user);
	}
	
	//geht
	@PutMapping("/barfuser/changeEmail/{user_id}")
	public Barfuser changeEmail(@PathVariable("user_id")long user_id, @RequestBody String eMail){
		Barfuser user = barfuserService.findById(user_id);
		if (eMail!= null && !eMail.isEmpty()){
			user.setEmail(eMail);
		}
		return barfuserService.saveUser(user);
	}
	
	//geht
	@DeleteMapping("/barfuser/delete/{user_id}")
	public void delete(@PathVariable("user_id") long user_id){
		barfuserService.delete(user_id);
	}
}
