import axios from 'axios';
import React, { useState } from 'react';

// import { apiKey, signature } from '../utils/globals.js';
import { apiKey, signature } from '../../utils/globals.js';

const CreateTransaction = () => {
    const [user, setUser] = useState({
        Email: "", 
        CustomerAccountId: "", 
        TransactionTypeCode: "", 
        Amount: ""
    });
    
    const {Email, CustomerAccountId, TransactionTypeCode, Amount} = user;

    const onChange= (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const registerTransaction = async () => {
        try {
            const config = {
                headers: {
                    'signature': signature,
                    'key': apiKey
                }
            };

            const res = await axios.post('https://sandboxapi.apaylo.com/sandboxapi.apaylo.com/api/EFT/CreateEFTTransaction', user, config);
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <div>
     <h1>Create Transaction</h1>
     <form action="">
        <input type="text" placeholder='Email' name='Email' value={Email} onChange={onChange}/>
        <input type="text" placeholder='Customer Account ID' name='CustomerAccountId' value={CustomerAccountId} onChange={onChange}/>
        <input type="text" placeholder='Transaction Type Code (C/D)' name='TransactionTypeCode' value={TransactionTypeCode} onChange={onChange}/>
        <input type="text" placeholder='Amount' name='Amount' value={Amount} onChange={onChange}/>
        <button onClick={(e) => {
            e.preventDefault();
            registerTransaction();
        }}>Create Transaction</button>
     </form>
    </div>
  );
};

export default CreateTransaction;