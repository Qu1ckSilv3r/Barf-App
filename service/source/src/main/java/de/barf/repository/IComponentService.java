package de.barf.repository;

import java.util.List;

import de.barf.model.Components;

public interface IComponentService {

	List<Components> findAll();
	Components findById(long component_id);
	List<Components> findByCategorie(String categorie);
	List<Components> findByAnimalSort(String animal_sort);
	List<Components> findByName(String name);
	List<Components> findByUser_id(long user_id);
	Components saveComponent(Components component);
	void delete(long component_id);
	
}
