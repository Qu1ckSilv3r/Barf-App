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
	
}
