package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CarInsuranceController {

    @PostMapping(path = "carInsurance")
    public ResponseEntity forward(@RequestBody InsuranceAgreement insuranceAgreement ){
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "test2")
    public InsuranceAgreement testFormMapping(@RequestBody InsuranceAgreement insuranceAgreement){
        return insuranceAgreement;
        
    }

}