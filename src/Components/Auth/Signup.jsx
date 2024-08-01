// Signup.js
import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import MyContext from '../Context/MyContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser]=useState('');
  const [error, setError] = useState('');


  const {setToken}=useContext(MyContext);

  const navigate=useNavigate();

  const handleSignUp = async () => {
    try {
     const res= await createUserWithEmailAndPassword(auth, email, password);
      setError('');
      const username=res.user;

      updateProfile(username,{
        displayName:user,
      })

     setEmail("");
     setPassword('')
     setUser('');

     localStorage.setItem('authToken', res.user.accessToken);
     setToken(res.user.accessToken);

     navigate('/')


    
      // Redirect or show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Create Account</h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <button
          onClick={handleSignUp}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-600">
  Already have an account?{' '}
  <Link to="/login" className="text-blue-500 hover:underline">
    Login
  </Link>
</p>

      </div>
    </div>
  );
};

export default Signup;
