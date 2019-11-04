package de.barf.repository;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.barf.model.Ouchie;

@Component
public class OuchieService implements IOuchieService{
	@Autowired
	private OuchieRepository oRepository;

	@Override
	public List<Ouchie> findAll() {
		return (List<Ouchie>) oRepository.findAll();
	}

	@Override
	public Ouchie findByDate(Date date) {
		return oRepository.findByDate(date);
	}

	@Override
	public Ouchie findById(long ouchie_id) {
		return oRepository.findById(ouchie_id).get();
	}

	@Override
	public Ouchie saveOuchie(Ouchie ouchie) {
		return oRepository.save(ouchie);
	}

	@Override
	public void delete(long ouchie_id) {
		oRepository.deleteById(ouchie_id);	
	}
	
	
}
