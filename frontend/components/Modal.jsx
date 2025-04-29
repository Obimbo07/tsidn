'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {useSession} from 'next-auth/react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const timeoutId = setTimeout(() => {
        setShowModal(true);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    
  }, []);

  useEffect(() => {
    if (registerSuccess) {
      alert('Hello, you have successfully registered to our Newsletter. Check your email for further details');
      setShowModal(false);
      router.push('/pricing');
    }
    if (error) {
      console.log(error);
      alert(`Registration failed: ${error}`);
    }
  }, [registerSuccess, error, router]);

  const handleCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock registration process
    setTimeout(() => {
      // Simulate success response
      setRegisterSuccess(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${showModal ? 'block' : 'hidden'}`}>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg text-center max-w-full w-auto">
        <button className="absolute top-2 right-2 text-gray-600" onClick={handleCloseModal}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">SUBSCRIBE TO OUR MAILING LIST</h2>
        <p className="mb-4">Stay updated with the latest news and promotions. Subscribe to our mailing list!</p>
        <div className="newsletter-section">
          <h4 className="text-lg mb-2">Enter email to get newsletter</h4>
          <form onSubmit={handleNewsletter}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your Username"
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <button type="submit" disabled={isLoading} className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
