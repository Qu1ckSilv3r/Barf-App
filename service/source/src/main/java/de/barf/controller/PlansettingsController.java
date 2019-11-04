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
				//Leeren COnstructor von Animal nehmen und darauf setID??
				return s;
			}
		}
		return plansettingsService.saveSettings(plansettings);	
	}
	
	//Setting_id im jeweiligen Animal hinterlegen
		//--> Setting_id im animal setzten. Animal überarbeiten.
	
	//delete
	@DeleteMapping("/planSettings/delete/{setting_id}")
	public void deletePlanSetting(@PathVariable("setting_id") long setting_id){
		plansettingsService.delete(setting_id);
	}
}
