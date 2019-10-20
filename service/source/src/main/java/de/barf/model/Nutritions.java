//package de.barf.model;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "nutritions")
//public class Nutritions {
//	//@Id
//	//@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private String nutrition;
//	private long component_id;
//	private int value;
//	
//	public Nutritions() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Nutritions(String nutrition, long component_id, int value) {
//		super();
//		this.nutrition = nutrition;
//		this.component_id = component_id;
//		this.value = value;
//	}
//
//	public String getNutrition() {
//		return nutrition;
//	}
//
//	public void setNutrition(String nutrition) {
//		this.nutrition = nutrition;
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
//	public int getValue() {
//		return value;
//	}
//
//	public void setValue(int value) {
//		this.value = value;
//	}
//	@Override
//	public String toString() {
//		return "Nutritions [nutrition=" + nutrition + ", component_id=" + component_id + ", value=" + value + "]";
//	}
//}
//// PK sind 	private String nutrition; private long component_id Annotation muss da anders aussehen