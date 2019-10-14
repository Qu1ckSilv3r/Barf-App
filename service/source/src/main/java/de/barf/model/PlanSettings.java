package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "planSettings")
public class PlanSettings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long settingID;
	private int animalAmount;
	private int fetPerDay;
	private int plantAmount;
	private int factor;
	private int fullfilDemant;
	private int intervall;
	private boolean ownComponent;
	private boolean planView;
	private int proteinPerDay;
	
	public PlanSettings() {
		
	}	
	public PlanSettings(long settingID, int animalAmount, int fetPerDay, int plantAmount, int factor, int fullfilDemant, int intervall, boolean ownComponent, boolean planView, int proteinPerDay) {
		super();
		this.settingID = settingID;
		this.animalAmount = animalAmount;
		this.fetPerDay = fetPerDay;
		this.plantAmount = plantAmount;
		this.factor = factor;
		this.fullfilDemant = fullfilDemant;
		this.intervall = intervall;
		this.ownComponent = ownComponent;
		this.planView = planView;
		this.proteinPerDay = proteinPerDay;
	}
	public long getSettingID() {
		return settingID;
	}
	public void setSettingID(long settingID) {
		this.settingID = settingID;
	}
	public int getAnimalAmount() {
		return animalAmount;
	}
	public void setAnimalAmount(int animalAmount) {
		this.animalAmount = animalAmount;
	}
	public int getFetPerDay() {
		return fetPerDay;
	}
	public void setFetPerDay(int fetPerDay) {
		this.fetPerDay = fetPerDay;
	}
	public int getPlantAmount() {
		return plantAmount;
	}
	public void setPlantAmount(int plantAmount) {
		this.plantAmount = plantAmount;
	}
	public int getFactor() {
		return factor;
	}
	public void setFactor(int factor) {
		this.factor = factor;
	}
	public int getFullfilDemant() {
		return fullfilDemant;
	}
	public void setFullfilDemant(int fullfilDemant) {
		this.fullfilDemant = fullfilDemant;
	}
	public int getIntervall() {
		return intervall;
	}
	public void setIntervall(int intervall) {
		this.intervall = intervall;
	}
	public boolean isOwnComponent() {
		return ownComponent;
	}
	public void setOwnComponent(boolean ownComponent) {
		this.ownComponent = ownComponent;
	}
	public boolean isPlanView() {
		return planView;
	}
	public void setPlanView(boolean planView) {
		this.planView = planView;
	}
	public int getProteinPerDay() {
		return proteinPerDay;
	}
	public void setProteinPerDay(int proteinPerDay) {
		this.proteinPerDay = proteinPerDay;
	}
	@Override
	public String toString() {
		return "PlanSettings [settingID=" + settingID + ", animalAmount=" + animalAmount + ", fetPerDay=" + fetPerDay
				+ ", plantAmount=" + plantAmount + ", factor=" + factor + ", fullfilDemant=" + fullfilDemant
				+ ", intervall=" + intervall + ", ownComponent=" + ownComponent + ", planView=" + planView
				+ ", proteinPerDay=" + proteinPerDay + "]";
	}
}
