package de.barf.repository;

import java.util.List;

import de.barf.model.Animal;


public interface IAnimalService {
	List<Animal> findAll();
	List<Animal> findByUserId(long user_id);
	Animal saveAnimal(Animal animal);
	//Animal feedCredentials(AnimalFeedPartDto credentials);
}
