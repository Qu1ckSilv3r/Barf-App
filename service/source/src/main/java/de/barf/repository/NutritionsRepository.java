package de.barf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import de.barf.model.Nutritions;

public interface NutritionsRepository extends CrudRepository<Nutritions, Long>{
	@Query("SELECT x FROM Nutritions AS x WHERE component_id = :component_id")
	List<Nutritions> findByComponent_id(@Param("component_id") long component_id);
	
}
