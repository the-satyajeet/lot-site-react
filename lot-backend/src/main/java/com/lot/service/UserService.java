package com.lot.service;

import com.lot.module.User;

import java.util.List;

public interface UserService {

    public User registerUser(User user) throws Exception;

    public User findUserById(Integer userId) throws Exception;

    public User findUserByEmail(String email);

    public User updateUser(User user,Integer userId) throws Exception;

    public List<User> searchUser(String query);

    public User findUserByJwt(String token);
}
