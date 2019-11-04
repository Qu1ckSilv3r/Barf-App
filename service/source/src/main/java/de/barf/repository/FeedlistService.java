package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Feedlist;

@Component
public class FeedlistService implements IFeedlistService{
	@Autowired
	private FeedlistRepository fRepository;

	//geht
	@Override
	public List<Feedlist> findAll() {
		return (List<Feedlist>) fRepository.findAll();
	}

	//geht
	@Override
	public Feedlist findById(long feed_part_id) {
		return fRepository.findById(feed_part_id).get();
	}	

	//geht
	@Override
	public List<Feedlist> findBySchedult_id(long schedult_id) {
		return fRepository.findBySchedult_id(schedult_id);
	}

	//geht nicht, liest die daten nicht aus
	@Override
	public Feedlist saveFeedlist(Feedlist feedlist) {
		System.out.println(feedlist.getFeed_part());
		System.out.println(feedlist.getSchedult_id());
		System.out.println(feedlist.getAmount());
		return fRepository.save(feedlist);
	}

	//geht
	@Override
	public void delete(long feed_part_id) {
		fRepository.deleteById(feed_part_id);
	}
	
}
