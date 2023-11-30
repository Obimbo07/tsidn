import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import './Pages.css';

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
            <div className="title">
                <h1>Transport Content</h1>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Post Date</th>
                        <th>View More</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {transportList.length === 0 ? (
                            <tr>
                                 <td>No Data</td>
                            </tr>  
                        ): (
                            <>
                            {transportList.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.post_category}</td>
                                    <td>{data.post_tag}</td>
                                    <td>{data.post_title}</td>
                                    <td>{data.post_content}</td>
                                    <td>
                                    <a href={URL.createObjectURL(new Blob([new Uint8Array(data.post_image.data)],{type: 'image/jpeg', }))}
                                        download={URL.createObjectURL(new Blob([new Uint8Array(data.post_image.data)],{type: 'image/jpeg', }))}>
                                            Download
                                        </a>
                                    </td>
                                    <td>{data.date}</td>
                                    <td><button>View More</button></td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            ))}
                            </>
                        )} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransportSafety;