package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Filtered_by;

@Component
public class Filtered_byService implements IFiltered_byService{
	@Autowired
	private Filtered_byRepository filterRepository;

	@Override
	public List<Filtered_by> findAll() {
		return (List<Filtered_by>) filterRepository.findAll();
	}

	@Override
	public Filtered_by findById(long filtered_by_id) {
		return filterRepository.findById(filtered_by_id).get();
	}

	@Override
	public List<Filtered_by> findByAnimalId(long animal_id) {
		return (List<Filtered_by>) filterRepository.findByAnimalId(animal_id);
	}

	@Override
	public List<Filtered_by> findByPropertyAndAnimalId(String property, long animal_id) {
		return (List<Filtered_by>) filterRepository.findByPropertyAndAnimalId(property, animal_id);
	}

	@Override
	public Filtered_by saveFilter(Filtered_by filtered_by) {
		return filterRepository.save(filtered_by);
	}

	@Override
	public void deleteFilter(long filtered_by_id) {
		filterRepository.deleteById(filtered_by_id);		
	}
	
}
