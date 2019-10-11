package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "component")
public class Component {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long componentID;
	private String categorie;
	private String animalSort;
	private String name;
	private String info;
	private long userID;
	private long wikiID;
	
	public Component() {
		// TODO Auto-generated constructor stub
	}

	public Component(long componentID, String categorie, String animalSort, String name, String info, long userID, long wikiID) {
		super();
		this.componentID = componentID;
		this.categorie = categorie;
		this.animalSort = animalSort;
		this.name = name;
		this.info = info;
		this.userID = userID;
		this.wikiID = wikiID;
	}

	public long getComponentID() {
		return componentID;
	}

	public void setComponentID(long componentID) {
		this.componentID = componentID;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getAnimalSort() {
		return animalSort;
	}

	public void setAnimalSort(String animalSort) {
		this.animalSort = animalSort;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public long getUserID() {
		return userID;
	}

	public void setUserID(long userID) {
		this.userID = userID;
	}

	public long getWikiID() {
		return wikiID;
	}

	public void setWikiID(long wikiID) {
		this.wikiID = wikiID;
	}
	@Override
	public String toString() {
		return "Component [componentID=" + componentID + ", categorie=" + categorie + ", animalSort=" + animalSort
				+ ", name=" + name + ", info=" + info + ", userID=" + userID + ", wikiID=" + wikiID + "]";
	}	
}
