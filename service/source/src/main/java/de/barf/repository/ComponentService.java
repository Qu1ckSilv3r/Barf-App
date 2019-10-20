package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Components;

@Component
public class ComponentService implements IComponentService{
	@Autowired
	private ComponentRepository cRepository;
	
	@Override
	public List<Components> findAll() {
		return (List<Components>) cRepository.findAll();
	}
	
	@Override
	public Components findById(long component_id){
		return cRepository.findById(component_id).get();
	}
	
	@Override
	public List<Components> findByCategorie(String categorie){
		return (List<Components>) cRepository.findByCategorie(categorie);
	}
	
	@Override
	public List<Components> findByAnimalSort(String animal_sort){
		return (List<Components>) cRepository.findByAnimalSort(animal_sort);
	}
	
	@Override
	public List<Components> findByName(String name){
		return (List<Components>) cRepository.findByName(name);
	}
	
	@Override
	public List<Components> findByUser_id(long user_id){
		return (List<Components>) cRepository.findByUser_id(user_id);
	}
	
	@Override
	public Components saveComponent(Components component){
		return cRepository.save(component);
	}
	
	@Override
	public void delete(long component_id){
		cRepository.deleteById(component_id);
	}
	
}
