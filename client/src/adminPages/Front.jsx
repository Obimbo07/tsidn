import React, { useState } from 'react';
import './admin.css';
const Front = () => {

    const menus = {
        transport: ['tag1', 'tag2', 'tag3'],
        training: ['tag4', 'tag5', 'tag6'],
        pressRelease: ['tag7', 'tag8', 'tag9']
    }

    
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

    const [formData, setFormData] = useState({
        selectedCategory: '',
        selectedTag: '',
        title: '',
        content: '',
        image: null,
        date: '',
    });

    const handleCategoryChange = (e) => {
         setSelectedCategory(e.target.value);
        console.log(selectedCategory);
    }

    const handleTagChange = (e) => {
        setSelectedTag(e.target.value);
        console.log(selectedTag);
    }

    console.log(formData);

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
                    <form action="">
                        <label htmlFor="category">Category:</label>
                        <select
                         name="category" 
                         id="category"
                         value={selectedCategory}
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
                        name="tags" 
                        id="tags"
                        value={selectedTag}
                        onChange={handleTagChange}
                        >
                            <option value=""></option>
                            {selectedCategory && 
                                menus[selectedCategory].map((tag) => (
                                    <option key={tag} value={tag}>{tag}</option>
                                ))}
                        </select>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' id='title' />
                        <label htmlFor="content">Content:</label>
                        <textarea name="content"
                         id="content" 
                         cols="30" 
                         rows="10"
                         placeholder='content area'
                         >
                        </textarea>
                        <label htmlFor="image">Image:</label>
                        <input type="file" name="image" id="image" />
                        <label htmlFor="date">Date:</label>
                        <input type="date" name="date" id="date" />
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