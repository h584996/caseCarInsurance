package com.example.demo;

public class InsuranceAgreement {
    private String registrationNumber;
    private Integer insuranceBonus;
    private Integer nationalIdentityNumber;
    private String surName;
    private String lastName;

    public String getRegistrationNumber(){
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber){
        this.registrationNumber = registrationNumber;
    }

    public Integer getInsuranceBonus(){
        return insuranceBonus;
    }

    public void setInsuranceBonus(Integer insuranceBonus){
        this.insuranceBonus = insuranceBonus;
    }

    public Integer getNationalIdentityNumber(){
        return nationalIdentityNumber;
    }

    public void setNationalIdentityNumber(Integer nationalIdentityNumber){
        this.nationalIdentityNumber = nationalIdentityNumber;
    }

    public String getSurName(){
        return surName;
    }

    public void setSurName(String surName){
        this.surName = surName;
    }

    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }
}
