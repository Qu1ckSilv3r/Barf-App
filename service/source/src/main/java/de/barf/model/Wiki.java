package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "wiki")
public class Wiki {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long wiki_id;
	private String titel;
	private String artikel;
	
	public Wiki() {
		
	}
	public Wiki(long wiki_id, String titel, String artikel) {
		super();
		this.wiki_id = wiki_id;
		this.titel = titel;
		this.artikel = artikel;
	}
	public long getWiki_id() {
		return wiki_id;
	}
	public void setWiki_id(long wiki_id) {
		this.wiki_id = wiki_id;
	}
	public String getTitel() {
		return titel;
	}
	public void setTitel(String titel) {
		this.titel = titel;
	}
	public String getArtikel() {
		return artikel;
	}
	public void setArtikel(String artikel) {
		this.artikel = artikel;
	}
	@Override
	public String toString() {
		return "Wiki [wiki_id=" + wiki_id + ", titel=" + titel + ", artikel=" + artikel + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((artikel == null) ? 0 : artikel.hashCode());
		result = prime * result + ((titel == null) ? 0 : titel.hashCode());
		result = prime * result + (int) (wiki_id ^ (wiki_id >>> 32));
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
		Wiki other = (Wiki) obj;
		if (artikel == null) {
			if (other.artikel != null)
				return false;
		} else if (!artikel.equals(other.artikel))
			return false;
		if (titel == null) {
			if (other.titel != null)
				return false;
		} else if (!titel.equals(other.titel))
			return false;
		if (wiki_id != other.wiki_id)
			return false;
		return true;
	}
	
}
