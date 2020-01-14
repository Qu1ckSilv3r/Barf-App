package de.barf.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import de.barf.model.Components;
import de.barf.model.Feedlist;
import de.barf.repository.IComponentService;
import de.barf.repository.IFeedlistService;

@CrossOrigin(origins = "*")
@RestController
public class FeedlistController {
	@Autowired
	private IFeedlistService feedlistService;
	@Autowired
	private IComponentService cService;
	
	//geht
	@RequestMapping("/Feedlists")
	public List<Feedlist> findAll(){
		return feedlistService.findAll();
	}
	
	//geht
	@RequestMapping("/Feedlist/byID/{feedlist_id}")
	public Feedlist findById(@PathVariable("feedlist_id") long feedlist_id){
		return feedlistService.findById(feedlist_id);
	}
	
	//geht
	@RequestMapping("/Feedlist/bySchedult_id/{schedult_id}")
	public List<Feedlist> findBySchedult_id(@PathVariable("schedult_id") long schedult_id){
		return feedlistService.findBySchedult_id(schedult_id);
	}
	
	//geht
	@RequestMapping("/Feedlist/byAnimal_id/{animal_id}")
	public List<Feedlist> findByAnimal_id(@PathVariable("animal_id") long animal_id){
		return feedlistService.findByAnimal_id(animal_id);
	}
	
	//geht
	@RequestMapping("/Feedlist/byAnimal_idAndSchedult_id/{animal_id}/{schedult_id}")
	public List<Feedlist> findByAnimal_idAndSchedult_id(@PathVariable("animal_id") long animal_id, @PathVariable("schedult_id") long schedult_id){
		return feedlistService.findByAnimal_idAndSchedult_id(animal_id, schedult_id);
	}
	
	//geht
	@PostMapping("/Feedlist/create")
	public List<Feedlist> create(@RequestBody GenerateFeedlistDto credentials){

		Map<String, List<Long>> componentsList = credentials.getComponents();		 
		Map<String, Double> settings = credentials.getSettingsOfAnimal();
		List<Feedlist> forAnimal = new ArrayList<>();
		Random random = new Random();
		
		double intervall = settings.get("intervall");
		double fullfillDemant = settings.get("fullfillDemant");
		System.out.println(intervall);
		
		for(int i = 0; i < intervall; i ++){
			int e = i + 1;
			componentsList.entrySet().stream().forEach(possibleComponent ->{
				Feedlist feedlist = new Feedlist();
				feedlist.setSchedult_id(e);
				double animal_id = settings.get("AnimalID");
				feedlist.setAnimal_id((long)animal_id);
				String key = possibleComponent.getKey();
				List<Long> componentIDs = possibleComponent.getValue();
				long id = componentIDs.get(random.nextInt(componentIDs.size()));
				Components fullComponent = cService.findById(id);
				String feed_part = fullComponent.getName();
				feedlist.setFeed_part(feed_part);
				String categorie = fullComponent.getCategorie();
				feedlist.setCategorie(categorie);
				int amount = (int) Math.round(settings.get(key));
				feedlist.setAmount(amount);
				feedlistService.saveFeedlist(feedlist);
				forAnimal.add(feedlist);
			});			
		}
		return forAnimal;
	}
	
	//geht
	@DeleteMapping("/Feedlist/delete/{feedlist_id}")
	public void delete(@PathVariable("feedlist_id") long feedlist_id){
		feedlistService.delete(feedlist_id);
	}
}
