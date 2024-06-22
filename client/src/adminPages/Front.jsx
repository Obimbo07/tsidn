import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Front = () => {
    const navigate = useNavigate();
    const [openPostForm, setOpenForm] =  useState(false);
    const [openFixedDate, setFixedDate] = useState(true);
    const [openScheduledDate, setScheduledDate] = useState(false);
    // const [contentList, setContentList] = useState([]);

    const HomeNavigate = () => {
        navigate('');
    }

    const select_content_api = `${process.env.REACT_APP_DATABASE_API}/api/selectContent`;

    const selectContent =  useCallback(async() => {
        try {
            await axios.get(select_content_api);
            // console.log('response',response);
            // if(response.data.success) {
            //     setContentList(response.data.data);
            // }
            return;
        } catch (error) {
            console.log(error);
        }
    }, [select_content_api])

    
    useEffect(() => {
        selectContent();
    }, [selectContent]);

    const handleFixedDate = (e) => {
        e.preventDefault();
        setFixedDate(!openFixedDate);
        setScheduledDate(false);
    }

    const handleScheduledDate = (e) => {
        e.preventDefault();
        setScheduledDate(!openScheduledDate);
        setFixedDate(false);
    }

    const handleOPenForm = () => {
        setOpenForm(!openPostForm);
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
            link: 'press'
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
        },
        {
            id: 7,
            title: 'Pay',
            link: 'pay',
        }
      ]

      const tags = [
        'Transport safety and development',
        'Expert Knowledge Sharing in transport safety development',
        'Capacity building and human resource development in transport',
        'Eco-transport development',
        'Catalyzing financing for road transport safety improvement programmes',
        'Advocacy for good governance in transport safety and developement',
        'Research and Development in transport',
      ];
    const [formData, setFormData] = useState({
        selectedCategory: '',
        selectedTags: [],
        title: '',
        content: '',
        image: null,
        date: '',
        startDate: '',
        endDate: '',
    });

    const handleCategoryChange = (e) => {
        setFormData({
            ...formData,
            selectedCategory: e.target.value,
        })
    }

    const handleTagChange = (tag) => {
        const updatedTags = [...formData.selectedTags];

        if (updatedTags.includes(tag)) {
          updatedTags.splice(updatedTags.indexOf(tag), 1);
        } else {
          updatedTags.push(tag);
        }
    
        setFormData({
          ...formData,
          selectedTags: updatedTags,
        });
    }

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
    }

    // console.log(formData);

    const handleSubmit = async(event) => {
        event.preventDefault();
        for (const key in formData) {
            if (key !== 'selectedTags' && key !== 'date' && key !== 'startDate' && key !== 'endDate' && (formData[key] === '' || formData[key] === null)) {
              toast.error(`${key} is empty`);
              return;
            }
          }
        try {
            const newFormData = new FormData();

            newFormData.append('selectedCategory', formData.selectedCategory);
            newFormData.append('selectedTag', formData.selectedTags.join(','));
            newFormData.append('title', formData.title);
            newFormData.append('content', formData.content);
            newFormData.append('image', formData.image);
            newFormData.append('date', formData.date);
            newFormData.append('startDate', formData.startDate);
            newFormData.append('endDate', formData.endDate);

            const post_api = `${process.env.REACT_APP_DATABASE_API}/api/postContent`;

            const response = await axios.post(post_api, newFormData);

            const success = response.data.success;
            if(success) {
                selectContent();
                setOpenForm(false);
                setFormData({
                    selectedCategory: '',
                    selectedTags: [],
                    title: '',
                    content: '',
                    image: null,
                    date: '',
                    startDate: '',
                    endDate: '',
                });
                return;
            }
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="front-page bg-[#ffffff]">
            <div className="bg-secColor  w-[100%]" >
                <div className="flex justify-between items-center px-[15px] py-[25px] text-[20px]">
                    <div className="" onClick={HomeNavigate}>
                        <img src="../../logotest.jpeg" alt="" className='w-[100px] h-[80px]'/>
                    </div>
                    <div className="details">
                        <ul className='flex justify-center gap-[30px] items-cent px-[20px] '>
                            <li> <Link to="" className='text-[20px] font-[500]'>Home</Link></li>
                            {categories.map((category) => (
                                <li key={category.id} > <Link to={category.link} className='text-[20px] font-[500]'>{category.title}</Link> </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-[30px]">
                        <div className="">
                            <button onClick={handleOPenForm} className={` px-[15px] py-[5px] rounded-[3px] font-[700] text-white ${openPostForm ? 'bg-[red] ': 'bg-[#3A4750]'}`}>{openPostForm ? 'Close': 'Post'}</button>
                        </div>
                        <div className="links">
                            <button className='bg-[#3A4750] px-[15px] py-[5px] rounded-[3px] text-white font-[700]'>logout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <ToastContainer />
                {openPostForm && (
                    <div className="flex items-center justify-center fixed bg-[#0000004d] w-[100%] h-[100%]  mt-[0px] ">
                            <div className="post-form bg-white px-[30px]   h-[600px] mb-[140px] overflow-auto py-[40px]">
                                <form onSubmit={(event) =>handleSubmit(event)} className='flex flex-col  '>
                                    <div className="flex justify-end">
                                        <button className='bg-[red] px-[10px] py-[3px] rounded-[3px] text-white font-[500]' onClick={() => setOpenForm(false)}>
                                            Close
                                        </button>
                                    </div>
                                    <label htmlFor="category" className='font-[500] mb-[5px] text-[18px]'>Category:</label>
                                    <select
                                    name="selectedCategory" 
                                    id="category"
                                    value={formData.selectedCategory}
                                    onChange={handleCategoryChange}
                                    className='border-[1px] border-lightBlue outline-none py-[8px] rounded-[3px] text-[18px]'
                                    >
                                        <option value="">select a category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.title}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="tags" className='font-[500] mb-[5px] text-[18px] mt-[10px]'>Tags:</label>
                                    {tags.map((tag) => (
                                        <div key={tag} className="tag-checkbox flex flex-row gap-[10px] items-center">
                                        <input
                                            type="checkbox"
                                            id={tag}
                                            value={tag}
                                            checked={formData.selectedTags.includes(tag)}
                                            onChange={() => handleTagChange(tag)}
                                            className='border-[1px] border-lightBlue outline-none  rounded-[3px] text-[30px] '
                                        />
                                        <label htmlFor={tag} className='font-[400] text-[18px] '>{tag}</label>
                                        </div>
                                    ))}
                                    <label htmlFor="title" className='font-[500] mb-[5px] text-[18px] mt-[10px]'>Title:</label>
                                    <input type="text" 
                                    name='title' 
                                    id='title'
                                    value={formData.title}
                                    onChange={handleChange}
                                    className='border-[1px] border-lightBlue outline-none py-[8px] px-[5px] rounded-[3px] text-[18px]'
                                    />
                                    <label htmlFor="content" className='font-[500] mb-[5px] text-[18px] mt-[10px]'>Content:</label>
                                    <textarea name="content"
                                    id="content" 
                                    cols="30" 
                                    rows="10"
                                    placeholder='content area'
                                    value={formData.content}
                                    onChange={handleChange}
                                    className='border-[1px] border-lightBlue outline-none py-[8px] rounded-[3px] text-[18px]'
                                    >
                                    </textarea>
                                    <label htmlFor="image" className='font-[500] mb-[5px] text-[18px] mt-[10px]'>Image:</label>
                                    <input type="file" 
                                    name="image" 
                                    id="image" 
                                    onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                                    className='border-[1px] border-lightBlue outline-none py-[8px] rounded-[3px] text-[18px]'
                                    />
                                    <div className="date-types flex justify-center gap-[20px] mt-[20px]">
                                        <button onClick={(e) => handleFixedDate(e)}
                                        className='bg-lightBlue px-[10px] py-[5px] rounded-[8px] text-white font-[500] text-[20px]'
                                        >
                                            Fixed Date
                                        </button>
                                        <button onClick={(e) => handleScheduledDate(e)}
                                        className='bg-lightBlue px-[10px] py-[5px] rounded-[8px] text-white font-[500] text-[20px]'
                                        >
                                            Scheduled Date
                                        </button>
                                    </div>
                                    <label htmlFor="date" className='font-[500] mb-[5px] text-[18px] mt-[10px]'>Date:</label>
                                    {openFixedDate && (
                                        <>
                                            <input type="date"
                                            name="date"
                                            id="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className='border-[1px] border-lightBlue outline-none py-[8px] rounded-[3px] text-[18px]'
                                            />
                                        </>
                                    )}
                                    {
                                        openScheduledDate && (
                                            <>
                                            <label htmlFor="startDate" className='font-[500] mb-[5px] text-[18px] mt-[10px]'>Start Date</label>
                                            <input type="date" 
                                            name="startDate"
                                             id="startDate" 
                                             value={formData.startDate}
                                             onChange={handleChange}
                                             className='border-[1px] border-lightBlue outline-none py-[8px] rounded-[3px] text-[18px]'
                                             />
                                            <label htmlFor="endDate" className='font-[500] mb-[5px] text-[18px] mt-[10px]'>End Date</label>
                                            <input type="date"
                                             name="endDate" 
                                             id="endDate"
                                             value={formData.endDate}
                                             onChange={handleChange}
                                             className='border-[1px] border-lightBlue outline-none py-[8px] rounded-[3px] text-[18px]'
                                              />
                                            </>
                                        )
                                    }
                                    
                                    <div className="button flex justify-center mt-[20px]">
                                        <button type='submit' className='bg-lightBlue px-[20px] py-[5px] rounded-[8px] text-white font-[500] text-[20px]'>Post</button>
                                        
                                    </div>
                                </form>
                            </div>
                    </div> 
                )}
                <Outlet />
            </div>
        </div>

        </>
        
    )
}

export default Front;