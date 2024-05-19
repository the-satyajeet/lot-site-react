package com.lot.service;

import com.lot.module.EventRegister;
import com.lot.module.User;
import com.lot.repository.EvenRepository;
import com.lot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class RegisterEventServiceImplementation implements RegisterEventService{

@Autowired
public EvenRepository evenRepository;

@Autowired
public UserService userService;


    @Override
    public EventRegister eventregister(EventRegister eventRegister, Integer userId,MultipartFile image) throws Exception {

        User user=userService.findUserById(userId);

        EventRegister eventReg = new EventRegister();
        eventReg.setFullName(eventRegister.getFullName());
        eventReg.setGender(eventRegister.getGender());
        eventReg.setRegistrationNumber(eventRegister.getRegistrationNumber());
        eventReg.setCourse(eventRegister.getCourse());
        eventReg.setContactNumber(eventRegister.getContactNumber());
        eventReg.setWhatsAppNumber(eventRegister.getWhatsAppNumber());
        eventReg.setEmail(eventRegister.getEmail());
        eventReg.setBatch(eventRegister.getBatch());
        eventReg.setStay(eventRegister.getStay());
        eventReg.setAd(eventRegister.getAd());
        eventReg.setRoles(eventRegister.getRoles());
        eventReg.setSelfDefinition(eventRegister.getSelfDefinition());
        eventReg.setEnableWhatsApp(eventRegister.isEnableWhatsApp());
        eventReg.setUser(user);

        //File details
        if(image !=null && !image.isEmpty()) {
            String name = image.getOriginalFilename();
            Path filePath=Paths.get("src/main/resources/static/image/",name);
            Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            eventReg.setFile(name);
        }
        else {
            System.out.println("File is empty");
            //contact.setImage("contact.png");
        }

        return evenRepository.save(eventReg);
    }
}
