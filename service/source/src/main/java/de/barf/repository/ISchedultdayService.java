package de.barf.repository;

import java.util.List;

import de.barf.model.Schedultday;

public interface ISchedultdayService {

	List<Schedultday> findAll();
	Schedultday findById(long schedult_id);
	Schedultday saveSchedultday (Schedultday schadultday);
	void delete(long schedult_id);
	
}
