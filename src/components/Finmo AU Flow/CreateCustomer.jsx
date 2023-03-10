import axios from 'axios';
import React, { useState } from 'react';

import { apiKey, signature } from '../../utils/globals.js';

const CreateCustomer = () => {
    const [user, setUser] = useState({
        type: "individual", 
        organization_reference_id: "TRT893820446", 
        individual: {
            first_name: "Ope",
            last_name: "Yinka",
            dob:"1971-11-29",
            email:"testsing1@yhaoo.com",
            identification_type:"DRIVERS_LICENCE",
            identification_custom_type:"WA",
            identification_value:"EA628121",
            country_of_residence:"AU",
            nationality:"NG",
            address_line1:"13 lagos street",
            address_line2:"null",
            address_city:"Victoria Island",
            address_state:"Lagos",
            address_zip_code:"2301",
            address_country:"AU",
            phone_country_code:"+61",
            phone_number:"422879540"            
        }
    });

    const {FirstName, LastName, TransitNumber, InstitutionNumber, email, AccountNumber, AccountHolderName} = user;

    const onChange= (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const registerUser = async () => {
        try {
            const config = {
                headers: {
                    'signature': signature,
                    'key': apiKey
                }
            };

            const res = await axios.post('https://sandboxapi.apaylo.com/sandboxapi.apaylo.com/api/EFT/CreateCustomer', user, config);
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <div>
     <h1>Create Customer</h1>
     <form action="">
        <input type="text" placeholder='First Name' name='FirstName' value={FirstName} onChange={onChange}/>
        <input type="text" placeholder='Last Name' name='LastName' value={LastName} onChange={onChange} />
        <input type="text" placeholder='Transit Number' name='TransitNumber' value={TransitNumber} onChange={onChange} />
        <input type="text" placeholder='Email' name='email' value={email} onChange={onChange} />
        <input type="text" placeholder='Institution Number' name='InstitutionNumber' value={InstitutionNumber} onChange={onChange} />
        <input type="text" placeholder='Account Number' name='AccountNumber' value={AccountNumber} onChange={onChange} />
        <input type="text" placeholder='Account Holder Name' name='AccountHolderName' value={AccountHolderName} onChange={onChange} />
        <button onClick={(e) => {
            e.preventDefault();
            registerUser();
        }}>Register</button>
     </form>
    </div>
  );
};

export default CreateCustomer;