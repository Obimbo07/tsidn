import React from 'react';
import './admin.css';
const Front = () => {
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
                        <select name="category" id="category">
                            <option value=""></option>
                            <option value="transport">Transport</option>
                            <option value="Training">Training</option>
                            <option value="PressRelease">PressRelease</option>
                        </select>
                        <label htmlFor="tags">Tags:</label>
                        <select name="tags" id="tags">
                            <option value=""></option>
                            <option value="tag1">tag1</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Front;