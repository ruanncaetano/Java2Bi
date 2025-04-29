package unoeste.fipp.ativooperante_be.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unoeste.fipp.ativooperante_be.entities.Feedback;
import unoeste.fipp.ativooperante_be.entities.Tipo;
import unoeste.fipp.ativooperante_be.repositories.FeedBackRepository;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedBackRepository feedbackRepository;


    public List<Feedback> getAll() {
        return feedbackRepository.findAll();
    }
    public List<Feedback> getAllBy_den_id(int cod) {
        return feedbackRepository.findAllById();
    }
}
