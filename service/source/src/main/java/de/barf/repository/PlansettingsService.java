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
	
	@Override
	public void delete(long setting_id) {
		settingRepository.deleteById(setting_id);
	}
}
