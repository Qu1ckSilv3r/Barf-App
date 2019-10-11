//package de.barf.model;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "feedList")
//public class FeedList {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private String feedPart;
//	private long schedultID;
//	private int amount;
//	
//	public FeedList() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public FeedList(String feedPart, long schedultID, int amount) {
//		super();
//		this.feedPart = feedPart;
//		this.schedultID = schedultID;
//		this.amount = amount;
//	}
//
//	public String getFeedPart() {
//		return feedPart;
//	}
//
//	public void setFeedPart(String feedPart) {
//		this.feedPart = feedPart;
//	}
//
//	public long getSchedultID() {
//		return schedultID;
//	}
//
//	public void setSchedultID(long schedultID) {
//		this.schedultID = schedultID;
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
//		return "FeedList [feedPart=" + feedPart + ", schedultID=" + schedultID + ", amount=" + amount + "]";
//	}
//}
////geht so nicht, siehe Nuriritions PK feedPart, schedultID
