export default function Contact() {

  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      //TODO: send data to server
      console.log(data);
  }

  return (
      <div>
          <h2 className='display-1 fw-normal mb-4'>contact.</h2>
          <p className= 'fs-3'>Let's get connected!</p>
          <form className='contact-form' style={{display:'flex', flexDirection:'column', width: '500px'}} onSubmit={handleSubmit}>
              <label className='fs-5' htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' className='mb-2 custom-input' required />
              <label className='fs-5' htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' className='mb-2 custom-input' required />
              <label className='fs-5' htmlFor='message'>Message:</label>
              <textarea id='message' name='message' className='mb-2 custom-input' required style={{height: '200px'}}>
              </textarea>
              <button type='send' className='fs-5 button'>Send</button>
          </form>
      </div>
  )
}