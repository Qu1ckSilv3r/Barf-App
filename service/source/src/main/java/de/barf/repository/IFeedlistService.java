package de.barf.repository;

import java.util.List;

import de.barf.model.Feedlist;

public interface IFeedlistService {

	List<Feedlist> findAll();
	Feedlist findById (long feed_part_id);
	List<Feedlist> findBySchedult_id(long schedult_id);
	Feedlist saveFeedlist (Feedlist feedlist);
	void delete (long feed_part_id);
	
}
