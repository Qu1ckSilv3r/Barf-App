package de.barf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import de.barf.model.Components;

@Repository
public interface ComponentRepository extends CrudRepository<Components, Long>{
	
	@Query("SELECT x FROM Components AS x WHERE categorie LIKE :categorie AND user_id = :user_id") 
	List<Components> findByCategorieAndUser_id(@Param("categorie") String categorie, @Param("user_id") long user_id);

	@Query("SELECT x FROM Components AS x WHERE animal_sort LIKE :animal_sort AND user_id = :user_id")
	List<Components> findByAnimalSort(@Param("animal_sort") String animal_sort, @Param("user_id") long user_id);

	@Query("SELECT x FROM Components AS x WHERE name LIKE :name AND user_id = :user_id")
	List<Components> findByName(@Param("name") String name, @Param("user_id") long user_id);

	@Query("SELECT x FROM Components AS x WHERE user_id = :user_id")
	List<Components> findByUser_id(@Param("user_id") long user_id);

	
	//so ist es jpql, wenn native flag gesetzt wird geht auch rein SQL

}
