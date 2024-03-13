import axios from 'axios';
import React, { useState } from 'react';

const Pay = () => {
    const[formData, setFormData] = useState({
        payReason: '',
        amount: '',
    })
    const handleOnsubmit = async(e) => {
        e.preventDefault();
        const pay_api = `${process.env.REACT_APP_DATABASE_API}/api/payPremium`
        console.log(formData);
        try {
            const response = await axios.post(pay_api, formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className="pay-page">
        <form onSubmit={handleOnsubmit} style={{marginTop: '30px'}}>
            <input type="text" 
            name="payReason" 
            id="payReason"
            value={formData.payReason}
            placeholder='Reason to pay'
            onChange={(e) => setFormData({...formData, payReason: e.target.value})}
             />
            <input type="number" 
            name="amount"
             id="amount" 
             value={formData.amount}
             onChange={(e) => setFormData({...formData, amount: e.target.value})}
             style={{marginTop: '20px'}}
             placeholder='Enter amount'
             min={0}
             />
            <button type='submit' style={{marginTop: '20px'}}>Pay</button>
        </form>
    </div>
  )
}

export default Pay