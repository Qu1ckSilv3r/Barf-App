package de.barf.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "animal")
public class Animal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long animalID;
	@JsonFormat(pattern="yyyy-mm-dd")
	private Date birthday;
	private int age;
	private String spezies;
	private String name;
	private double weight;
	private double target_weight;
	private String aktivity;
	private long user_id;
	
	public Animal() {
		
	}
	public Animal(long animalID, Date birthday, int age, String spezies, String name, double weight, double target_weight, String aktivity, long user_id) {
		super();
		this.animalID = animalID;
		this.birthday = birthday;
		this.age = age;
		this.spezies = spezies;
		this.name = name;
		this.weight = weight;
		this.target_weight = target_weight;
		this.aktivity = aktivity;
		this.user_id = user_id;		
	}
	public long getAnimalID() {
		return animalID;
	}
	public void setAnimalID(long animalID) {
		this.animalID = animalID;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSpezies() {
		return spezies;
	}
	public void setSpezies(String spezies) {
		this.spezies = spezies;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	public double getTargetWeight() {
		return target_weight;
	}
	public void setTargetWeight(double target_weight) {
		this.target_weight = target_weight;
	}
	public String getAktivity() {
		return aktivity;
	}
	public void setAktivity(String aktivity) {
		this.aktivity = aktivity;
	}
	public long getUserID() {
		return user_id;
	}
	public void setUserID(long user_id) {
		this.user_id = user_id;
	}
	@Override
	public String toString() {
		return "Animal [animalID=" + animalID + ", birthday=" + birthday + ", age=" + age + ", spezies=" + spezies
				+ ", name=" + name + ", weight=" + weight + ", target_weight=" + target_weight + ", aktivity="
				+ aktivity + ", user_id=" + user_id + "]";
	}
	
}