package de.barf.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import de.barf.model.Feedlist;

public interface FeedlistRepository extends CrudRepository<Feedlist, Long>{
	@Query("SELECT x From Feedlist AS x WHERE schedult_id = :schedult_id")
	List<Feedlist> findBySchedult_id(@Param("schedult_id") long schedult_id);

}
