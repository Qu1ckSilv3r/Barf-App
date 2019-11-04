package de.barf.repository;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;

import de.barf.model.Plansettings;

public interface PlansettingsRepository extends CrudRepository<Plansettings, Long>{
	
}