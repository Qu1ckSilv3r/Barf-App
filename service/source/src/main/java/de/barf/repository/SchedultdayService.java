package de.barf.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Schedultday;

@Component
public class SchedultdayService implements ISchedultdayService{
	@Autowired
	private SchedultdayRepository sRepository;

	@Override
	public List<Schedultday> findAll() {
		return (List<Schedultday>) sRepository.findAll();
	}

	@Override
	public Schedultday findById(long schedult_id) {
		return sRepository.findById(schedult_id).get();
	}

	@Override
	public Schedultday saveSchedultday(Schedultday schedultday) {
		if(schedultday.getSetting_id() == null){
			schedultday.setSetting_id(1L);
		}
		return sRepository.save(schedultday);
	}

	@Override
	public void delete(long schedult_id) {
		sRepository.deleteById(schedult_id);	
	}
	
	
}
