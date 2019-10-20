package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "plansettings")
public class Plansettings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long setting_id;
	private int animal_amount;
	private int fet_per_day;
	private int plant_amount;
	private int factor;
	private int fullfil_demant;
	private int intervall;
	private boolean own_component;
	private boolean plan_view;
	private int protein_per_day;
	
	public Plansettings() {
		
	}	
	public Plansettings(long setting_id, int animal_amount, int fet_per_day, int plant_amount, int factor, int fullfil_demant, int intervall, boolean own_component, boolean plan_view, int protein_per_day) {
		super();
		this.setting_id = setting_id;
		this.animal_amount = animal_amount;
		this.fet_per_day = fet_per_day;
		this.plant_amount = plant_amount;
		this.factor = factor;
		this.fullfil_demant = fullfil_demant;
		this.intervall = intervall;
		this.own_component = own_component;
		this.plan_view = plan_view;
		this.protein_per_day = protein_per_day;
	}
	
	public long getSetting_id() {
		return setting_id;
	}
	
	public void setSetting_id(long setting_id) {
		this.setting_id = setting_id;
	}
	
	public int getAnimal_amount() {
		return animal_amount;
	}
	
	public void setAnimal_amount(int animal_amount) {
		this.animal_amount = animal_amount;
	}
	
	public int getFet_per_day() {
		return fet_per_day;
	}
	
	public void setFet_per_day(int fet_per_day) {
		this.fet_per_day = fet_per_day;
	}
	
	public int getPlant_amount() {
		return plant_amount;
	}
	
	public void setPlant_amount(int plant_amount) {
		this.plant_amount = plant_amount;
	}
	
	public int getFactor() {
		return factor;
	}
	
	public void setFactor(int factor) {
		this.factor = factor;
	}
	
	public int getFullfil_demant() {
		return fullfil_demant;
	}
	
	public void setFullfil_demant(int fullfil_demant) {
		this.fullfil_demant = fullfil_demant;
	}
	
	public int getIntervall() {
		return intervall;
	}
	
	public void setIntervall(int intervall) {
		this.intervall = intervall;
	}
	
	public boolean isOwn_component() {
		return own_component;
	}
	
	public void setOwn_component(boolean own_component) {
		this.own_component = own_component;
	}
	
	public boolean isPlan_view() {
		return plan_view;
	}
	
	public void setPlan_view(boolean plan_view) {
		this.plan_view = plan_view;
	}
	
	public int getProtein_per_day() {
		return protein_per_day;
	}
	
	public void setProtein_per_day(int protein_per_day) {
		this.protein_per_day = protein_per_day;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + animal_amount;
		result = prime * result + factor;
		result = prime * result + fet_per_day;
		result = prime * result + fullfil_demant;
		result = prime * result + intervall;
		result = prime * result + (own_component ? 1231 : 1237);
		result = prime * result + (plan_view ? 1231 : 1237);
		result = prime * result + plant_amount;
		result = prime * result + protein_per_day;
		result = prime * result + (int) (setting_id ^ (setting_id >>> 32));
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Plansettings other = (Plansettings) obj;
		if (animal_amount != other.animal_amount)
			return false;
		if (factor != other.factor)
			return false;
		if (fet_per_day != other.fet_per_day)
			return false;
		if (fullfil_demant != other.fullfil_demant)
			return false;
		if (intervall != other.intervall)
			return false;
		if (own_component != other.own_component)
			return false;
		if (plan_view != other.plan_view)
			return false;
		if (plant_amount != other.plant_amount)
			return false;
		if (protein_per_day != other.protein_per_day)
			return false;
//		if (setting_id != other.setting_id)
//			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "Plansettings [setting_id=" + setting_id + ", animal_amount=" + animal_amount + ", fet_per_day=" + fet_per_day
				+ ", plant_amount=" + plant_amount + ", factor=" + factor + ", fullfil_demant=" + fullfil_demant
				+ ", intervall=" + intervall + ", own_component=" + own_component + ", plan_view=" + plan_view
				+ ", protein_per_day=" + protein_per_day + "]";
	}
}
