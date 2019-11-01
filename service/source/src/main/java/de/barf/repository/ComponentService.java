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
	public List<Components> findByCategorieAndUser_id(String categorie, long user_id){
		return (List<Components>) cRepository.findByCategorieAndUser_id(categorie, user_id);
	}
	
	@Override
	public List<Components> findByAnimalSortAndUser_id(String animal_sort, long user_id){
		return (List<Components>) cRepository.findByAnimalSort(animal_sort, user_id);
	}
	
	@Override
	public List<Components> findByNameAndUser_id(String name, long user_id){
		return (List<Components>) cRepository.findByName(name, user_id);
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
