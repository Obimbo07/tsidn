import { faEye, faEyeSlash, faPenToSquare, } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Training = () => {
   
    const[transportList, setTransportList] = useState([]);
    const[openFormEdit, setOpenFormEdit] = useState([]);
    const[viewMore, setViewMore] = useState(false);
    const[viewContent, setViewContent] = useState();
    const [selectId, setSelectId] = useState(null);

    const select_trans_api = `${process.env.REACT_APP_DATABASE_API}/api/selectTraining`;

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
        setViewMore(false);
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

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })

    }

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

    

    const handleViewMore = (id) => {
        setOpenFormEdit(false);
        setSelectId(id);
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
                        <p className='text-darkBlack text-[20px] font-[400]'>Training</p>
                    </caption>
                    <thead className='bg-[#f2f2f2] text-[black] py-[30px] '>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>Tags</th>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>Title</th>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>Content</th>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>Image</th>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>Fixed Date</th>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>Start Date</th>
                        <th className='p-[20px] text-left border-b-[1px] border-b-[#ddd]'>End Date</th>
                    </thead>
                    <tbody>
                        {transportList.length === 0 ? (
                            <tr colSpan='11'>
                                 <td>No Data</td>
                            </tr>  
                        ): (
                            <>
                            {transportList.map((data) => (
                                <React.Fragment key={data.id}>
                                    <tr className=' hover:bg-[#f5f5f59b]' key={data.id}>
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
                                        <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' onClick={() => handleViewMore(data.id)}>{viewMore && viewContent ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }</td>
                                        <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' onClick={() => handleOpenEdit(data.id)}><FontAwesomeIcon icon={faPenToSquare} /></td>
                                        <td className='p-[20px] text-left border-b-[1px] border-b-[#ddd]' onClick={() => handleDelete(data.id)}><FontAwesomeIcon icon={faTrash} /></td>
                                    </tr>
                                    {selectId === data.id && (
                                        <tr colSpan="11" className='border-b-[1px] border-b-[#ddd] flex justify-center w-[100%] '>
                                            {viewMore && viewContent && (
                                            <div className="flex flex-row items-center ">
                                                <div className="flex flex-col justify-center w-[800px] bg-lightYellow px-[30px] py-[20px]">
                                                    <div className="flex justify-end" onClick={(e) => setViewContent(false)}>
                                                        <FontAwesomeIcon icon={faXmark}
                                                            className='text-[35px] text-[orangered]'
                                                        />
                                                    </div>
                                                    <div className="flex justify-around items-center">
                                                        <div className="flex flex-col items-center gap-[10px]">
                                                            <h2 className='text-left font-[500]'>Category</h2>
                                                            <p>{viewContent.post_category}</p>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-[10px]">
                                                            <h2 className='text-left font-[500]' >Tags</h2>
                                                            <p>{viewContent.post_tag}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-around items-center">
                                                        <div className="flex flex-col items-center gap-[10px]">
                                                            <h2 className='font-[500]'>Content</h2>
                                                            <p>{viewContent.post_content}</p>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-[10px]">
                                                            <h2 className='font-[500]'>Image</h2>
                                                            <img src={URL.createObjectURL(new Blob([new Uint8Array(viewContent.post_image.data)],{type: 'image/jpeg', }))} 
                                                            alt={viewContent.image_name} 
                                                            className='w-[300px] h-[200px] border-[1px] border-darkBlack'
                                                            />
                                                        </div>
                                                    </div>
                                            
                                                    { viewContent.date ? (
                                                        <>
                                                        <div className="mt-[20px]">
                                                            <p><span className='font-[500] mr-[8px]'>Date:</span>{viewContent.date}</p>
                                                        </div>
                                                        </>
                                                    ): (
                                                        <>
                                                        <div className="flex justify-around items-center mt-[20px]">
                                                            <div className="post-date">
                                                                <p><span className='font-[500] mr-[8px]'>Start Date:</span>{viewContent.start_date}</p>
                                                            </div>
                                                            <div className="post-date">
                                                                <p><span className='font-[500] mr-[8px]'>End Date:</span>{viewContent.end_date}</p>
                                                            </div>
                                                        </div>
                                                        </>
                                                    )}
                                                    
                                                </div>
                                            </div>
                                            
                                        )}
                                    </tr>
                                    )}
                                    {editId == data.id && (
                                        <tr colSpan="11" className='border-b-[1px] border-b-[#ddd] '>
                                            {openFormEdit && formData &&(
                                                <div className="bg-lightYellow px-[40px] py-[20px]">
                                                        <div className="flex justify-end "  >
                                                            <div className="" onClick={handleCloseEdit}>
                                                                <FontAwesomeIcon icon={faXmark}
                                                                    className='text-[35px] text-[orangered]'
                                                                />
                                                            </div>

                                                        </div> 
                                                        <form onSubmit={handleSubmitEdit} className='flex flex-col'>
                                                            <label htmlFor="category" className='font-[500] text-[18px] mb-[8px]'>Category:</label>
                                                            <select
                                                            name="selectedCategory" 
                                                            id="category"
                                                            value={formData.post_category}
                                                            onChange={handleCategoryChange}
                                                            className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none'
                                                            >
                                                                <option value="">select a category</option>
                                                                {categories.map((category) => (
                                                                    <option key={category.id} value={category.title}>
                                                                        {category.title}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <label htmlFor="tags" className='font-[500] text-[18px] mb-[8px]' >Tags:</label>
                                                            {tags.map((tag) => (
                                                                <div key={tag} className="flex flex-row items-center gap-[5px]">
                                                                <input
                                                                    type="checkbox"
                                                                    id={tag}
                                                                    value={tag}
                                                                    checked={formData.post_tag.includes(tag)}
                                                                    onChange={() => handleTagChange(tag)}
                                                                    className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none'
                                                                />
                                                                <label htmlFor={tag} className='font-[400] text-[16px] '>{tag}</label>
                                                                </div>
                                                            ))}
                                                            <label htmlFor="title" className='font-[500] text-[18px] mb-[8px]'>Title:</label>
                                                            <input type="text" 
                                                            name='title' 
                                                            id='title'
                                                            value={formData.post_title}
                                                            onChange={(e) => setFormData({...formData, post_title: e.target.value})}
                                                            className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none'
                                                            />
                                                            <label htmlFor="content" className='font-[500] text-[18px] mb-[8px]'>Content:</label>
                                                            <textarea name="content"
                                                            id="content" 
                                                            cols="30" 
                                                            rows="10"
                                                            placeholder='content area'
                                                            value={formData.post_content}
                                                            onChange={(e) => setFormData({...formData, post_content: e.target.value})}
                                                            className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none resize-y'
                                                            >
                                                            </textarea>
                                                            <label htmlFor="image" className='font-[500] text-[18px] mb-[8px]'>Image:</label>
                                                            <input type="file" 
                                                            name="image" 
                                                            id="image" 
                                                            onChange={(e) => setFormData({...formData, post_image: e.target.files[0]})}
                                                            className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none'
                                                            />
                                                            <label htmlFor="date" className='font-[500] text-[18px] mb-[8px]'>Date:</label>
                                                            { formData.date  ? (
                                                            <>
                                                                <input type="date"
                                                                name="date"
                                                                id="date"
                                                                value={formData.date}
                                                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                                                className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none'
                                                                />
                                                            </>): (<>
                                                                <label htmlFor="" className='font-[500] text-[18px] mb-[8px]'>Start Date: </label>
                                                                <input type="date"
                                                                name="date"
                                                                id="date"
                                                                value={formData.start_date}
                                                                onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                                                                className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none'
                                                                />
                                                                <label htmlFor="" className='font-[500] text-[18px] mb-[8px]'>End Date:</label>
                                                                <input type="date"
                                                                name="date"
                                                                id="date"
                                                                value={formData.end_date}
                                                                onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                                                                className='border-[1px] border-lightBlue rounded-[3px] py-[3px] px-[2px] text-[17px] outline-none'
                                                                />
                                                            </>)}
                                                            
                                                            <div className="flex justify-center items-center mt-[10px]">
                                                                <button type='submit' className='bg-[#495664] px-[20px] py-[5px] rounded-[4px] text-white text-[18px]'>Post</button>
                                                            </div>
                                                        </form>
                                                </div>  
                                            )}
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                            </>
                        )} 
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}

export default Training;