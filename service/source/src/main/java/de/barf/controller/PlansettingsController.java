package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
	
	//geht
	@PostMapping("planSettings/create")
	public Plansettings createSettings(@RequestBody Plansettings plansettings){
		//check ob es diese einträge so schon gibt, wenn ja gebe die ID zurück, wenn nicht mach einen neuen eintrag
		List<Plansettings> set = plansettingsService.findAll();
		for (Plansettings s : set){
			if (s.equals(plansettings) == true){
				return s;
				//geht nicht
				//plansettingsService.getSetting_id(plansettings.getAnimal_amount(), plansettings.getFet_per_day(), plansettings.getPlant_amount(), plansettings.getFactor(), plansettings.getFullfil_demant(), plansettings.getIntervall(), plansettings.isOwn_component(), plansettings.isPlan_view(), plansettings.getProtein_per_day());
				//plansettingsService.getSetting_id(plansettings)
			}
		}
		return plansettingsService.saveSettings(plansettings);	
	}
	
	//Setting_id im jeweiligen Animal hinterlegen
}
