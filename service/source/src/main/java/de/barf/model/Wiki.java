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
	private long wikiID;
	private String titel;
	private String artikel;
	
	public Wiki() {
		
	}
	public Wiki(long wikiID, String titel, String artikel) {
		super();
		this.wikiID = wikiID;
		this.titel = titel;
		this.artikel = artikel;
	}
	public long getWikiID() {
		return wikiID;
	}
	public void setWikiID(long wikiID) {
		this.wikiID = wikiID;
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
		return "Wiki [wikiID=" + wikiID + ", titel=" + titel + ", artikel=" + artikel + "]";
	}
	
}