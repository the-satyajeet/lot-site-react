package com.lot.service;

import com.lot.config.JwtProvider;
import com.lot.module.User;
import com.lot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    /*@Override
    public User registerUser(User user) throws Exception {

        User newuser=new User();

        //verify that pass and con pass is matching
        newuser.setUserName(user.getUserName());
        newuser.setName(user.getName());
        newuser.setEmail(user.getEmail());


        if(!Objects.equals(newuser.getPassword(), newuser.getConpassword())) {
            newuser.setPassword(user.getPassword());
            newuser.setConpassword(user.getConpassword());

            User createUser = userRepository.save(newuser);
            return createUser;
        }
        else {
            throw new Exception("Password and Confirm Password is not matching!! Please Try again");
        }
    }*/

    @Override
    public User registerUser(User user) throws Exception {
        // Check if the password and confirm password match
        if (!Objects.equals(user.getPassword(), user.getConpassword())) {
            throw new Exception("Password and Confirm Password do not match. Please try again.");
        }
        else {
            // If the passwords match, proceed to create the user
            User newUser = new User();
            newUser.setUserName(user.getUserName());
            newUser.setName(user.getName());
            newUser.setEmail(user.getEmail());
            newUser.setPassword(user.getPassword());
            newUser.setConpassword(user.getConpassword());

            // Save the new user
            User createdUser = userRepository.save(newUser);
            return createdUser;
        }
    }



    @Override
    public User findUserById(Integer userId) throws Exception {
        Optional<User> user=userRepository.findById(userId);

        if(user.isPresent()){
            return user.get();
        }
        throw new Exception("User not present with this user id : "+userId);
    }

    @Override
    public User findUserByEmail(String email) {
        User findByEmail=userRepository.findByEmail(email);
        return findByEmail;
    }

    @Override
    public User updateUser(User user, Integer userId) throws Exception {
        Optional<User> updateUser=userRepository.findById(userId);

        if(updateUser.isPresent()){
            User oldUser=updateUser.get();
            oldUser.setUserName(user.getUserName());
            oldUser.setName(user.getName());
            oldUser.setEmail(user.getEmail());
            oldUser.setPassword(user.getPassword());
            oldUser.setConpassword(user.getConpassword());
            return this.userRepository.save(oldUser);
        }else{
            throw new Exception("User not found with ID "+userId);
        }

    }

    @Override
    public List<User> searchUser(String query) {

        return userRepository.searchUser(query);
    }

    @Override
    public User findUserByJwt(String token) {
        String email = JwtProvider.emailFromJwtToken(token);
        User user = userRepository.findByEmail(email);
        return user;
    }


}
