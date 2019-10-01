package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.controller.LoginDto;
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
	@Override
	public Barfuser saveUser(Barfuser user) {
		return repository.save(user);
	}
	@Override
	public Barfuser checkCredentials(LoginDto credentials) {
		System.err.println(credentials.getUsername() + credentials.getPassword());
		return repository.findByNameAndPassword(credentials.getUsername(), credentials.getPassword());
	}
}
//nutzbar für alle Tabellen
