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
	public Animal saveAnimal(Animal animal) {
		return aRepository.save(animal);
	}

	@Override
	public List<Animal> findByUserId(long user_id) {
		return (List<Animal>) aRepository.findByUserId(user_id);
	}

//	@Override
//	public Animal feedCredentials(AnimalFeedPartDto credentials) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}