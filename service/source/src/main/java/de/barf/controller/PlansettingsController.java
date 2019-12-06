package de.barf.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Animal;
import de.barf.model.Plansettings;
import de.barf.repository.IPlansettingsService;

@CrossOrigin(origins = "*")
@RestController
public class PlansettingsController {
	@Autowired
	private IPlansettingsService plansettingsService;

	//geht
	@GetMapping("/planSettings")
	public List<Plansettings> findAll(){
		return plansettingsService.findAll();
	}
	
	//geht
	@RequestMapping(value = "/planSettings/{setting_id}", method = RequestMethod.GET)
	public Plansettings findSettingsById(@PathVariable("setting_id") long setting_id){
		return plansettingsService.findById(setting_id);
	}
	
	//geht -->gibt nur die ID zurück
	@GetMapping("/plan/ID/{setting_id}")
	public Long id(@PathVariable("setting_id") long setting_id){
		Plansettings plan = plansettingsService.findById(setting_id);
		return plan.getSetting_id();
	}
	
	//geht
	@PostMapping("planSettings/create")
	public Plansettings createSettings(@RequestBody Plansettings plansettings){
		//check ob es diese einträge so schon gibt, wenn ja gebe diesen Eintrag zurück, wenn nicht mach einen neuen eintrag
		List<Plansettings> set = plansettingsService.findAll();
		for (Plansettings s : set){
			if (s.equals(plansettings) == true){
				//Leeren Constructor von Animal nehmen und darauf setID??
				return s;
			}
		}
		return plansettingsService.saveSettings(plansettings);	
	}
	
	//geht
	@PutMapping("/planSettings/changeAnimalAmount/{setting_id}")
	public Plansettings changeAnimalAmount(@PathVariable("setting_id")long setting_id, @RequestBody int animal_amount){
		Plansettings plan = plansettingsService.findById(setting_id);
		if (animal_amount != 0){
			plan.setAnimal_amount(animal_amount);
			plan.setPlant_amount(100 - animal_amount);
		}
		return plansettingsService.saveSettings(plan);
	}
	
	//geht
	@PutMapping("/planSettings/changePlantAmount/{setting_id}")
	public Plansettings changePlantAmount(@PathVariable("setting_id")long setting_id, @RequestBody int plant_amount){
		Plansettings plan = plansettingsService.findById(setting_id);
		if (plant_amount != 0){
			plan.setPlant_amount(plant_amount);
			plan.setAnimal_amount(100 - plant_amount);
		}
		return plansettingsService.saveSettings(plan);
	}

	//geht
	@PutMapping("/planSettings/changeFetPerDay/{setting_id}")
	public Plansettings changeFetPerDay(@PathVariable("setting_id")long setting_id, @RequestBody int fet_per_day){
		Plansettings plan = plansettingsService.findById(setting_id);
		if (fet_per_day != 0){
			plan.setFet_per_day(fet_per_day);
		}
		return plansettingsService.saveSettings(plan);
	}
	
	//geht
	@PutMapping("/planSettings/changeFactor/{setting_id}")
	public Plansettings changeFactor(@PathVariable("setting_id")long setting_id, @RequestBody int factor){
		Plansettings plan = plansettingsService.findById(setting_id);
		if (factor != 0){
			plan.setFactor(factor);
		}
		return plansettingsService.saveSettings(plan);
	}
	
	//geht
	@PutMapping("/planSettings/changeFullfilDemant/{setting_id}")
	public Plansettings changeFullfilDemant(@PathVariable("setting_id")long setting_id, @RequestBody int fullfil_demant){
		Plansettings plan = plansettingsService.findById(setting_id);
		if (fullfil_demant != 0){
			plan.setFullfil_demant(fullfil_demant);
		}
		return plansettingsService.saveSettings(plan);
	}
	
	//geht
	@PutMapping("/planSettings/changeIntervall/{setting_id}")
	public Plansettings changeIntervall(@PathVariable("setting_id")long setting_id, @RequestBody int intervall){
		Plansettings plan = plansettingsService.findById(setting_id);
		if (intervall != 0){
			plan.setIntervall(intervall);
		}
		return plansettingsService.saveSettings(plan);
	}
	
	//geht
	@PutMapping("/planSettings/changeOwnComponent/{setting_id}")
	public Plansettings changeOwnComponent(@PathVariable("setting_id")long setting_id, @RequestBody boolean own_component){
		Plansettings plan = plansettingsService.findById(setting_id);
		plan.setOwn_component(own_component);
		return plansettingsService.saveSettings(plan);
	}
	
	//geht
	@PutMapping("/planSettings/changePlanView/{setting_id}")
	public Plansettings changePlanView(@PathVariable("setting_id")long setting_id, @RequestBody boolean plan_view){
		Plansettings plan = plansettingsService.findById(setting_id);
		plan.setPlan_view(plan_view);
		return plansettingsService.saveSettings(plan);
	}
	
	//geht
	@PutMapping("/planSettings/changeProteinPerDay/{setting_id}")
	public Plansettings changeProteinPerDay(@PathVariable("setting_id")long setting_id, @RequestBody int protein_per_day){
		Plansettings plan = plansettingsService.findById(setting_id);
		if (protein_per_day != 0){
			plan.setProtein_per_day(protein_per_day);
		}
		return plansettingsService.saveSettings(plan);
	}
	
	//delete
	@DeleteMapping("/planSettings/delete/{setting_id}")
	public void deletePlanSetting(@PathVariable("setting_id") long setting_id){
		plansettingsService.delete(setting_id);
	}
}
