package de.barf.repository;

import java.util.List;

import de.barf.controller.LoginDto;
import de.barf.model.Barfuser;

public interface IBarfuserService {
	List<Barfuser> findAll();
	Barfuser findByName(String name);
	Barfuser saveUser(Barfuser user);
	Barfuser checkCredentials(LoginDto credentials);
}
