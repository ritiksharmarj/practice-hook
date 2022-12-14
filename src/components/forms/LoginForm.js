import React, { useState } from 'react';

const LoginForm = () => {
  // Store email and password in the string
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [allUserEntries, setAllUserEntries] = useState([]);

  const submitForm = (e) => {
    // To stop page reload
    e.preventDefault();

    const newUser = {
      id: new Date().getTime().toString(),
      email,
      password,
    };

    // Store all the entries inlcluding new user entries
    setAllUserEntries([...allUserEntries, newUser]);

    // Empty the input fields after submit the form
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <h2 className='card-heading'>
            Get started
            <small>Login to access your account</small>
          </h2>
        </div>

        <form className='card-form' onSubmit={submitForm}>
          {/* Email Field  */}
          <div className='input'>
            <input
              type='text'
              className='input-field'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className='input-label'>Email</label>
          </div>

          {/* Password Field  */}
          <div className='input'>
            <input
              type='password'
              className='input-field'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className='input-label'>Password</label>
          </div>

          {/* Login Button  */}
          <div className='action'>
            <button className='action-button' type='submit'>
              Log in
            </button>
          </div>
        </form>

        {/* Terms and Conditions  */}
        <div className='card-info'>
          <p>
            By signing up you are agreeing to our{' '}
            <a href='#'>Terms and Conditions</a>
          </p>
        </div>
      </div>

      <>
        {allUserEntries.map((item) => {
          const { id, email, password } = item;
          return (
            <div className='card' key={id}>
              <p>Email: {email}</p>
              <p>Password: {password}</p>
            </div>
          );
        })}
      </>
    </>
  );
};

export default LoginForm;
