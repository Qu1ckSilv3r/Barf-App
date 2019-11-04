package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Components;
import de.barf.repository.IComponentService;


@CrossOrigin(origins = "*")
@RestController
public class ComponentController {
	@Autowired
	private IComponentService componentService;
	
	//geht
	@GetMapping("/components")
	public List<Components> findAll(){
		return componentService.findAll();
	}
	
	//geht
	@GetMapping("/component/{id}")
	public Components findById(@PathVariable("id") long component_id){
		return componentService.findById(component_id);
	}
	
	//geht
	@GetMapping("/component/ofUser/{user_id}")
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
	
	//geht	
	@GetMapping("/components/byCategorie/{categorie}/{user_id}")
	public List<Components> findByCategorieAndUser_id(@PathVariable("categorie") String categorie, @PathVariable("user_id") long user_id){
		if (user_id > 1){
			List<Components> relevantComponents = componentService.findByCategorieAndUser_id(categorie, 1);
			relevantComponents.addAll(componentService.findByCategorieAndUser_id(categorie, user_id));
			return relevantComponents;
		}
		else{
			return componentService.findByCategorieAndUser_id(categorie, user_id);
		}
	}
	
	//geht
	@GetMapping("/components/bySort/{animal_sort}/{user_id}")
	public List<Components> findBySortAndUser_id(@PathVariable("animal_sort") String animal_sort, @PathVariable("user_id") long user_id){
		if (user_id > 1){
			List<Components> relevantComponents = componentService.findByAnimalSortAndUser_id(animal_sort, 1);
			relevantComponents.addAll(componentService.findByAnimalSortAndUser_id(animal_sort, user_id));
			return relevantComponents;
		}
		else{
			return componentService.findByAnimalSortAndUser_id(animal_sort, user_id);
		}
	}
	
	//geht
	@GetMapping("/components/byName/{name}/{user_id}")
	public List<Components> findByNameAndUser_id(@PathVariable("name") String name, @PathVariable("user_id") long user_id){
		if (user_id > 1){
			List<Components> relevantComponents = componentService.findByNameAndUser_id(name, 1);
			relevantComponents.addAll(componentService.findByNameAndUser_id(name, user_id));
			return relevantComponents;
		}
		else{
			return componentService.findByNameAndUser_id(name, user_id);
		}
	}
	
	//geht --> angegeben muss nicht werden: Wiki_id und Info
	@PostMapping("/component/create")
	public Components createComponent(@RequestBody Components component){
		return componentService.saveComponent(component);
	}
	
	//geht
	@DeleteMapping("/component/delete/{component_id}")
	public void deleteComponent(@PathVariable("component_id") long component_id){
		componentService.delete(component_id);
	}
}
