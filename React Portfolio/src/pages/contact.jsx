import React, { useState, useRef } from 'react';
import { Alert } from 'react-bootstrap';

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // TODO: send data to server
    console.log(data);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    formRef.current.reset();
  };

  return (
    <div>
      <h2 className='display-1 fw-normal mb-4'>contact.</h2>
      <p className='fs-3'>Let's get connected!</p>
      {showAlert && (
        <Alert
          className='fs-5'
          variant='success'
          onClose={handleCloseAlert}
          dismissible
          style={{
            backgroundColor: '#f9b460',
            border: 'none',
            color: 'white',
            width: '500px',
            marginBottom: '15px',
          }}
        >
          Form submitted successfully!
        </Alert>
      )}
      <form
        ref={formRef}
        className='contact-form'
        style={{ display: 'flex', flexDirection: 'column', width: '500px' }}
        onSubmit={handleSubmit}
      >
        <label className='fs-5' htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          className='mb-2 custom-input'
          required
        />
        <label className='fs-5' htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          className='mb-2 custom-input'
          required
        />
        <label className='fs-5' htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          className='mb-2 custom-input'
          required
          style={{ height: '200px'}}
        ></textarea>
        <button type='submit' className='fs-5 button'>Connect</button>
      </form>
    </div>
  );
}