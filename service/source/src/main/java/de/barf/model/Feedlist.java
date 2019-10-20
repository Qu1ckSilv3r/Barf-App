//package de.barf.model;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "feedlist")
//public class Feedlist {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private String feed_part;
//	private long schedult_id;
//	private int amount;
//	
//	public Feedlist() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public Feedlist(String feed_part, long schedult_id, int amount) {
//		super();
//		this.feed_part = feed_part;
//		this.schedult_id = schedult_id;
//		this.amount = amount;
//	}
//
//	public String getFeed_part() {
//		return feed_part;
//	}
//
//	public void setFeed_part(String feed_part) {
//		this.feed_part = feed_part;
//	}
//
//	public long getSchedult_id() {
//		return schedult_id;
//	}
//
//	public void setSchedult_id(long schedult_id) {
//		this.schedult_id = schedult_id;
//	}
//
//	public int getAmount() {
//		return amount;
//	}
//
//	public void setAmount(int amount) {
//		this.amount = amount;
//	}
//	@Override
//	public String toString() {
//		return "Feedlist [feed_part=" + feed_part + ", schedult_id=" + schedult_id + ", amount=" + amount + "]";
//	}
//}
////geht so nicht, siehe Nuriritions PK feedPart, schedultID
