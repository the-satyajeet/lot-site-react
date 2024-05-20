package com.lot.service;

import com.lot.module.EventRegister;
import org.springframework.web.multipart.MultipartFile;

public interface RegisterEventService {

    public EventRegister eventregister(EventRegister eventRegister, Integer userId,MultipartFile image) throws Exception;
}
