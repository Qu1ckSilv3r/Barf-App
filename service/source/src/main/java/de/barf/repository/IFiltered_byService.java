package de.barf.repository;

import java.util.List;

import de.barf.model.Filtered_by;

public interface IFiltered_byService {
	
	List<Filtered_by> findAll();
	Filtered_by findById(long filtered_by_id);
	List<Filtered_by> findByAnimalId(long animal_id);
	List<Filtered_by> findByPropertyAndAnimalId(String property, long animal_id);
	Filtered_by saveFilter(Filtered_by filtered_by);
	void deleteFilter(long filtered_by_id);
	
}
