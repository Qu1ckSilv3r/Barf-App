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

import de.barf.model.Feedlist;
import de.barf.repository.IFeedlistService;

@CrossOrigin(origins = "*")
@RestController
public class FeedlistController {
	@Autowired
	private IFeedlistService feedlistService;
	
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
	@PostMapping("Feedlist/create")
	public Feedlist create(@RequestBody Feedlist feedlist){
		return feedlistService.saveFeedlist(feedlist);
	}
	
	//geht
	@DeleteMapping("Feedlist/delete/{feedlist_id}")
	public void delete(@PathVariable("feedlist_id") long feedlist_id){
		feedlistService.delete(feedlist_id);
	}
}
