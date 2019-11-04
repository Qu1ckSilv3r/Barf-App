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
	@JsonFormat(pattern="yyyy-MM-dd")
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (animal_id ^ (animal_id >>> 32));
		result = prime * result + ((day_date == null) ? 0 : day_date.hashCode());
		result = prime * result + (heartburn ? 1231 : 1237);
		result = prime * result + (itsch ? 1231 : 1237);
		result = prime * result + (note ? 1231 : 1237);
		result = prime * result + ((others == null) ? 0 : others.hashCode());
		result = prime * result + (int) (ouchie_id ^ (ouchie_id >>> 32));
		result = prime * result + (poo ? 1231 : 1237);
		result = prime * result + (puke ? 1231 : 1237);
		result = prime * result + (rash ? 1231 : 1237);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ouchie other = (Ouchie) obj;
		if (animal_id != other.animal_id)
			return false;
		if (day_date == null) {
			if (other.day_date != null)
				return false;
		} else if (!day_date.equals(other.day_date))
			return false;
		if (heartburn != other.heartburn)
			return false;
		if (itsch != other.itsch)
			return false;
		if (note != other.note)
			return false;
		if (others == null) {
			if (other.others != null)
				return false;
		} else if (!others.equals(other.others))
			return false;
//		if (ouchie_id != other.ouchie_id)
//			return false;
		if (poo != other.poo)
			return false;
		if (puke != other.puke)
			return false;
		if (rash != other.rash)
			return false;
		return true;
	}
	
}
