package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Nutritions;

@Component
public class NutritionsService implements INutritionsService{
	@Autowired
	private NutritionsRepository nRepository;
	
	@Override
	public List<Nutritions> findAll(){
		return (List<Nutritions>) nRepository.findAll();
	}

	@Override
	public List<Nutritions> findByComponent_id(long component_id){
		return (List<Nutritions>) nRepository.findByComponent_id(component_id);
	}
	
	@Override
	public Nutritions findById(long nutrition_id){
	return nRepository.findById(nutrition_id).get();
	}

	@Override
	public Nutritions saveSettings(Nutritions nutritions) {
		return nRepository.save(nutritions);
	}

	@Override
	public void delete(long nutrition_id) {
		nRepository.deleteById(nutrition_id);
	}

}
