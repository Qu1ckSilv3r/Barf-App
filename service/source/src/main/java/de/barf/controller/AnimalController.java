package de.barf.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;

import de.barf.model.Animal;
import de.barf.model.Barfuser;
import de.barf.model.Plansettings;
import de.barf.repository.IAnimalService;
import de.barf.repository.IPlansettingsService;

@CrossOrigin(origins = "*")
@RestController
public class AnimalController {
	@Autowired
	private IAnimalService animalService;
	@Autowired
	private IPlansettingsService pService;
	
	//geht
	@GetMapping("/animals")
	public List<Animal> findAll(){
		return animalService.findAll();
	}

	//geht 
	@RequestMapping(value = "/animal/animalOf/{user_id}", method = RequestMethod.GET)
	public List<Animal> findAnimalsOfUser(@PathVariable("user_id") long user_id){		
		return animalService.findByUserId(user_id);
	}
	
	//geht
	@RequestMapping(value = "/animal/{animal_id}", method = RequestMethod.GET)
	public Animal findAnimalById(@PathVariable("animal_id") long animal_id){
		return animalService.findById(animal_id);
	}
	
	//geht
	@PostMapping("/animal/create")
	public Animal createAnimal(@RequestBody Animal dog){
		return animalService.saveAnimal(dog);
	}
	
	//geht
	//wiedergabe der gramm werte nach settingPlan
	@GetMapping("/animal/getSettingsOf/{animal_id}")
	public Map<String, Double> settingsOfAnimal(@PathVariable("animal_id") long animal_id){
		Map<String, Double> feedpart = new HashMap<String, Double>();
		
		Animal animal = animalService.findById(animal_id);
		long setting_id = animal.getSetting_id();
		String aktivity = animal.getAktivity();
		double factor = 0;
		if(aktivity.equals("high")){
			factor = 0.04;
		}
		else if(aktivity.equals("middel")){
			factor = 0.03;
		}
		else{
			factor = 0.02;
		}
		System.out.println(factor);
		//weight in g
		double weight = animal.getWeight() * 1000;
		
		Plansettings settings = pService.findById(setting_id);
		feedpart.put("weight", weight);
		//percentage values in dezimal
		//double factor = settings.getFactor() /100;
		double animal_amount = (double)settings.getAnimal_amount() /100;
		double plant_amount = (double)settings.getPlant_amount() /100;
		//intervall per day der intervall sollte eigentlich auf die Tage bezogen sein, die für die bedarfsdeckung benötigt werden, darum fullfil_demant
		double intervall = settings.getIntervall() *7;
		double fullfill_demant = settings.getFullfil_demant() *7;
		double total_quantity = weight * factor;
		
		double animal_products = total_quantity * animal_amount * fullfill_demant;
		feedpart.put("Muskelfleisch", animal_products * 0.5 / 28);
		feedpart.put("Innerein", animal_products * 0.15);
		feedpart.put("Knochen", animal_products * 0.15);
		feedpart.put("Pansen", animal_products * 0.2); 
		
		double vegetable_products = total_quantity * plant_amount;
		feedpart.put("Gemüse", vegetable_products * 0.75);
		feedpart.put("Obst", vegetable_products * 0.25);
		
		feedpart.put("FettAmTag", (double)settings.getFet_per_day());
		feedpart.put("ProteinAmTag", (double)settings.getProtein_per_day());
		
		feedpart.put("intervall", intervall);
		
		return feedpart;
	}

	//geht
	@PutMapping("/animal/setSettingIDof/{animal_id}")
	public Animal updateSettingId(@PathVariable("animal_id") long animal_id, @RequestBody long setting_id){
		Animal animal = animalService.findById(animal_id);
		animal.setSetting_id(setting_id);
		animalService.saveAnimal(animal);
		return animal;
 	}
	
	//geht
	@PutMapping("/animal/changeBirthday/{animal_id}")
	public Animal changeBirthday(@PathVariable("animal_id")long animal_id, @RequestBody Date birthday){
		Animal animal = animalService.findById(animal_id);
		if (birthday!= null){
			animal.setBirthday(birthday);
		}
		return animalService.saveAnimal(animal);
	}
	
	//geht
	//age sollte gleich in int angegeben werden können
	@PutMapping("/animal/changeAge/{animal_id}")
	public Animal changeAge(@PathVariable("animal_id")long animal_id, @RequestBody double age){
		Animal animal = animalService.findById(animal_id);
		int a = (int)age;
		if (a != 0){
			animal.setAge(a);
		}
		return animalService.saveAnimal(animal);
	}
	
	//geht
	@PutMapping("/animal/changeSpezies/{animal_id}")
	public Animal changeSpezies(@PathVariable("animal_id")long animal_id, @RequestBody String spezies){
		Animal animal = animalService.findById(animal_id);
		if (spezies != null && !spezies.isEmpty()){
			animal.setSpezies(spezies);
		}
		return animalService.saveAnimal(animal);
	}
	
	//geht
	@PutMapping("/animal/changeName/{animal_id}")
	public Animal changeName(@PathVariable("animal_id")long animal_id, @RequestBody String name){
		Animal animal = animalService.findById(animal_id);
		if (name != null && !name.isEmpty()){
			animal.setName(name);
		}
		return animalService.saveAnimal(animal);
	}
	
	//geht
	@PutMapping("/animal/changeWeight/{animal_id}")
	public Animal changeWeight(@PathVariable("animal_id")long animal_id, @RequestBody double weight){
		Animal animal = animalService.findById(animal_id);
		if (weight != 0){
			animal.setWeight(weight);
		}
		return animalService.saveAnimal(animal);
	}
	
	//geht
	@PutMapping("/animal/changeTargetWeight/{animal_id}")
	public Animal changeTargetWeight(@PathVariable("animal_id")long animal_id, @RequestBody double target_weight){
		Animal animal = animalService.findById(animal_id);
		if (target_weight != 0){
			animal.setTargetWeight(target_weight);
		}
		return animalService.saveAnimal(animal);
	}
	
	//geht
	@PutMapping("/animal/changeAktivity/{animal_id}")
	public Animal changeAktivity(@PathVariable("animal_id")long animal_id, @RequestBody String aktivity){
		Animal animal = animalService.findById(animal_id);
		if (aktivity != null && !aktivity.isEmpty()){
			animal.setAktivity(aktivity);
		}
		return animalService.saveAnimal(animal);
	}
	
	//geht
	@DeleteMapping("/animal/delete/{animalID}")
	public void deleteAnimal(@PathVariable("animalID") long animalID){
		animalService.delete(animalID);
	}
}
