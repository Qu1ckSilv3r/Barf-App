package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "nutritions")
public class Nutritions {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long nutrition_id;
	private String nutrition;
	private long component_id;
	private double value;
	
	public Nutritions() {
		super();
	}

	public Nutritions(long nutrition_id, String nutrition, long component_id, double value) {
		super();
		this.nutrition_id = nutrition_id;
		this.nutrition = nutrition;
		this.component_id = component_id;
		this.value = value;
	}

	public long getNutrition_id() {
		return nutrition_id;
	}

	public void setNutrition_id(long nutrition_id) {
		this.nutrition_id = nutrition_id;
	}

	public String getNutrition() {
		return nutrition;
	}

	public void setNutrition(String nutrition) {
		this.nutrition = nutrition;
	}

	public long getComponent_id() {
		return component_id;
	}

	public void setComponent_id(long component_id) {
		this.component_id = component_id;
	}

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Nutritions [nutrition_id=" + nutrition_id + ", nutrition=" + nutrition + ", component_id="
				+ component_id + ", value=" + value + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (component_id ^ (component_id >>> 32));
		result = prime * result + ((nutrition == null) ? 0 : nutrition.hashCode());
		result = prime * result + (int) (nutrition_id ^ (nutrition_id >>> 32));
		long temp;
		temp = Double.doubleToLongBits(value);
		result = prime * result + (int) (temp ^ (temp >>> 32));
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
		Nutritions other = (Nutritions) obj;
		if (component_id != other.component_id)
			return false;
		if (nutrition == null) {
			if (other.nutrition != null)
				return false;
		} else if (!nutrition.equals(other.nutrition))
			return false;
//		if (nutrition_id != other.nutrition_id)
//			return false;
		if (Double.doubleToLongBits(value) != Double.doubleToLongBits(other.value))
			return false;
		return true;
	}
	
}