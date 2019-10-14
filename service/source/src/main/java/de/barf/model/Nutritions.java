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
//	private long componentID;
//	private int value;
//	
//	public Nutritions() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Nutritions(String nutrition, long componentID, int value) {
//		super();
//		this.nutrition = nutrition;
//		this.componentID = componentID;
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
//	public long getComponentID() {
//		return componentID;
//	}
//
//	public void setComponentID(long componentID) {
//		this.componentID = componentID;
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
//		return "Nutritions [nutrition=" + nutrition + ", componentID=" + componentID + ", value=" + value + "]";
//	}
//}
//// PK sind 	private String nutrition; private long componentID Annotation muss da anders aussehen