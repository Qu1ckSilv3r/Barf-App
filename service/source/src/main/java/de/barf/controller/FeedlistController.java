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
	@GetMapping("/Feedlists")
	public List<Feedlist> findAll(){
		return feedlistService.findAll();
	}
	
	//geht
	@GetMapping("/Feedlist/byID/{feedlist_id}")
	public Feedlist findById(@PathVariable("feedlist_id") long feedlist_id){
		return feedlistService.findById(feedlist_id);
	}
	
	//geht
	@GetMapping("/Feedlist/bySchedult_id/{schedult_id}")
	public List<Feedlist> findBySchedult_id(@PathVariable("schedult_id") long schedult_id){
		return feedlistService.findBySchedult_id(schedult_id);
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
				String key = possibleComponent.getKey();
				List<Long> componentIDs = possibleComponent.getValue();
				long id = componentIDs.get(random.nextInt(componentIDs.size()));
				Components fullComponent = cService.findById(id);
				String feed_part = fullComponent.getName();
				feedlist.setFeed_part(feed_part);
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
