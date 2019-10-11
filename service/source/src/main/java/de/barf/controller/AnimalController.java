package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Animal;
import de.barf.repository.IAnimalService;

@CrossOrigin(origins = "*")
@RestController
public class AnimalController {
	@Autowired
	private IAnimalService animalService;
	
	@GetMapping("/animals")
	public List<Animal> findAll(){
		return animalService.findAll();
	}
	@PostMapping("/animal/create")
	public Animal createAnimal(@RequestBody Animal dog){
		return animalService.saveAnimal(dog);
	}		
	@GetMapping("/animal/animalOf/{user_id}")
	public List<Animal> findAnimalsOfUser(@PathVariable("user_id") String user_id){
		long id = Long.parseLong(user_id);
		return animalService.findByUserId(id);
	}
	/*   --->wird das benötigt?
	@DeleteMapping("/animal/{animalName}")
	public Animal deleteAnimal(@PathVariable("animalName") String animalName){
		return animalService.deleteAnimal(animalName);
	}
	*/
	//bearbeiten von einzelnen einträgen
}
