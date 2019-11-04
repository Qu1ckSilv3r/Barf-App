package de.barf.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Filtered_byService implements IFiltered_byService{
	@Autowired
	private Filtered_byRepository filterRepository;
	
}
