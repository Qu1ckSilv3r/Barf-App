package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "schedultDay")
public class SchedultDay {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long schedultID;
	private String weekday;
	private int week;
	private long ouchieID;
	private long settingID;
	
	public SchedultDay() {
		// TODO Auto-generated constructor stub
	}

	public SchedultDay(long schedultID, String weekday, int week, long ouchieID, long settingID) {
		super();
		this.schedultID = schedultID;
		this.weekday = weekday;
		this.week = week;
		this.ouchieID = ouchieID;
		this.settingID = settingID;
	}

	public long getSchedultID() {
		return schedultID;
	}

	public void setSchedultID(long schedultID) {
		this.schedultID = schedultID;
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

	public long getOuchieID() {
		return ouchieID;
	}

	public void setOuchieID(long ouchieID) {
		this.ouchieID = ouchieID;
	}

	public long getSettingID() {
		return settingID;
	}

	public void setSettingID(long settingID) {
		this.settingID = settingID;
	}

	@Override
	public String toString() {
		return "SchedultDay [schedultID=" + schedultID + ", weekday=" + weekday + ", week=" + week + ", ouchieID="
				+ ouchieID + ", settingID=" + settingID + "]";
	}
	
}
