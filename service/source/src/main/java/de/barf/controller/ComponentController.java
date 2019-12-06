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
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Barfuser;
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
		return componentService.findByUser_id(user_id);
	}
	
	//geht	
	@GetMapping("/components/byCategorie/{categorie}/{user_id}")
	public List<Components> findByCategorieAndUser_id(@PathVariable("categorie") String categorie, @PathVariable("user_id") long user_id){
		return componentService.findByCategorieAndUser_id(categorie, user_id);
	}
	
	//geht
	@GetMapping("/components/bySort/{animal_sort}/{user_id}")
	public List<Components> findBySortAndUser_id(@PathVariable("animal_sort") String animal_sort, @PathVariable("user_id") long user_id){
			return componentService.findByAnimalSortAndUser_id(animal_sort, user_id);
	}
	
	//geht
	@GetMapping("/components/byName/{name}/{user_id}")
	public List<Components> findByNameAndUser_id(@PathVariable("name") String name, @PathVariable("user_id") long user_id){
		return componentService.findByNameAndUser_id(name, user_id);
	}
	
	//geht --> angegeben muss nicht werden: Wiki_id und Info
	//erweitern um nicht das selbe anlegen
	@PostMapping("/component/create")
	public Components createComponent(@RequestBody Components component){
		return componentService.saveComponent(component);
	}
	
	//geht
	@PutMapping("/component/changeCategorie/{component_id}")
	public Components changeCategorie(@PathVariable("component_id")long component_id, @RequestBody String categorie){
		Components component = componentService.findById(component_id);
		if(categorie != null && !categorie.isEmpty()){
			component.setCategorie(categorie);
		}
		return componentService.saveComponent(component);
	}
	
	//geht
	@PutMapping("/component/changeAnimalSort/{component_id}")
	public Components changeAnimalSort(@PathVariable("component_id")long component_id, @RequestBody String animal_sort){
		Components component = componentService.findById(component_id);
		if(animal_sort != null && !animal_sort.isEmpty()){
			component.setAnimal_sort(animal_sort);
		}
		return componentService.saveComponent(component);
	}
	
	//geht
	@PutMapping("/component/changeName/{component_id}")
	public Components changeName(@PathVariable("component_id")long component_id, @RequestBody String name){
		Components component = componentService.findById(component_id);
		if(name != null && !name.isEmpty()){
			component.setName(name);
		}
		return componentService.saveComponent(component);
	}
	
	//geht
	@PutMapping("/component/changeInfo/{component_id}")
	public Components changeInfo(@PathVariable("component_id")long component_id, @RequestBody String info){
		Components component = componentService.findById(component_id);
		if(info != null && !info.isEmpty()){
			component.setInfo(info);
		}
		return componentService.saveComponent(component);
	}
	
	//geht
	@DeleteMapping("/component/delete/{component_id}")
	public void deleteComponent(@PathVariable("component_id") long component_id){
		componentService.delete(component_id);
	}
}
