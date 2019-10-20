package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Plansettings;

@Component
public class PlansettingsService implements IPlansettingsService{
	@Autowired
	private PlansettingsRepository settingRepository;
	
	@Override
	public List<Plansettings> findAll(){
		return (List<Plansettings>) settingRepository.findAll();
	}
	
	@Override
	public Plansettings findById(long settingID){
		return settingRepository.findById(settingID).get();
	}
	
	@Override
	public Plansettings saveSettings(Plansettings planSettings){
		return settingRepository.save(planSettings);
	}
	
//	@Override
//	public Plansettings getSetting_id(int animal_amount,int fet_per_day,int plant_amount,int factor,int fullfil_demant,int intervall,boolean own_component,boolean plan_view,int protein_per_day){
//		return settingRepository.getSetting_id(animal_amount, fet_per_day, plant_amount, factor, fullfil_demant, intervall, own_component, plan_view, protein_per_day);
//	}
}
