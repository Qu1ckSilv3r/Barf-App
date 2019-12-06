package de.barf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import de.barf.model.Filtered_by;

public interface Filtered_byRepository extends CrudRepository<Filtered_by, Long>{
	
	@Query("SELECT x FROM Filtered_by AS x WHERE animal_id = :animal_id")
	List<Filtered_by> findByAnimalId(@Param("animal_id") long animal_id);

	@Query("SELECT x FROM Filtered_by AS x WHERE property LIKE :property AND animal_id = :animal_id")
	List<Filtered_by> findByPropertyAndAnimalId(@Param("property") String property,@Param("animal_id") long animal_id);
	
}
