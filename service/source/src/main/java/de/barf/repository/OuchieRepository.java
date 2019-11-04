package de.barf.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import de.barf.model.Ouchie;

public interface OuchieRepository extends CrudRepository<Ouchie, Long>{
	@Query("SELECT x FROM Ouchie AS x WHERE date LIKE :date")
	Ouchie findByDate(@Param("date") Date date);

}
