import "./contact.scss"
import { useState,useRef } from "react";
import emailjs from "emailjs-com"


export default function Contact() {
    
    
    const [message, setMessage] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
      emailjs.sendForm('service_hqj1sw9', 'template_6k7u63e', e.target, 'user_CpukEbBVp85MGpwqcaBcM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };
    return (
        
        
        <div className="contact" id="contact">
            
            
            <div className="left">
                <img src="assets/shake.svg" alt = ""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    
                    <input name = "from_name" type="text" placeholder="Email" />
                    
                    <textarea name = "message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    );
  }
