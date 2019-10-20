//package de.barf.model;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "filtered_by")
//public class Filtered_by {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private String sort;
//	private String name;
//	private String categorie;
//	private String property;
//	private long component_id;
//	private long animal_id; 
//	
//	public Filtered_by() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Filtered_by(String sort, String name, String categorie, String property, long component_id, long animal_id) {
//		super();
//		this.sort = sort;
//		this.name = name;
//		this.categorie = categorie;
//		this.property = property;
//		this.component_id = component_id;
//		this.animal_id = animal_id;
//	}
//
//	public String getSort() {
//		return sort;
//	}
//
//	public void setSort(String sort) {
//		this.sort = sort;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getCategorie() {
//		return categorie;
//	}
//
//	public void setCategorie(String categorie) {
//		this.categorie = categorie;
//	}
//
//	public String getProperty() {
//		return property;
//	}
//
//	public void setProperty(String property) {
//		this.property = property;
//	}
//
//	public long getComponent_id() {
//		return component_id;
//	}
//
//	public void setComponent_id(long component_id) {
//		this.component_id = component_id;
//	}
//
//	public long getAnimal_id() {
//		return animal_id;
//	}
//
//	public void setAnimal_id(long animal_id) {
//		this.animal_id = animal_id;
//	}
//	@Override
//	public String toString() {
//		return "Filtered_by [sort=" + sort + ", name=" + name + ", categorie=" + categorie + ", property=" + property
//				+ ", component_id=" + component_id + ", animal_id=" + animal_id + "]";
//	}
//}
////geht so nicht, siehe Nuriritions; PRIMARY KEY (component_id, animal_id)
