// Login.js
import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../Firebase/firebase'
import MyContext from '../Context/MyContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {setToken}=useContext(MyContext);

  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
     const res= await signInWithEmailAndPassword(auth, email, password);
      setError('');
      setEmail('');
      setPassword('')
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
        <h1 className="mb-4 text-2xl font-bold">Log In Account</h1>
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
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <p className="mt-4 text-center text-gray-600">
  If you don&apos;t have an account{' '}
  <Link to="/signup" className="text-blue-500 hover:underline">
    Sign Up
  </Link>
</p>
      </div>
    </div>
  );
};

export default Login;
