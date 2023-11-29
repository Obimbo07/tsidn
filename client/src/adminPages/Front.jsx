import axios from 'axios';
import React, { useState } from 'react';
import './admin.css';
const Front = () => {

    const menus = {
        transport: ['tag1', 'tag2', 'tag3'],
        training: ['tag4', 'tag5', 'tag6'],
        pressRelease: ['tag7', 'tag8', 'tag9']
    }
    const [formData, setFormData] = useState({
        selectedCategory: '',
        selectedTag: '',
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

    const handleTagChange = (e) => {
        setFormData({
            ...formData,
            selectedTag: e.target.value,
        })
    }

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })

    }
    console.log(formData);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const newFormData = new FormData();

            newFormData.append('selectedCategory', formData.selectedCategory);
            newFormData.append('selectedTag', formData.selectedTag);
            newFormData.append('title', formData.title);
            newFormData.append('content', formData.content);
            newFormData.append('image', formData.image);
            newFormData.append('date', formData.date);

            const post_api = `${process.env.REACT_APP_DATABASE_API}/api/postContent`;

            const response = await axios.post(post_api, newFormData);

            console.log(response.data);

            setFormData({
                selectedCategory: '',
                selectedTag: '',
                title: '',
                content: '',
                image: null,
                date: '',
            });

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
                            {Object.keys(menus).map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="tags">Tags:</label>
                        <select 
                        name="selectedTag" 
                        id="tags"
                        value={formData.selectedTag}
                        onChange={handleTagChange}
                        >
                            <option value=""></option>
                            {formData.selectedCategory && 
                                menus[formData.selectedCategory].map((tag) => (
                                    <option key={tag} value={tag}>{tag}</option>
                                ))}
                        </select>
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