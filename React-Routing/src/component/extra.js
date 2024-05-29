import React from 'react';
import React, { useState } from 'react';
import "./../component/Register.css";

function Register() {
    const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log(form);
    };
  return (
    <div class="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
  <div class="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
    <div class="max-w-xl mb-6">
      
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
        Register US
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        <h1>Simple & Fast</h1>
        <h2>Payment</h2>
      </p>
    </div>
    <div class="flex items-center">
      <div class="btn-group">
      <a href="/" class="btn btn-dark active" aria-current="page">Learn More--</a>
 
      </div>
     
    </div>
  </div>
  <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <label>
          <input type="checkbox" required />
          I agree to all statements in <a href="/terms">Terms of Service</a>
        </label>
        <button type="submit">Sign Up</button>
        <p>
          Have already an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
</div>
  )
}

export default Register