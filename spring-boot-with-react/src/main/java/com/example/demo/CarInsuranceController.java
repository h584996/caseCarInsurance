package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.LetterService;
import com.example.demo.Services.SubjectSystem;


@RestController
public class CarInsuranceController {

    @PostMapping(path = "initAgreement")
    public ResponseEntity<CarInsuranceFormResponse> forward(@RequestBody CustomerFormInsuranceAgreement insuranceAgreement ){

        //Opprett avtale
        CustomerFormInsuranceAgreement newInsuranceAgreement = insuranceAgreement;

        //Opprett kunde -> FagSyst
        // ret kundeNR
        SubjectSystem subSys = new SubjectSystem();
        int customerNr = subSys.createCustomer();

        //Opprett avtale -> FagSyst
        // ret avtNR
        int agreementNumber = subSys.createAgreement();

        // Send avtale til Kunde -> BrevService
        // ret status
        LetterService letterService = new LetterService();
        String statusAgreementDeployment = letterService.sendInsuranceAgeementToCustomer();


        //Oppdater status "avtale sendt" -> fagSyst
        //Ret avtaleStatus
        String agreementStatus = subSys.updateAgreement();


        // Returner avtaleNR og status
        CarInsuranceFormResponse formResponse = new CarInsuranceFormResponse(agreementNumber, agreementStatus);

        return new ResponseEntity<CarInsuranceFormResponse>(formResponse, HttpStatus.OK);
    }

    @GetMapping(path = "test2")
    public CustomerFormInsuranceAgreement testFormMapping(@RequestBody CustomerFormInsuranceAgreement insuranceAgreement){
        return insuranceAgreement;
        
    }

}