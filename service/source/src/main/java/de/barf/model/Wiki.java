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
	
}
