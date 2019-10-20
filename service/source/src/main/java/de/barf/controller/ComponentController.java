package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Components;
import de.barf.repository.IComponentService;


@CrossOrigin(origins = "*")
@RestController
public class ComponentController {
	@Autowired
	private IComponentService componentService;
	
	//alle finden
	@GetMapping("/components")
	public List<Components> findAll(){
		return componentService.findAll();
	}
	
	//finden von component id
	@GetMapping("/component/{id}")
	public Components findById(@PathVariable("id") long component_id){
		return componentService.findById(component_id);
	}
	
	//finden nach user_id
	@GetMapping("/component/{user_id}")
	public List<Components> findByUser_id(@PathVariable("user_id") long user_id){
		if (user_id > 1){
			List<Components> relevantComponents = componentService.findByUser_id(1);
			relevantComponents.addAll(componentService.findByUser_id(user_id));
			return relevantComponents;
		}
		else{
			return componentService.findByUser_id(user_id);
		}
	}
	//finden nach suchkriterien
	//speichern
	//löschen

}
