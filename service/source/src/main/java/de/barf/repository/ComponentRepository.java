package de.barf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import de.barf.model.Components;

@Repository
public interface ComponentRepository extends CrudRepository<Components, Long>{
	
	@Query("SELECT x FROM Component AS x WHERE categorie LIKE :categorie")
	List<Components> findByCategorie(@Param("categorie") String categorie);

	@Query("SELECT x FROM Component AS x WHERE animal_sort LIKE :animal_sort")
	List<Components> findByAnimalSort(@Param("animal_sort") String animal_sort);

	@Query("SELECT x FROM Component AS x WHERE name LIKE :name")
	List<Components> findByName(@Param("name") String name);

	@Query("SELECT x FROM Component AS x WHERE user_id LIKE :user_id")
	List<Components> findByUser_id(@Param("user_id") long user_id);

	
	

}
