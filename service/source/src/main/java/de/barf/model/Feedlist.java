package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feedlist")
public class Feedlist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long feed_part_id;
	private String feed_part;
	private long schedult_id;
	private int amount;
	
	public Feedlist() {
		// TODO Auto-generated constructor stub
	}

	public Feedlist(long feed_part_id, String feed_part, long schedult_id, int amount) {
		super();
		this.feed_part_id = feed_part_id;
		this.feed_part = feed_part;
		this.schedult_id = schedult_id;
		this.amount = amount;
	}

	public long getFeed_part_id() {
		return feed_part_id;
	}

	public void setFeed_part_id(long feed_part_id) {
		this.feed_part_id = feed_part_id;
	}

	public String getFeed_part() {
		return feed_part;
	}

	public void setFeed_part(String feed_part) {
		this.feed_part = feed_part;
	}

	public long getSchedult_id() {
		return schedult_id;
	}

	public void setSchedult_id(long schedult_id) {
		this.schedult_id = schedult_id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Feedlist [feed_part_id=" + feed_part_id + ", feed_part=" + feed_part + ", schedult_id=" + schedult_id
				+ ", amount=" + amount + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(amount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((feed_part == null) ? 0 : feed_part.hashCode());
		result = prime * result + (int) (feed_part_id ^ (feed_part_id >>> 32));
		result = prime * result + (int) (schedult_id ^ (schedult_id >>> 32));
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
		Feedlist other = (Feedlist) obj;
		if (Double.doubleToLongBits(amount) != Double.doubleToLongBits(other.amount))
			return false;
		if (feed_part == null) {
			if (other.feed_part != null)
				return false;
		} else if (!feed_part.equals(other.feed_part))
			return false;
		if (feed_part_id != other.feed_part_id)
			return false;
		if (schedult_id != other.schedult_id)
			return false;
		return true;
	}
	
	
}