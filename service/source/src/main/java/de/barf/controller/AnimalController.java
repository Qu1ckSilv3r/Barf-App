package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

//	//geht nicht  ---> ein long wird nicht in der Datenbank als BigInt gespeichert JDBG macht das nicht 
//	//package org.postgresql.jdbc;
//	//class PgPreparedStatement extends PgStatement implements PreparedStatement 
//	@RequestMapping(value = "/animal/animalOf/{user_id}", method = RequestMethod.GET)
//	public List<Animal> findAnimalsOfUser(@PathVariable("user_id") long user_id){		
//		return animalService.findByUserId(user_id);
//	}
	
	//geht -->settingID und user_id sollten nicht expliziet angegeben werden müssen
	//INSERT STATMENT SELBER SCHREIBEN IM BARF REPOSITORY
	@PostMapping("/animal/create")
	public Animal createAnimal(@RequestBody Animal dog){
		return animalService.saveAnimal(dog);
	}
	
	//abrufen von für die berechnung relevanten einträgen
	
	//bearbeiten von einzelnen einträgen(zB setting ID wenn, da was geändert wird
	
	//geht
	@DeleteMapping("/animal/delete/{animalID}")
	public void deleteAnimal(@PathVariable("animalID") long animalID){
		animalService.delete(animalID);
	}
}
