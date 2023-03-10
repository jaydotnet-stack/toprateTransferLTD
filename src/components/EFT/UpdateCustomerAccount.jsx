import axios from 'axios';
import React, { useState } from 'react';

// import { apiKey, signature } from '../utils/globals.js';
import { apiKey, signature } from '../../utils/globals.js';

const UpdateCustomerAccount = () => {
    const [user, setUser] = useState({
        CustomerAccountId: "2638", 
        CustomerNumber: "10040000669", 
        TransitNumber: "10009", 
        InstitutionNumber: "352", 
        AccountNumber: "",
        AccountName: ""
    });
    const {CustomerAccountId, CustomerNumber, TransitNumber, InstitutionNumber, AccountNumber, AccountName} = user;

    const onChange= (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const UpdateCustomerAccountInformation = async () => {
        try {
            const config = {
                headers: {
                    'signature': signature,
                    'key': apiKey
                }
            };

            const res = await axios.post('https://sandboxapi.apaylo.com/sandboxapi.apaylo.com/api/EFT/UpdateEFTCustomerAccount', user, config);
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <div>
     <h1>Update Customer Account</h1>
     <form action="">
        <input type="text" placeholder='Customer Account ID' name='CustomerAccountId' value={CustomerAccountId} onChange={onChange} />
        <input type="text" placeholder='Customer Number' name='CustomerNumber' value={CustomerNumber} onChange={onChange} />
        <input type="text" placeholder='Transit Number' name='TransitNumber' value={TransitNumber} onChange={onChange} />
        <input type="text" placeholder='Institution Number' name='InstitutionNumber' value={InstitutionNumber} onChange={onChange} />
        <input type="text" placeholder='Account Number' name='AccountNumber' value={AccountNumber} onChange={onChange}/>
        <input type="text" placeholder='Account Name' name='AccountName' value={AccountName} onChange={onChange}/>
        <button onClick={(e) => {
            e.preventDefault();
            UpdateCustomerAccountInformation();
        }}>Update Account</button>
     </form>
    </div>
  );
};

export default UpdateCustomerAccount;