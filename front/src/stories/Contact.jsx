//download library
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
     const form = useRef();
     //to have access to my key from emailjs
     const sendEmail =(e)=> {
     e.preventDefault();

     emailjs.sendForm('service_lekfvt8', 'template_nld7z2b',
      form.current, 'xt3lDkQ4mt4pNRjeZ')
     .then((result) => {
        console.log(result.text);
     }, (error) => {
        console.log(error.text);
     });
     e.target.reset()
     };
  return (
    <section>
        <div className='container'> 
    <h2 className='--text-center'> Contact Us</h2>
     <form ref={form} onSubmit={sendEmail}
      className='--form-control  '>
        <input type="text"
        placeholder='Full Name' 
        name='user_name' required/>
        <input type="email"
        placeholder='Email' 
        name='user_email' required/>
        <input type="text"
        placeholder='Subject' 
        name='subject' required/>
        <textarea name='message' 
        cols="30" rows="10"></textarea>
        <button type='submit' className='--btn--btn-primary'>
            Send Message
        </button>
     </form>
    </div>
    </section>
  )
}

export default Contact