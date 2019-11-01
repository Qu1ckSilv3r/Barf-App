package de.barf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import de.barf.model.Animal;

@Repository
public interface AnimalRepository extends CrudRepository<Animal,Long>{
	@Query("SELECT x FROM Animal AS x WHERE user_id = :user_id")
	List<Animal> findByUserId(@Param("user_id")long user_id);
}
