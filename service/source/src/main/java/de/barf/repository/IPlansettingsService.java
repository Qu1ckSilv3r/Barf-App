package de.barf.repository;

import java.util.List;

import de.barf.model.Plansettings;

public interface IPlansettingsService {

	List<Plansettings> findAll();
	Plansettings findById(long setting_id);
	Plansettings saveSettings(Plansettings plansettings);
	void delete(long setting_id);
	
}
