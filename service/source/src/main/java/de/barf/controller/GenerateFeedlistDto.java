package de.barf.controller;

import java.util.List;
import java.util.Map;

import de.barf.model.Components;

public class GenerateFeedlistDto {
	
	private Map<String, List<Long>> components;
	private Map<String, Double> settingsOfAnimal;
	
	public GenerateFeedlistDto() {
		super();
	}
	
	public GenerateFeedlistDto(Map<String, List<Long>> components, Map<String, Double> settingsOfAnimal) {
		super();
		this.components = components;
		this.settingsOfAnimal = settingsOfAnimal;
	}

	public Map<String, List<Long>> getComponents() {
		return components;
	}

	public void setComponents(Map<String, List<Long>> components) {
		this.components = components;
	}

	public Map<String, Double> getSettingsOfAnimal() {
		return settingsOfAnimal;
	}

	public void setSettingsOfAnimal(Map<String, Double> settingsOfAnimal) {
		this.settingsOfAnimal = settingsOfAnimal;
	}
	
}
