package de.barf.repository;

import java.util.List;

import de.barf.model.Components;

public interface IComponentService {

	List<Components> findAll();
	Components findById(long component_id);
	List<Components> findByCategorieAndUser_id(String categorie, long user_id);
	List<Components> findByAnimalSortAndUser_id(String animal_sort, long user_id);
	List<Components> findByNameAndUser_id(String name, long user_id);
	List<Components> findByUser_id(long user_id);
	Components saveComponent(Components component);
	void delete(long component_id);
	
}
