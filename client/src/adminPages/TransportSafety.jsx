import { faPenToSquare , faEye} from '@fortawesome/free-regular-svg-icons';
import { faTrash , faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransportSafety = () => {
   
    const[transportList, setTransportList] = useState([]);
    const[openFormEdit, setOpenFormEdit] = useState([]);

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

    const handleDelete = async(id) => {
        const delete_api = `${process.env.REACT_APP_DATABASE_API}/api/deleteContent/${id}`;
        try {
            const response = await axios.delete(delete_api);
            const success = response.data.success;
            if(success) {
                selectTrans();
            }
            return;
        }catch (error) {
            console.log('error',error);
        }
    }

    const[formData, setFormData] = useState('');
    const[editId, setEditId] = useState('');
    const handleOpenEdit = (id) => {
        setEditId(id);
        // console.log('handleOpenEdit',id);
        setOpenFormEdit(!openFormEdit);
        const currentObject = transportList.find(data => data.id === id);

        if(currentObject) {
            setFormData({
                ...currentObject,
                post_tag: currentObject.post_tag.split(','),
            });
        }
    }

    
    const categories = [
        {
            id: 1,
            title: 'Transport Safety',
            link: 'transportSafety'
        },
        {
            id: 2,
            title: 'Trainings',
            link:  'training',
        },
        {
            id: 3,
            title: 'Press Releases',
            link: 'pressRelease'
        },
        {
            id: 4,
            title: 'Podcasts',
            link: 'podcasts',
        },
        {
            id: 5,
            title: 'Meetings & Events',
            link: 'meetings',
        },
        {
            id: 6,
            title: 'News',
            link: 'news',
        }
      ]

      const handleCategoryChange = (e) => {
        setFormData({
            ...formData,
            post_category: e.target.value,
        })
    }

    const handleTagChange = (tag) => {
        const updatedTags = [...formData.post_tag];

        if (updatedTags.includes(tag)) {
          updatedTags.splice(updatedTags.indexOf(tag), 1);
        } else {
          updatedTags.push(tag);
        }
    
        setFormData({
          ...formData,
          post_tag: updatedTags,
        });
    }

    // const handleChange = (e) => {
    // setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    // })

    // }

      const tags = [
        'Transport',
        'Road Safety',
        'Knowledge Sharing',
        'Capacity building',
        'Eco-transport development',
        'Human Resource Development',
        'Agg in transport Sector',
        'Research and Development',
      ];

      const handleCloseEdit =() => {
        setOpenFormEdit(false);
      }
    
    const handleSubmitEdit = async(e) => {
        e.preventDefault();
          try{
            // console.log('formData',formData);
            const newFormData = new FormData();

            newFormData.append('post_category', formData.post_category);
            newFormData.append('post_tag', formData.post_tag.join(','));
            newFormData.append('post_title', formData.post_title);
            newFormData.append('post_content', formData.post_content);
            newFormData.append('date', formData.date);
            newFormData.append('start_date', formData.start_date);
            newFormData.append('end_date', formData.end_date);

            if (formData.post_image instanceof File) {
                newFormData.append('post_image', formData.post_image);
              } else {
                const blob = new Blob([new Uint8Array(formData.post_image.data)], { type: formData.post_image.type });
                const file = new File([blob], 'image.jpg', { type: formData.post_image.type });
                newFormData.append('post_image', file);
              }

            const post_edit_api = `${process.env.REACT_APP_DATABASE_API}/api/updateContent/${editId}`;

            const response =  await axios.put(post_edit_api, newFormData);
            const success = response.data.success;
            if(success) {
                selectTrans();
                setOpenFormEdit(false);
            }
          } catch(error) {
            console.log(error);
          }
    }

    const[viewMore, setViewMore] = useState(false);
    const[viewContent, setViewContent] = useState();

    const handleViewMore = (id) => {
        console.log(id);
        const currentView = transportList.find(data => data.id === id);
        if(currentView) {
            console.log(currentView);
            setViewContent(currentView);
        }
        setViewMore(true);
    }
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...';
        }
        return text;
      };
    return (
        <div className="transport-page flex flex-col">
            <ToastContainer/>
            <div className="flex justify-center px-[40px]">
                <table className='border-collapse border-spacing-0 w-[100%] mt-[40px]'>
                    <caption className='caption-top'>
                        <p className='text-darkBlack text-[20px] font-[400]'>Transport</p>
                    </caption>
                    <thead className='bg-[#f2f2f2] text-[black] py-[30px] '>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' >Category</th>
                        <th>Tags</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Fixed Date</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>View More</th>
                    </thead>
                    <tbody>
                        {transportList.length === 0 ? (
                            <tr>
                                 <td>No Data</td>
                            </tr>  
                        ): (
                            <>
                            {transportList.map((data) => (
                                <tr className=' hover:bg-[#f5f5f59b]' key={data.id}>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>{data.post_category}</td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>{data.post_tag}</td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>{data.post_title}</td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>{truncateText(data.post_content, 50)}</td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>
                                    <a href={URL.createObjectURL(new Blob([new Uint8Array(data.post_image.data)],{type: 'image/jpeg', }))}
                                        download={URL.createObjectURL(new Blob([new Uint8Array(data.post_image.data)],{type: 'image/jpeg', }))}>
                                            <FontAwesomeIcon icon={faDownload} />
                                        </a>
                                    </td >
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' style={data.date? {color: 'black'}: {color: 'grey' , fontStyle: 'italic'}}>{data.date ? data.date : 'Unavailable'}</td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' style={data.start_date? {color: 'black'}: {color: 'grey' , fontStyle: 'italic'}}>{data.start_date ? data.start_date  : 'Unavailable'}</td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' style={data.end_date? {color: 'black'}: {color: 'grey' , fontStyle: 'italic'}}>{data.end_date ? data.start_date : 'Unavailable'}</td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' onClick={() => handleViewMore(data.id)}><FontAwesomeIcon icon={faEye} /></td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' onClick={() => handleOpenEdit(data.id)}><FontAwesomeIcon icon={faPenToSquare} /></td>
                                    <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' onClick={() => handleDelete(data.id)}><FontAwesomeIcon icon={faTrash} /></td>
                                </tr>
                            ))}
                            </>
                        )} 
                    </tbody>
                </table>
            </div>

            {openFormEdit && formData &&(
                    <div className="admin-modal">
                        <div className="modal-content">
                            <div className="form">
                                <div className="button-close">
                                    <button onClick={handleCloseEdit}>Close</button>
                                </div> 
                            <div className="post-form">
                                <form onSubmit={handleSubmitEdit}>
                                    <label htmlFor="category">Category:</label>
                                    <select
                                    name="selectedCategory" 
                                    id="category"
                                    value={formData.post_category}
                                    onChange={handleCategoryChange}
                                    >
                                        <option value="">select a category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.title}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="tags">Tags:</label>
                                    {tags.map((tag) => (
                                        <div key={tag} className="tag-checkbox">
                                        <input
                                            type="checkbox"
                                            id={tag}
                                            value={tag}
                                            checked={formData.post_tag.includes(tag)}
                                            onChange={() => handleTagChange(tag)}
                                        />
                                        <label htmlFor={tag}>{tag}</label>
                                        </div>
                                    ))}
                                    <label htmlFor="title">Title:</label>
                                    <input type="text" 
                                    name='title' 
                                    id='title'
                                    value={formData.post_title}
                                    onChange={(e) => setFormData({...formData, post_title: e.target.value})}
                                    />
                                    <label htmlFor="content">Content:</label>
                                    <textarea name="content"
                                    id="content" 
                                    cols="30" 
                                    rows="10"
                                    placeholder='content area'
                                    value={formData.post_content}
                                    onChange={(e) => setFormData({...formData, post_content: e.target.value})}
                                    >
                                    </textarea>
                                    <label htmlFor="image">Image:</label>
                                    <input type="file" 
                                    name="image" 
                                    id="image" 
                                    onChange={(e) => setFormData({...formData, post_image: e.target.files[0]})}
                                    />
                                    <label htmlFor="date">Date:</label>
                                    { formData.date  ? (
                                    <>
                                        <input type="date"
                                        name="date"
                                        id="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                                        />
                                    </>): (<>
                                        <label htmlFor="">Start Date: </label>
                                        <input type="date"
                                        name="date"
                                        id="date"
                                        value={formData.start_date}
                                        onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                                        />
                                        <label htmlFor="">End Date:</label>
                                        <input type="date"
                                        name="date"
                                        id="date"
                                        value={formData.end_date}
                                        onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                                        />
                                    </>)}
                                    
                                    <div className="button">
                                        <button type='submit'>Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    
                )}

            {viewMore && viewContent && (
                <div className="modal-view">
                    <div className="modal-content-view">
                        <div className="view">
                            <div className="button-close">
                                <button onClick={(e) => setViewContent(false)}>Close</button>
                            </div>
                            <div className="title">
                                <p> <span>Category:</span>{viewContent.post_category}</p>
                            </div>
                            <div className="tags">
                                <p><span>Tags:</span>{viewContent.post_tag}</p>
                            </div>
                            <div className="content">
                                <p><span>Content:</span>{viewContent.post_content}</p>
                            </div>
                            <div className="post-image">
                                <span>Image</span>
                                <img src={URL.createObjectURL(new Blob([new Uint8Array(viewContent.post_image.data)],{type: 'image/jpeg', }))} alt={viewContent.image_name} />
                            </div>
                            
                            { viewContent.date ? (
                                <>
                                <div className="post-date">
                                    <p><span>Date:</span>{viewContent.date}</p>
                                </div>
                                </>
                            ): (
                                <>
                                <div className="post-date">
                                    <p><span>Start Date:</span>{viewContent.start_date}</p>
                                </div>
                                <div className="post-date">
                                    <p><span>End Date:</span>{viewContent.end_date}</p>
                                </div>
                                </>
                            )}
                            
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default TransportSafety;