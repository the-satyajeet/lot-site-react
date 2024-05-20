package com.lot.module;

import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.logging.FileHandler;

@Entity
public class EventRegister {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer registerId;

    @ManyToOne
    private User user;

    private String fullName;
    private String gender;
    private String registrationNumber;
    private String course;
    private String contactNumber;
    private String whatsAppNumber;
    private String email;
    private String batch;
    private String stay;
    private String ad;
    private String roles;
    private String file;
    private String selfDefinition;
    private boolean enableWhatsApp;

    @Transient
    private MultipartFile imageFile;

    public EventRegister(Integer registerId, User user, String fullName, String gender, String registrationNumber, String course, String contactNumber, String whatsAppNumber, String email, String batch, String stay, String ad, String roles, String file, String selfDefinition, boolean enableWhatsApp, MultipartFile imageFile) {
        this.registerId = registerId;
        this.user = user;
        this.fullName = fullName;
        this.gender = gender;
        this.registrationNumber = registrationNumber;
        this.course = course;
        this.contactNumber = contactNumber;
        this.whatsAppNumber = whatsAppNumber;
        this.email = email;
        this.batch = batch;
        this.stay = stay;
        this.ad = ad;
        this.roles = roles;
        this.file = file;
        this.selfDefinition = selfDefinition;
        this.enableWhatsApp = enableWhatsApp;
        this.imageFile = imageFile;
    }

    public EventRegister() {
    }

    public Integer getRegisterId() {
        return registerId;
    }

    public void setRegisterId(Integer registerId) {
        this.registerId = registerId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getWhatsAppNumber() {
        return whatsAppNumber;
    }

    public void setWhatsAppNumber(String whatsAppNumber) {
        this.whatsAppNumber = whatsAppNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public String getStay() {
        return stay;
    }

    public void setStay(String stay) {
        this.stay = stay;
    }

    public String getAd() {
        return ad;
    }

    public void setAd(String ad) {
        this.ad = ad;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getSelfDefinition() {
        return selfDefinition;
    }

    public void setSelfDefinition(String selfDefinition) {
        this.selfDefinition = selfDefinition;
    }

    public boolean isEnableWhatsApp() {
        return enableWhatsApp;
    }

    public void setEnableWhatsApp(boolean enableWhatsApp) {
        this.enableWhatsApp = enableWhatsApp;
    }

    public MultipartFile getImageFile() {
        return imageFile;
    }

    public void setImageFile(MultipartFile imageFile) {
        this.imageFile = imageFile;
    }

    @Override
    public String toString() {
        return "EventRegister{" +
                "registerId=" + registerId +
                ", user=" + user +
                ", fullName='" + fullName + '\'' +
                ", gender='" + gender + '\'' +
                ", registrationNumber='" + registrationNumber + '\'' +
                ", course='" + course + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                ", whatsAppNumber='" + whatsAppNumber + '\'' +
                ", email='" + email + '\'' +
                ", batch='" + batch + '\'' +
                ", stay='" + stay + '\'' +
                ", ad='" + ad + '\'' +
                ", roles='" + roles + '\'' +
                ", file='" + file + '\'' +
                ", selfDefinition='" + selfDefinition + '\'' +
                ", enableWhatsApp=" + enableWhatsApp +
                ", imageFile=" + imageFile +
                '}';
    }
}
