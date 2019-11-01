package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "component")
public class Components {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long component_id;
	private String categorie;
	private String animal_sort;
	private String name;
	private String info;
	private long user_id;
	private Long wiki_id;
	
	public Components() {
		// TODO Auto-generated constructor stub
	}

	public Components(long component_id, String categorie, String animal_sort, String name, String info, long user_id, Long wiki_id) {
		super();
		this.component_id = component_id;
		this.categorie = categorie;
		this.animal_sort = animal_sort;
		this.name = name;
		this.info = info;
		this.user_id = user_id;
		this.wiki_id = wiki_id;
	}
	
	public long getComponent_id() {
		return component_id;
	}

	public void setComponent_id(long component_id) {
		this.component_id = component_id;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getAnimal_sort() {
		return animal_sort;
	}

	public void setAnimal_sort(String animal_sort) {
		this.animal_sort = animal_sort;
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

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public Long getWiki_id() {
		return wiki_id;
	}

	public void setWiki_id(Long wiki_id) {
		this.wiki_id = wiki_id;
	}
	@Override
	public String toString() {
		return "Component [component_id=" + component_id + ", categorie=" + categorie + ", animal_sort=" + animal_sort
				+ ", name=" + name + ", info=" + info + ", user_id=" + user_id + ", wiki_id=" + wiki_id + "]";
	}	
}
