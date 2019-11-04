package de.barf.repository;

import java.util.List;

import de.barf.model.Nutritions;

public interface INutritionsService {

	List<Nutritions> findAll();
	List<Nutritions> findByComponent_id(long component_id);
	Nutritions findById(long nutrition_id);
	Nutritions saveSettings(Nutritions nutritions);
	void delete(long nutrition_id);
	
}
