import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './index.css'

// Use direct import to reduce the amount of code sendt to the client

const InsuranceForm = () => {
    
    const [agreementSent, setAgreementSent] = useState(false);
    const [agreementResponse, setAgreementResponse] = useState({});


    const sendInsuranceForm = (formData) => {

        fetch("/initAgreement", {
            method:'POST',
            body:formData
        }).then((response) => {
            setAgreementSent(true);
            setAgreementResponse({
                agreementNumber: response.agreementNumber,
                agreementStatus: response.agreementStatus
            });
        });
    };


    if(agreementSent){
        return(
            <div>
                <h1>Vi har nå sendt deg en avtale</h1>
                <h2>Avtalenummer: {agreementResponse.agreementNumber}</h2>
                <h2>Status på avale: {agreementResponse.agreementStatus}</h2>
            </div>
        );
    }else {

        return(
            <Form onSubmit={sendInsuranceForm}>
                <Form.Group className='mb-3' controlId='formRegistrationNumber'>
                    <Form.Label>Bilens registreringsnummer</Form.Label>
                    <Form.Control 
                        type='number'
                        placeholder='Feks: AB 12345'/>
                </Form.Group>
    
                <Form.Group className='mb-3' controlId='formInsuranceBonus'>
                    <Form.Label>Din bonus</Form.Label>
                    {/*TODO: Add correct type*/}
                    <Form.Control
                        type='number'
                        placeholder='Placeholder'/>
                    <Form.Text>
                        Har du ikke oppspart bonus?
                        Alle våre kunder starter med x% i oppstartsbonus!
                    </Form.Text>
                </Form.Group>
    
                <Form.Group className='mb-3' controlId='formNationalIdentityNumber'>
                    <Form.Label>Fødselsnummer</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='11 siffer'/>
                </Form.Group>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formSurName'>
                        <Form.Label>Fornavn</Form.Label>
                        <Form.Control
                            type='text'/>
                    </Form.Group>
    
                    <Form.Group as={Col} controlId='formLastName'>
                        <Form.Label>Etternavn</Form.Label>
                        <Form.Control
                            type='text'/>
                    </Form.Group>
                </Row>
    
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>E-post</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='test@gmail.com'/>
                    <Form.Text>
                        
                    </Form.Text>
                </Form.Group>
    
                <Button variant='dark' type=''>
                    Kjøp
                </Button>
                <Button variant='outline-dark' type='reset'>
                    Avbryt
                </Button>
            </Form>
    );
    }

}

export default InsuranceForm