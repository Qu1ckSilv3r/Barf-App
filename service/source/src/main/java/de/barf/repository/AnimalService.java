package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Animal;

@Component
public class AnimalService implements IAnimalService {
	@Autowired
	private AnimalRepository aRepository;
	
	@Override
	public List<Animal> findAll() {
		return (List<Animal>) aRepository.findAll();
	}
	
	@Override
	public Animal findById(long animal_id){
		return aRepository.findById(animal_id).get();
	}

	@Override
	public Animal saveAnimal(Animal animal) {
		if(animal.getSetting_id() == null){
			animal.setSetting_id(1L);
		}
		return aRepository.save(animal);
	}

	@Override
	public List<Animal> findByUserId(long user_id) {
		return (List<Animal>) aRepository.findByUserId(user_id);
	}
	
	@Override
	public void delete(long animal_id) {
		aRepository.deleteById(animal_id);
	}
	
//	@Override
//	public Animal feedCredentials(AnimalFeedPartDto credentials) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}