"use client"

import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Sign-up logic here
      console.log('Sign-Up Data:', formData);
    } else {
      // Sign-in logic here
      console.log('Sign-In Data:', {
        email: formData.email,
        password: formData.password
      });
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: '',
      username: '',
      password: '',
      country: ''
    });
  };

  return (
    <div>
      <Hero />
      <div className='flex items-center justify-center flex-col min-h-[40vh] py-4'>
        <h2 className='text-2xl font-bold pb-4'>{isSignUp ? 'Customer Sign Up' : 'Customer Sign In'}</h2>


        <form className='flex flex-col w-[25%] gap-4 min-h-full border p-4 rounded'
          onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label>Email</label>
            <input
              className='border h-10 rounded px-2'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {isSignUp && (
            <>
              <div className='flex flex-col'>
                <label>Name</label>
                <input
                className='border h-10 rounded px-2'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label>Country</label>
                <select
                  className='border h-10 rounded px-2'
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Nigeria">South Africa</option>
                  <option value="Nigeria">Ghana</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </>
          )}
          <div className='flex flex-col'>
            <label>Password</label>
            <input
              className='border h-10 rounded px-2'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className='border h-10 rounded bg-[#4a6b92] text-white'
          type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <button onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>

      <Footer />
    </div>

  );
};

export default AuthForm;