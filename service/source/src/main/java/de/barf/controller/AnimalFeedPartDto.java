package de.barf.controller;

public class AnimalFeedPartDto {

	private double fet_per_day;
	private double protein_per_day;	
	private double muscle_meat;
	private double offal;
	private double bone;
	private double rumen;	
	private double vegetable;
	private double fruit;
	
	public AnimalFeedPartDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AnimalFeedPartDto(double fet_per_day, double protein_per_day, double muscle_meat, double offal,
			double bone, double rumen, double vegetable, double fruit) {
		super();
		this.fet_per_day = fet_per_day;
		this.protein_per_day = protein_per_day;
		this.muscle_meat = muscle_meat;
		this.offal = offal;
		this.bone = bone;
		this.rumen = rumen;
		this.vegetable = vegetable;
		this.fruit = fruit;
	}

	public double getFet_per_day() {
		return fet_per_day;
	}

	public void setFet_per_day(double fet_per_day) {
		this.fet_per_day = fet_per_day;
	}

	public double getProtein_per_day() {
		return protein_per_day;
	}

	public void setProtein_per_day(double protein_per_day) {
		this.protein_per_day = protein_per_day;
	}

	public double getMuscle_meat() {
		return muscle_meat;
	}

	public void setMuscle_meat(double muscle_meat) {
		this.muscle_meat = muscle_meat;
	}

	public double getOffal() {
		return offal;
	}

	public void setOffal(double offal) {
		this.offal = offal;
	}

	public double getBone() {
		return bone;
	}

	public void setBone(double bone) {
		this.bone = bone;
	}

	public double getRumen() {
		return rumen;
	}

	public void setRumen(double rumen) {
		this.rumen = rumen;
	}

	public double getVegetable() {
		return vegetable;
	}

	public void setVegetable(double vegetable) {
		this.vegetable = vegetable;
	}
	
	public double getFruit() {
		return fruit;
	}

	public void setFruit(double fruit) {
		this.fruit = fruit;
	}

	@Override
	public String toString() {
		return "AnimalFeedPartDto [fet_per_day=" + fet_per_day + ", protein_per_day=" + protein_per_day
				+ ", muscle_meat=" + muscle_meat + ", offal=" + offal + ", bone=" + bone + ", rumen=" + rumen
				+ ", vegetable=" + vegetable + ", fruit=" + fruit + "]";
	}
	
}
