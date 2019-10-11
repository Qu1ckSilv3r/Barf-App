package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "filteredBy")
public class FilteredBy {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String sort;
	private String name;
	private String categorie;
	private String property;
	private long componentID;
	private long animalID; 
	
	public FilteredBy() {
		// TODO Auto-generated constructor stub
	}

	public FilteredBy(String sort, String name, String categorie, String property, long componentID, long animalID) {
		super();
		this.sort = sort;
		this.name = name;
		this.categorie = categorie;
		this.property = property;
		this.componentID = componentID;
		this.animalID = animalID;
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

	public long getComponentID() {
		return componentID;
	}

	public void setComponentID(long componentID) {
		this.componentID = componentID;
	}

	public long getAnimalID() {
		return animalID;
	}

	public void setAnimalID(long animalID) {
		this.animalID = animalID;
	}
	@Override
	public String toString() {
		return "FilteredBy [sort=" + sort + ", name=" + name + ", categorie=" + categorie + ", property=" + property
				+ ", componentID=" + componentID + ", animalID=" + animalID + "]";
	}
}
//geht so nicht, siehe Nuriritions; PRIMARY KEY (componentID, animalID
