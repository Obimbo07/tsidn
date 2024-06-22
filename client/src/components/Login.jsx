import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/auth/authSlice';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginSuccess, error, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (loginSuccess) {
      alert('Login Successfull');
      setShowModal(false);
      navigate('/home');
    }
    if (error) {
      console.log(error);
      alert(`Login failed: ${error}`);
    }
  }, [loginSuccess, error, navigate]);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email }))
    // Add your login logic here, e.g., API call to authenticate the user
    // For now, we'll just display an alert and navigate to a different page
    alert('Login successful!');
    navigate('/dashboard'); // Adjust the path as per your routing setup
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${showModal ? 'block' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>&times;</button>
        <h2 className="text-2xl font-bold mb-6">LOGIN TO YOUR ACCOUNT</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button disabled={isLoading} type="submit" className="w-full bg-blue-500 text-blue-300 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
