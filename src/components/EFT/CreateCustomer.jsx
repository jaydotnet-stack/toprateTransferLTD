import axios from 'axios';
import React, { useState } from 'react';

import { apiKey, signature } from '../../utils/globals.js';

const CreateCustomer = () => {
    const [user, setUser] = useState({
        email: "", 
        FirstName: "", 
        LastName: "", 
        TransitNumber: "10009", 
        InstitutionNumber: "352", 
        AccountNumber: "", 
        AccountHolderName: "" 
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
     <h1>Create user</h1>
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