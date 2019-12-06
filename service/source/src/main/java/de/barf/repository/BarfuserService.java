package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.controller.LoginDto;
import de.barf.controller.ResetPasswordDto;
import de.barf.model.Barfuser;

@Component
public class BarfuserService implements IBarfuserService{
	@Autowired
	private BarfuserRepository repository;
	
	@Override
	public List<Barfuser> findAll() {
		return (List<Barfuser>) repository.findAll();
	}
	
	@Override
	public Barfuser findByName(String name) {
		return repository.findByName(name);
	}
	
	public Barfuser findById(long user_id){
		return repository.findById(user_id).get();
	}
	
	@Override
	public Barfuser saveUser(Barfuser user) {
		return repository.save(user);
	}
	
	@Override
	public Barfuser checkCredentials(LoginDto credentials) {
		System.err.println(credentials.getUsername() + credentials.getPassword());
		return repository.findByNameAndPassword(credentials.getUsername(), credentials.getPassword());
	}
	
	@Override
	public void delete(long user_id) {
		repository.deleteById(user_id);
	}

	@Override
	public String resetPassword(ResetPasswordDto credentials) {
		System.err.println(credentials.getNewPassword() + " IST GLEICH " + credentials.getResetPassword());
		if(credentials.getResetPassword().equals(credentials.getNewPassword())){
			return credentials.getNewPassword();
		}
		else{
			return null;
		}
	}
	
}