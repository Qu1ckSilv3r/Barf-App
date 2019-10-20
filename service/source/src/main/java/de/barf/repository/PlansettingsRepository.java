package de.barf.repository;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;

import de.barf.model.Plansettings;

public interface PlansettingsRepository extends CrudRepository<Plansettings, Long>{
	
//	@Query("SELECT x.setting_id FROM Plansettings AS x WHERE animal_amount LIKE :animal_amount AND factor LIKE :factor AND intervall LIKE :intervall AND fet_per_day LIKE :fet_per_day AND fullfil_demant LIKE :fullfil_demant AND plant_amount LIKE :plant_amount AND protein_per_day LIKE :protein_per_day AND own_component LIKE :own_component AND plan_view LIKE :plan_view")	
//	Plansettings getSetting_id(@Param("animal_amount") int animal_amount,@Param("fet_per_day") int fet_per_day,@Param("plant_amount") int plant_amount,@Param("factor") int factor,@Param("fullfil_demant") int fullfil_demant,@Param("intervall") int intervall,
//			@Param("own_component") boolean own_component,@Param("plan_view") boolean plan_view,@Param("protein_per_day") int protein_per_day);
//	//PlanSettings getSetting_id (@Param("animal_amount") int animal_amount, @Param("plant_amount") int plant_amount);
}