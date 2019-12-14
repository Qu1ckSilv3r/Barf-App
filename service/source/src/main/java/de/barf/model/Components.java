package de.barf.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "component")
public class Components {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long component_id;
	private String categorie;
	private String animal_sort;
	private String name;
	private String info;
	private long user_id;
	private Long wiki_id;
	
	public Components() {
		// TODO Auto-generated constructor stub
	}

	public Components(long component_id, String categorie, String animal_sort, String name, String info, long user_id, Long wiki_id) {
		super();
		this.component_id = component_id;
		this.categorie = categorie;
		this.animal_sort = animal_sort;
		this.name = name;
		this.info = info;
		this.user_id = user_id;
		this.wiki_id = wiki_id;
	}
	
	public long getComponent_id() {
		return component_id;
	}

	public void setComponent_id(long component_id) {
		this.component_id = component_id;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getAnimal_sort() {
		return animal_sort;
	}

	public void setAnimal_sort(String animal_sort) {
		this.animal_sort = animal_sort;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public Long getWiki_id() {
		return wiki_id;
	}

	public void setWiki_id(Long wiki_id) {
		this.wiki_id = wiki_id;
	}
	@Override
	public String toString() {
		return "Component [component_id=" + component_id + ", categorie=" + categorie + ", animal_sort=" + animal_sort
				+ ", name=" + name + ", info=" + info + ", user_id=" + user_id + ", wiki_id=" + wiki_id + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((animal_sort == null) ? 0 : animal_sort.hashCode());
		result = prime * result + ((categorie == null) ? 0 : categorie.hashCode());
		result = prime * result + (int) (component_id ^ (component_id >>> 32));
		result = prime * result + ((info == null) ? 0 : info.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + (int) (user_id ^ (user_id >>> 32));
		result = prime * result + ((wiki_id == null) ? 0 : wiki_id.hashCode());
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
		Components other = (Components) obj;
		if (animal_sort == null) {
			if (other.animal_sort != null)
				return false;
		} else if (!animal_sort.equals(other.animal_sort))
			return false;
		if (categorie == null) {
			if (other.categorie != null)
				return false;
		} else if (!categorie.equals(other.categorie))
			return false;
		if (component_id != other.component_id)
			return false;
		if (info == null) {
			if (other.info != null)
				return false;
		} else if (!info.equals(other.info))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (user_id != other.user_id)
			return false;
		if (wiki_id == null) {
			if (other.wiki_id != null)
				return false;
		} else if (!wiki_id.equals(other.wiki_id))
			return false;
		return true;
	}
	
}
