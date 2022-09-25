import React from 'react'
import InsuranceForm from './InsuranceForm'

const CarInsurance = () => (
    <div className='content'>
        <h1>Kjøp Bilforsikring</h1>
        <p>
            Det er fire forskjellige forsikringer å velge mellom.
            Ansvarsforsikring er lovpålagt om kjøretøyet er registrert og skal brukes på veien.
            I tillegg kan du utvide forsikringen avhengig av hvor gammel bilden din er og hvordan du bruker den.
        </p>
        <InsuranceForm/>
    </div>
)

export default CarInsurance