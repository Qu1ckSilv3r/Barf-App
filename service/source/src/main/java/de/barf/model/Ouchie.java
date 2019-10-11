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
	private long ouchieID;
	private boolean note;
	private boolean poo;
	private boolean rash;
	private boolean heartburn;
	private boolean itsch;
	private boolean puke;
	private String others;
	@JsonFormat(pattern="yyyy-mm-dd")
	private Date dayDate;
	private long animalID;
	
	public Ouchie() {
		// TODO Auto-generated constructor stub
	}

	public Ouchie(long ouchieID, boolean note, boolean poo, boolean rash, boolean heartburn, boolean itsch,
			boolean puke, String others, Date dayDate, long animalID) {
		super();
		this.ouchieID = ouchieID;
		this.note = note;
		this.poo = poo;
		this.rash = rash;
		this.heartburn = heartburn;
		this.itsch = itsch;
		this.puke = puke;
		this.others = others;
		this.dayDate = dayDate;
		this.animalID = animalID;
	}

	public long getOuchieID() {
		return ouchieID;
	}

	public void setOuchieID(long ouchieID) {
		this.ouchieID = ouchieID;
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

	public Date getDayDate() {
		return dayDate;
	}

	public void setDayDate(Date dayDate) {
		this.dayDate = dayDate;
	}

	public long getAnimalID() {
		return animalID;
	}

	public void setAnimalID(long animalID) {
		this.animalID = animalID;
	}
	@Override
	public String toString() {
		return "Ouchie [ouchieID=" + ouchieID + ", note=" + note + ", poo=" + poo + ", rash=" + rash + ", heartburn="
				+ heartburn + ", itsch=" + itsch + ", puke=" + puke + ", others=" + others + ", dayDate=" + dayDate
				+ ", animalID=" + animalID + "]";
	}
}
