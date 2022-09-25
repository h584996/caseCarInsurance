import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './index.css'




const InsuranceForm = () => {
    
    const [validated, setValidated] = useState(false);
        
    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return(
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formRegistrationNumber'>
            <Form.Label>Bilens registreringsnummer</Form.Label>
            <Form.Control
                required
                type='number'
                placeholder='Feks: AB12345'
                pattern=''/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formInsuranceBonus'>
            <Form.Label>Din bonus</Form.Label>
            {/*TODO: Add correct type*/}
            <Form.Control
                required
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
                required
                type='number'
                placeholder='11 siffer'
                pattern='[0-9]{11}'/>
        </Form.Group>
        <Row className='mb-3'>
            <Form.Group as={Col} controlId='formSurName'>
                <Form.Label>Fornavn</Form.Label>
                <Form.Control
                    required
                    type='text'/>
            </Form.Group>

            <Form.Group as={Col} controlId='formLastName'>
                <Form.Label>Etternavn</Form.Label>
                <Form.Control
                    required
                    type='text'/>
            </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>E-post</Form.Label>
            <Form.Control
                required
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
    )
}

export default InsuranceForm