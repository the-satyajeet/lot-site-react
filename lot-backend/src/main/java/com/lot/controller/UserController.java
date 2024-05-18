package com.lot.controller;

import com.lot.module.User;
import com.lot.repository.UserRepository;
import com.lot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;



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
}
