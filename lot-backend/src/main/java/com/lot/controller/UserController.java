package com.lot.controller;

import com.lot.module.EventRegister;
import com.lot.module.User;
import com.lot.repository.UserRepository;
import com.lot.service.RegisterEventService;
import com.lot.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private RegisterEventService registerEventService;

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    //Get all user
    @GetMapping("/api/users")
    public List<User> getAllUser(){
        List<User> user = userRepository.findAll();
        return user;
    }

    //Find user using userid
    @GetMapping("/api/users/{userId}")
    public User getUser(@PathVariable("userId") Integer userId) throws Exception {
        User user = userService.findUserById(userId);
        return user;
    }

    //update user
    @PutMapping("/api/users")
    public User updateUser(@RequestHeader("Authorization") String jwt,@RequestBody User user) throws Exception {
        User getUser = userService.findUserByJwt(jwt);
        User updateUser = userService.updateUser(user,getUser.getUserId());
        return updateUser;
    }

    //Find user by emailid
    /*@GetMapping("/api/users")
    public User getEmail(@RequestHeader("Authorization") String jwt){
        User user = userService.findUserByJwt(jwt);
        User getEmail = userService.findUserByEmail(user.getEmail());
        return getEmail;
    }*/

    //Search user as per user first name , last name , emailId
    @GetMapping("/api/users/search")
    public List<User> searchUser(@RequestParam("search") String query){
        List<User> users = userService.searchUser(query);
        return users;
    }

    //Get user from jwt token
    @GetMapping("/api/users/profile")
    public User getUserFromToken(@RequestHeader("Authorization") String jwt){
        System.out.println("JWT---"+jwt);
        User user= userService.findUserByJwt(jwt);
        return user;
    }

    @PostMapping(value = "/api/users/event-register", consumes = "multipart/form-data")
    public ResponseEntity<EventRegister> registerEvent(@ModelAttribute EventRegister eventRegister, @RequestHeader("Authorization") String jwt, @RequestParam("image") MultipartFile image) throws Exception {
        log.info("Registering event for user with JWT: {}", jwt);
        log.info("File received: {}", image.getOriginalFilename());
        System.out.println("File received: {"+image.getOriginalFilename()+"}");
        User user = userService.findUserByJwt(jwt);
        EventRegister eventReg=registerEventService.eventregister(eventRegister,user.getUserId(),image);
        return  new ResponseEntity<>(eventReg, HttpStatus.OK);
    }
}
