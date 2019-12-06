package de.barf.repository;

import java.util.List;

import de.barf.controller.LoginDto;
import de.barf.controller.ResetPasswordDto;
import de.barf.model.Barfuser;

public interface IBarfuserService {
	List<Barfuser> findAll();
	Barfuser findByName(String name);
	Barfuser saveUser(Barfuser user);
	Barfuser checkCredentials(LoginDto credentials);
	String resetPassword(ResetPasswordDto credentials);
	void delete(long user_id);
	Barfuser findById(long user_id);
}
