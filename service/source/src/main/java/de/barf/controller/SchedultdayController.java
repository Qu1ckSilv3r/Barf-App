package de.barf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.barf.model.Schedultday;
import de.barf.repository.ISchedultdayService;

@CrossOrigin(origins = "*")
@RestController
public class SchedultdayController {
	@Autowired 
	private ISchedultdayService schedultdayService;
	
	//geht
	@GetMapping("/Schedultdays")
	public List<Schedultday> findAll(){
		return schedultdayService.findAll();
	}
	
	//geht
	@GetMapping("/Schedultday/{schedult_id}")
	public Schedultday findById(@PathVariable("schedult_id") long schedult_id){
		return schedultdayService.findById(schedult_id);
	}
	
	//geht
	//evtl sollte die setting_id an die feedlist?
	//ouchie wir derstmal nicht genutzt --> raus nehmen
	@PostMapping("/Schedultday/create")
	public Schedultday createSchedultday(@RequestBody Schedultday schedultday){
		return schedultdayService.saveSchedultday(schedultday);
	}
	
	//geht
	@DeleteMapping("/Schedultday/delete/{schedult_id}")
	public void delete (@PathVariable("schedult_id") long schedult_id){
		schedultdayService.delete(schedult_id);
	}
}
