package de.barf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import de.barf.model.Feedlist;

public interface FeedlistRepository extends CrudRepository<Feedlist, Long>{
	@Query("SELECT x From Feedlist AS x WHERE schedult_id = :schedult_id")
	List<Feedlist> findBySchedult_id(@Param("schedult_id") long schedult_id);

	@Query("SELECT x From Feedlist AS x WHERE animal_id = :animal_id")
	List<Feedlist> findByAnimal_id(@Param("animal_id") long animal_id);

	@Query("SELECT x From Feedlist AS x WHERE animal_id = :animal_id AND schedult_id = :schedult_id")
	List<Feedlist> findByAnimal_idAndSchedult_id(@Param("animal_id") long animal_id,@Param("schedult_id") long schedult_id);

}
