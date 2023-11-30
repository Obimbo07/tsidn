import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const TransportSafety = () => {

    const[transportList, setTransportList] = useState([]);

    const select_trans_api = `${process.env.REACT_APP_DATABASE_API}/api/selectTransportSafety`;

    const selectTrans =  useCallback(async() => {
        try {
            const response =await axios.get(select_trans_api);
            console.log('response',response);
            if(response.data.success) {
                setTransportList(response.data.data);
            }
            return;
        } catch (error) {
            console.log(error);
        }
    }, [select_trans_api])
    console.log('transportList',transportList);
    
    useEffect(() => {
        selectTrans();
    }, [selectTrans]);
    return (
        <div className="transport-page">
            <h1>Transport page</h1>
        </div>
    )
}

export default TransportSafety;