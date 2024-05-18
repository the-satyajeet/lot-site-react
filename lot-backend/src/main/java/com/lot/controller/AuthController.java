package com.lot.controller;

import com.lot.config.JwtProvider;
import com.lot.module.User;
import com.lot.repository.UserRepository;
import com.lot.request.LoginRequest;
import com.lot.response.AuthResponse;
import com.lot.service.CustomUserDetailService;
import com.lot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/lot")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @PostMapping("/signup")
    public AuthResponse createUser(@RequestBody User user) throws Exception {
        User user1 = userRepository.findByEmail(user.getEmail());

        if(user1!=null){
            throw new Exception("User is already created with this email id : "+user1 );
        }

        if (!user.getPassword().equals(user.getConpassword())) {
            System.out.println(user.getPassword());
            System.out.println(user.getConpassword());
            throw new Exception("Password and confirmation password do not match");
        }

        System.out.println(user.getPassword());
        System.out.println(user.getConpassword());
        System.out.println(user.getName());
        System.out.println(user.getUserName());

        User newUser = new User();
        newUser.setName(user.getName());
        newUser.setUserName(user.getUserName());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setConpassword(passwordEncoder.encode(user.getConpassword()));


        User createdUser = userRepository.save(newUser);

            Authentication authentication = new UsernamePasswordAuthenticationToken(newUser.getEmail(),newUser.getPassword());
            String token= JwtProvider.generateToken(authentication);
            AuthResponse response = new AuthResponse(token,"Register Successfully ");
            return response;

    }

    @PostMapping("/signin")
    public AuthResponse signin(@RequestBody LoginRequest loginrequest) throws Exception {
        Authentication authentication = authentication(loginrequest.getEmail(), loginrequest.getPassword());
        String token = JwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse(token, "Singin successfully");

        return authResponse;
    }

    private Authentication authentication(String email, String password) throws Exception {

        UserDetails userDetails = customUserDetailService.loadUserByUsername(email);

        if (userDetails == null) {
            throw new Exception("Invalid credentials ");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Password Doesn't match !!");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
