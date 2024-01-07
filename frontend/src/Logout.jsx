import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      // Clear any local storage data
      window.localStorage.removeItem('ACCESS_TOKEN');
      window.localStorage.removeItem('csrf');

      // Make a request to your server to perform the logout operation
      await axios.post('http://localhost:8000/logout');

      // Update any state or display a success message
      setMessage('Successfully logged out');
      console.log('Successfully logged out');
      navigate('/login')
    } catch (error) {
      // Handle errors, display error message, etc.
      setMessage('Logout failed. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
}

export default LogoutButton;
