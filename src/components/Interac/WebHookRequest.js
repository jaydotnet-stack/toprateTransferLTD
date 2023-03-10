import axios from 'axios';
import React, { useState } from 'react';

import { apiKey, signature } from '../../utils/globals.js';

const WebHookRequest = () => {
    const [user, setUser] = useState({
        TransactionNumbers: ""
    });

    const {TransactionNumbers} = user;

    const onChange= (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const CheckTransactionStatus = async () => {
        try {
            const config = {
                headers: {
                    'signature': signature,
                    'key': apiKey
                }
            };

            const res = await axios.post('https://sandboxapi.apaylo.com/sandboxapi.apaylo.com/api/Merchant/SearchRequestInteracEtransferArray', user, config);
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <div>
     <h1>Transaction Status</h1>
     <form action="">
        <input type="text" placeholder='Transaction Numbers' name='TransactionNumbers' value={TransactionNumbers} onChange={onChange}/>
        <button onClick={(e) => {
            e.preventDefault();
            CheckTransactionStatus();
        }}>Check Transaction Status</button>
     </form>
    </div>
  );
};

export default WebHookRequest;