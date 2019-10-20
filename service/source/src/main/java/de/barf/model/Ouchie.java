package de.barf.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "ouchie")
public class Ouchie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ouchie_id;
	private boolean note;
	private boolean poo;
	private boolean rash;
	private boolean heartburn;
	private boolean itsch;
	private boolean puke;
	private String others;
	@JsonFormat(pattern="yyyy-mm-dd")
	private Date day_date;
	private long animal_id;
	
	public Ouchie() {
		// TODO Auto-generated constructor stub
	}

	public Ouchie(long ouchie_id, boolean note, boolean poo, boolean rash, boolean heartburn, boolean itsch,
			boolean puke, String others, Date day_date, long animal_id) {
		super();
		this.ouchie_id = ouchie_id;
		this.note = note;
		this.poo = poo;
		this.rash = rash;
		this.heartburn = heartburn;
		this.itsch = itsch;
		this.puke = puke;
		this.others = others;
		this.day_date = day_date;
		this.animal_id = animal_id;
	}

	public long getOuchie_id() {
		return ouchie_id;
	}

	public void setOuchie_id(long ouchie_id) {
		this.ouchie_id = ouchie_id;
	}

	public boolean isNote() {
		return note;
	}

	public void setNote(boolean note) {
		this.note = note;
	}

	public boolean isPoo() {
		return poo;
	}

	public void setPoo(boolean poo) {
		this.poo = poo;
	}

	public boolean isRash() {
		return rash;
	}

	public void setRash(boolean rash) {
		this.rash = rash;
	}

	public boolean isHeartburn() {
		return heartburn;
	}

	public void setHeartburn(boolean heartburn) {
		this.heartburn = heartburn;
	}

	public boolean isItsch() {
		return itsch;
	}

	public void setItsch(boolean itsch) {
		this.itsch = itsch;
	}

	public boolean isPuke() {
		return puke;
	}

	public void setPuke(boolean puke) {
		this.puke = puke;
	}

	public String getOthers() {
		return others;
	}

	public void setOthers(String others) {
		this.others = others;
	}

	public Date getDay_date() {
		return day_date;
	}

	public void setDay_date(Date day_date) {
		this.day_date = day_date;
	}

	public long getAnimal_id() {
		return animal_id;
	}

	public void setAnimal_id(long animal_id) {
		this.animal_id = animal_id;
	}
	@Override
	public String toString() {
		return "Ouchie [ouchie_id=" + ouchie_id + ", note=" + note + ", poo=" + poo + ", rash=" + rash + ", heartburn="
				+ heartburn + ", itsch=" + itsch + ", puke=" + puke + ", others=" + others + ", day_date=" + day_date
				+ ", animal_id=" + animal_id + "]";
	}
}
