package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "filtered_by")
public class Filtered_by {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long filtered_by_id;
	private String sort;
	private String name;
	private String categorie;
	private String property;
	private long component_id;
	private long animal_id; 
	
	public Filtered_by() {
		// TODO Auto-generated constructor stub
	}

	public Filtered_by(long filtered_by_id, String sort, String name, String categorie, String property, long component_id, long animal_id) {
		super();
		this.filtered_by_id = filtered_by_id;
		this.sort = sort;
		this.name = name;
		this.categorie = categorie;
		this.property = property;
		this.component_id = component_id;
		this.animal_id = animal_id;
	}
	
	public long getFiltered_by_id() {
		return filtered_by_id;
	}

	public void setFiltered_by_id(long filtered_by_id) {
		this.filtered_by_id = filtered_by_id;
	}

	public String getSort() {
		return sort;
	}

	public void setSort(String sort) {
		this.sort = sort;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public long getComponent_id() {
		return component_id;
	}

	public void setComponent_id(long component_id) {
		this.component_id = component_id;
	}

	public long getAnimal_id() {
		return animal_id;
	}

	public void setAnimal_id(long animal_id) {
		this.animal_id = animal_id;
	}

	@Override
	public String toString() {
		return "Filtered_by [filtered_by_id=" + filtered_by_id + ", sort=" + sort + ", name=" + name + ", categorie="
				+ categorie + ", property=" + property + ", component_id=" + component_id + ", animal_id=" + animal_id
				+ "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (animal_id ^ (animal_id >>> 32));
		result = prime * result + ((categorie == null) ? 0 : categorie.hashCode());
		result = prime * result + (int) (component_id ^ (component_id >>> 32));
		result = prime * result + (int) (filtered_by_id ^ (filtered_by_id >>> 32));
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((property == null) ? 0 : property.hashCode());
		result = prime * result + ((sort == null) ? 0 : sort.hashCode());
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
		Filtered_by other = (Filtered_by) obj;
		if (animal_id != other.animal_id)
			return false;
		if (categorie == null) {
			if (other.categorie != null)
				return false;
		} else if (!categorie.equals(other.categorie))
			return false;
		if (component_id != other.component_id)
			return false;
		if (filtered_by_id != other.filtered_by_id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (property == null) {
			if (other.property != null)
				return false;
		} else if (!property.equals(other.property))
			return false;
		if (sort == null) {
			if (other.sort != null)
				return false;
		} else if (!sort.equals(other.sort))
			return false;
		return true;
	}
	
}
