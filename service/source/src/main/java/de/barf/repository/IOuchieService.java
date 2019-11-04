package de.barf.repository;

import java.util.Date;
import java.util.List;

import de.barf.model.Ouchie;

public interface IOuchieService {

	List<Ouchie> findAll();
	Ouchie findByDate(Date date);
	Ouchie findById(long ouchie_id);
	Ouchie saveOuchie(Ouchie ouchie);
	void delete(long ouchie_id);
	
}
