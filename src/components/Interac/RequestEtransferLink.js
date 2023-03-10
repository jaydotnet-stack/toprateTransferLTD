import axios from 'axios';
import React, { useState } from 'react';

import { apiKey, signature } from '../../utils/globals.js';

const RequestEtransferLink = () => {
    const [user, setUser] = useState({
        CustomerEmail: "", 
        CustomerName: "", 
        Amount: "", 
        Description: ""
    });

    const {CustomerEmail, CustomerName, Amount, Description} = user;

    const onChange= (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const EtransferLink = async () => {
        try {
            const config = {
                headers: {
                    'signature': signature,
                    'key': apiKey
                }
            };

            const res = await axios.post('https://sandboxapi.apaylo.com/sandboxapi.apaylo.com/api/Merchant/RequestInteracEtransferLink', user, config);
            // console.log(res.data);
            //another API to Accept Payment Request
            // let riD = res.data.ReferenceNumber;
            // const res2 = await axios.post('https://gateway-web.fit.interac.ca/acceptPaymentRequest.do?rID=riD', user, config);

        } catch(err) {
            console.error(err);
        }
    }

  return (
    <div>
     <h1>Interact Etransfer</h1>
     <form action="">
        <input type="text" placeholder='Customer Email' name='CustomerEmail' value={CustomerEmail} onChange={onChange}/>
        <input type="text" placeholder='Customer Name' name='CustomerName' value={CustomerName} onChange={onChange}/>
        <input type="text" placeholder='Amount' name='Amount' value={Amount} onChange={onChange}/>
        <input type="text" placeholder='Description' name='Description' value={Description} onChange={onChange}/>
        <button onClick={(e) => {
            e.preventDefault();
            EtransferLink();
        }}>Request Transfer Link</button>
     </form>
    </div>
  );
};

export default RequestEtransferLink;