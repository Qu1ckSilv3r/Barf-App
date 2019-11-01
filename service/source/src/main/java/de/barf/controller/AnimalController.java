package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Animal;
import de.barf.repository.IAnimalService;

@CrossOrigin(origins = "*")
@RestController
public class AnimalController {
	@Autowired
	private IAnimalService animalService;
	
	//geht
	@GetMapping("/animals")
	public List<Animal> findAll(){
		return animalService.findAll();
	}

	//geht 
	@RequestMapping(value = "/animal/animalOf/{user_id}", method = RequestMethod.GET)
	public List<Animal> findAnimalsOfUser(@PathVariable("user_id") long user_id){		
		return animalService.findByUserId(user_id);
	}
	
	//geht
	@RequestMapping(value = "/animal/{animal_id}", method = RequestMethod.GET)
	public Animal findAnimalById(@PathVariable("animal_id") long animal_id){
		return animalService.findById(animal_id);
	}
	
	//geht
	@PostMapping("/animal/create")
	public Animal createAnimal(@RequestBody Animal dog){
		return animalService.saveAnimal(dog);
	}
	
	//abrufen von für die berechnung relevanten einträgen
	
	//bearbeiten von einzelnen einträgen

	//geht
	@PutMapping("/animal/setSettingIDof/{animal_id}")
	public Animal updateSettingId(@PathVariable("animal_id") long animal_id, @RequestBody Animal setting_id){
		Animal animal = animalService.findById(animal_id);
		animal.setSetting_id(setting_id.getSetting_id());
		animalService.saveAnimal(animal);
		return animal;
 	}
	
	//geht
	@DeleteMapping("/animal/delete/{animalID}")
	public void deleteAnimal(@PathVariable("animalID") long animalID){
		animalService.delete(animalID);
	}
}
