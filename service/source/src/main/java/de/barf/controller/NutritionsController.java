package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Nutritions;
import de.barf.repository.INutritionsService;

@CrossOrigin(origins = "*")
@RestController
public class NutritionsController {
	@Autowired
	private INutritionsService nutritionsService;

	//geht
	@GetMapping("/nutritions")
	public List<Nutritions> findAll(){
		return nutritionsService.findAll();
	}
	
	//geht
	@RequestMapping(value = "/nutritions/of/{component_id}", method = RequestMethod.GET)
	public List<Nutritions> findNutritionsById(@PathVariable("component_id") long component_id){
		return nutritionsService.findByComponent_id(component_id);
	}
	
	//geht
	@RequestMapping(value = "/nutritions/{nutrition_id}", method = RequestMethod.GET)
	public Nutritions findNutritionById(@PathVariable("nutrition_id") long nutrition_id){
		return nutritionsService.findById(nutrition_id);
	}
	
	//geht
	@PostMapping("/nutritions/create")
	public Nutritions createSettings(@RequestBody Nutritions nutritions){
		//check ob es diese einträge so schon gibt, wenn ja gebe diesen Eintrag zurück, wenn nicht mach einen neuen eintrag
		List<Nutritions> set = nutritionsService.findAll();
		for (Nutritions s : set){
			if (s.equals(nutritions) == true){
				return s;
			}
		}
		return nutritionsService.saveSettings(nutritions);	
	}
	
	//geht
	@DeleteMapping("/nutritions/delete/{nutrition_id}")
	public void deletePlanSetting(@PathVariable("nutrition_id") long nutrition_id){
		nutritionsService.delete(nutrition_id);
	}
}
