package de.barf.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import de.barf.model.Animal;

@Repository
public interface AnimalRepository extends CrudRepository<Animal, Long>{
	@Query("SELECT x FROM Animal AS x WHERE username LIKE :user_Id")
	Animal findByUserId(@Param("user_Id")long user_Id);
}
