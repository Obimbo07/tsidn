import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './admin.css';

const Front = () => {
    const [openPostForm, setOpenForm] =  useState(false);
    const [openFixedDate, setFixedDate] = useState(true);
    const [openScheduledDate, setScheduledDate] = useState(false);
    // const [contentList, setContentList] = useState([]);

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
        },
        {
            id: 7,
            title: 'Pay',
            link: 'pay',
        }
      ]

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
        <div className="front-page">
            <div className="admin-header ">
                <nav>
                    <div className="logo">
                        <h2>Admin page</h2>
                    </div>
                    <div className="post">
                        <button onClick={handleOPenForm}>{openPostForm ? 'Close': 'Post'}</button>
                    </div>
                    <div className="links">
                        <button>logout</button>
                    </div>
                </nav>
            </div>
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="menu">
                        <h2>Menu</h2>
                    </div>
                    <div className="details">
                        <ul>
                            <li> <Link to="">Home</Link></li>
                            {categories.map((category) => (
                                <li key={category.id}> <Link to={category.link}>{category.title}</Link> </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="content-area">
                <ToastContainer />
                {openPostForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <div className="form">
                            <div className="post-form">
                                <form onSubmit={(event) =>handleSubmit(event)}>
                                    <label htmlFor="category">Category:</label>
                                    <select
                                    name="selectedCategory" 
                                    id="category"
                                    value={formData.selectedCategory}
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
                                            checked={formData.selectedTags.includes(tag)}
                                            onChange={() => handleTagChange(tag)}
                                        />
                                        <label htmlFor={tag}>{tag}</label>
                                        </div>
                                    ))}
                                    <label htmlFor="title">Title:</label>
                                    <input type="text" 
                                    name='title' 
                                    id='title'
                                    value={formData.title}
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="content">Content:</label>
                                    <textarea name="content"
                                    id="content" 
                                    cols="30" 
                                    rows="10"
                                    placeholder='content area'
                                    value={formData.content}
                                    onChange={handleChange}
                                    >
                                    </textarea>
                                    <label htmlFor="image">Image:</label>
                                    <input type="file" 
                                    name="image" 
                                    id="image" 
                                    onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                                    />
                                    <div className="date-types">
                                        <button onClick={(e) => handleFixedDate(e)}>Fixed Date</button>
                                        <button onClick={(e) => handleScheduledDate(e)}>Scheduled Date</button>
                                    </div>
                                    <label htmlFor="date">Date:</label>
                                    {openFixedDate && (
                                        <>
                                            <input type="date"
                                            name="date"
                                            id="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            />
                                        </>
                                    )}
                                    {
                                        openScheduledDate && (
                                            <>
                                            <label htmlFor="startDate">Start Date</label>
                                            <input type="date" 
                                            name="startDate"
                                             id="startDate" 
                                             value={formData.startDate}
                                             onChange={handleChange}
                                             />
                                            <label htmlFor="endDate">End Date</label>
                                            <input type="date"
                                             name="endDate" 
                                             id="endDate"
                                             value={formData.endDate}
                                             onChange={handleChange}
                                              />
                                            </>
                                        )
                                    }
                                    
                                    <div className="button">
                                        <button type='submit'>Post</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    
                )}
                <Outlet />
            </div>
        </div>
    )
}

export default Front;