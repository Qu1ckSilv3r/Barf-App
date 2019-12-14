package de.barf.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "schedultday")
public class Schedultday {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long schedult_id;
	private String weekday;
	private int week;
	private Long ouchie_id;
	private Long setting_id;
	
	public Schedultday() {
		// TODO Auto-generated constructor stub
	}

	public Schedultday(long schedult_id, String weekday, int week, long ouchie_id, long setting_id) {
		super();
		this.schedult_id = schedult_id;
		this.weekday = weekday;
		this.week = week;
		this.ouchie_id = ouchie_id;
		this.setting_id = setting_id;
	}

	public long getSchedult_id() {
		return schedult_id;
	}

	public void setSchedult_id(long schedult_id) {
		this.schedult_id = schedult_id;
	}

	public String getWeekday() {
		return weekday;
	}

	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}

	public int getWeek() {
		return week;
	}

	public void setWeek(int week) {
		this.week = week;
	}

	public Long getOuchie_id() {
		return ouchie_id;
	}

	public void setOuchie_id(Long ouchie_id) {
		this.ouchie_id = ouchie_id;
	}

	public Long getSetting_id() {
		return setting_id;
	}

	public void setSetting_id(Long setting_id) {
		this.setting_id = setting_id;
	}

	@Override
	public String toString() {
		return "Schedultday [schedult_id=" + schedult_id + ", weekday=" + weekday + ", week=" + week + ", ouchie_id="
				+ ouchie_id + ", setting_id=" + setting_id + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ouchie_id == null) ? 0 : ouchie_id.hashCode());
		result = prime * result + (int) (schedult_id ^ (schedult_id >>> 32));
		result = prime * result + ((setting_id == null) ? 0 : setting_id.hashCode());
		result = prime * result + week;
		result = prime * result + ((weekday == null) ? 0 : weekday.hashCode());
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
		Schedultday other = (Schedultday) obj;
		if (ouchie_id == null) {
			if (other.ouchie_id != null)
				return false;
		} else if (!ouchie_id.equals(other.ouchie_id))
			return false;
		if (schedult_id != other.schedult_id)
			return false;
		if (setting_id == null) {
			if (other.setting_id != null)
				return false;
		} else if (!setting_id.equals(other.setting_id))
			return false;
		if (week != other.week)
			return false;
		if (weekday == null) {
			if (other.weekday != null)
				return false;
		} else if (!weekday.equals(other.weekday))
			return false;
		return true;
	}
	
}
