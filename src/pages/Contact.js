import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('....')
    navigate("/")
  };
  return (
    <div>

        <h2>Contact us</h2>
        <form className='contact' onClick={handleSubmit}>
          <input type="email" placeholder='Email' maxLength={50} />
          <input className='issue-desc' type="text" placeholder='Issue description' maxLength={300} />
          <button type='submit' className='contact-btn'>Submit</button>
        </form>
      
    </div>
  )
}

