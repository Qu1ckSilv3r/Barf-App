package de.barf.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Ouchie;
import de.barf.repository.IOuchieService;

@CrossOrigin(origins = "*")
@RestController
public class OuchieController {
	@Autowired
	private IOuchieService ouchieService;
	
	//geht
	@GetMapping("/Ouchies")
	public List<Ouchie> findAll(){
		return ouchieService.findAll();
	}
	
	//geht nicht. --> Cannot convert from String to Date
	@GetMapping("/Ouchie/onDate/{date}")
	public Ouchie findByDate(@PathVariable("date") Date date){
		return ouchieService.findByDate(date);
	}
	
	//geht
	@GetMapping("/Ouchie/byID/{ouchie_id}")
	public Ouchie findByID(@PathVariable("ouchie_id") long ouchie_id){
		return ouchieService.findById(ouchie_id);
	}
	
	//geht nicht --> Das Datum wird nicht richtig wieder gegeben. Der Monat ändert sich in ARC zu 0, in der DB wird es immer mit Jannuar angelegt. Gleiche einträge speichert er nochmal
	@PostMapping("/Ouchie/create")
	public Ouchie createOuchie(@RequestBody Ouchie ouchie){
		List<Ouchie> set = ouchieService.findAll();
		for(Ouchie o :set){
			if(o.equals(ouchie) == true){
				return o;
			}
		}
		return ouchieService.saveOuchie(ouchie);
	}
}
