import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './admin.css';
const Front = () => {

    const menus = {
        transport: ['tag1', 'tag2', 'tag3'],
        training: ['tag4', 'tag5', 'tag6'],
        pressRelease: ['tag7', 'tag8', 'tag9']
    }

    const categories = [
        'Transport Safety',
        'Trainings',
        'Press Releases',
        'Podcasts',
        'Meetings & Events',
        'News',
      ];

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        for (const key in formData) {
            if (key !== 'selectedTags' && (formData[key] === '' || formData[key] === null)) {
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

            const post_api = `${process.env.REACT_APP_DATABASE_API}/api/postContent`;

            const response = await axios.post(post_api, newFormData);

            // console.log(response.data.success);
            const success = response.data.success;
            if(success) {
                setFormData({
                    selectedCategory: '',
                    selectedTags: [],
                    title: '',
                    content: '',
                    image: null,
                    date: '',
                });
                return;
            }
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div className="front-page">
            <div className="header">
                <nav>
                    <div className="logo">
                        <h2>Admin page</h2>
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
                            <li>Transport</li>
                            <li>Training</li>
                            <li>PressRelease</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="content-area">
                <ToastContainer />
                <div className="post-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="category">Category:</label>
                        <select
                         name="selectedCategory" 
                         id="category"
                         value={formData.selectedCategory}
                         onChange={handleCategoryChange}
                         >
                            <option value="">select a category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
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
                        <label htmlFor="date">Date:</label>
                        <input type="date"
                         name="date"
                          id="date"
                          value={formData.date}
                          onChange={handleChange}
                           />
                        <div className="button">
                            <button type='submit'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Front;