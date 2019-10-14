package de.barf.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import de.barf.model.Barfuser;

@Repository
public interface BarfuserRepository extends CrudRepository<Barfuser, Long>{
	@Query("SELECT x FROM Barfuser AS x WHERE username LIKE :name")
	Barfuser findByName(@Param("name")String name);
	
	//nicht getestet, aufruf darunter ist getestet und läuft
//	@Query("SELECT user_id FROM Barfuser AS x WHERE username LIKE :name AND password LIKE :password")
//	Barfuser findByNameAndPassword(@Param("name") String name, @Param("password") String password);
	
//	gibt den ganzen user zurück, benötigt wird ab hier eigentlich nur die User_id
	@Query("SELECT x FROM Barfuser AS x WHERE username LIKE :name AND password LIKE :password")
	Barfuser findByNameAndPassword(@Param("name") String name, @Param("password") String password);  
}
//erweiterbar durch bestimmte suchkriterien (Zeile 12 und 13)
//zeile 12 ist Spring SQL (JPQL)
//curd liefert bereits Methoden create read update delete
