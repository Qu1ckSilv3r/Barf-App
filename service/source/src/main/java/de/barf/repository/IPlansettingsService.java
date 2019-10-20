package de.barf.repository;

import java.util.List;

import de.barf.model.Plansettings;

public interface IPlansettingsService {

	List<Plansettings> findAll();
	Plansettings findById(long setting_id);
	Plansettings saveSettings(Plansettings plansettings);
	//Plansettings getSetting_id(int animal_amount,int fet_per_day,int plant_amount,int factor,int fullfil_demant,int intervall,boolean own_component,boolean plan_view,int protein_per_day);
	
}
