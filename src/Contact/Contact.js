import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Contact.css"
const Contact = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const submit = (e) => {
        e.preventDefault();
        if (firstName.length === 0 || lastName.length === 0 ) {
            alert("Name can't be empty!")
        }
        else if (email.length === 0) {
            alert("Please provide a valid Email ID!")
        }
        else {
            alert("Form submitted!")
        }
    }
    return (
            <>
            <div className="ContactUs-main">
                <h2 className="heading" > Feel free to contact us !</h2>
                </div>
    <div className="separator">  
        <div className="form">
     <form onSubmit={submit}>
        <div className="main">
                <p> FILL YOUR DETAILS HERE. </p>
          <div className="input-fields">
          <input type="text"
            placeholder="Enter your first name"
             onChange={e=>setFirstName(e.target.value)}
          name="fName"/>
          <input type="text"
          placeholder="Enter your last name"
           name="lName"
           onChange={e=>setLastName(e.target.value)} />    
         
          <input type="text"
          placeholder="Enter your email"
                    name="email"  
           onChange={e=>setEmail(e.target.value)}  />            
        <button className="submit-Button" type="submit">Submit</button>
                </div>
                </div>
            </form>
          </div> 
          <div className="guide">
                    <div className="guide-head"> A guide to donation:</div>
                    
                    <div className="list"><ul>
                        <li>Rehoming or donating your pet should be easy and stress-free both for you and your pet.</li>
                        <li>We have created a reliable, simple & free initiative to help you rehome your pet from your loving family directly to another family.</li>
                        <li>Make your pet look more attractive to potential new owners. Make sure your pet is vaccinated and checked by a veterinarian. </li>
                        <li>Be transparent/clear with the new owner. Share all the details about your pet's personality.</li>
                    </ul>
                    </div>  
                </div>   
                
    </div>

        <div className="footer">
                <div className="footer-div">  
                    <div className="first">
                        <p>WE AS AN ORGANIZATION!</p>
                        
                    </div>  
                    <div className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare purus ut orci tempor, et ultricies ipsum hendrerit. Sed mattis vestibulum tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent tincidunt risus eu diam venenatis ultrices. Aenean nisi magna, commodo ut malesuada quis, porttitor non mauris. Etiam non tincidunt dolor. Morbi bibendum aliquet metus a ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget condimentum metus. In hendrerit placerat rhoncus. Fusce dapibus nisl sem. Fusce nisi velit, sagittis sed augue ut, sodales gravida metus. Ut congue ex sed sem faucibus, quis ultrices nulla pretium.</div>
                    <div className="motto">Animal safety | Adoption | Building new homes </div>
              </div>
                <div className="footer-text"> @2023| by adoptadoggo foundation</div>
                <div className="icon-section">
                <a href={() => false}><FacebookIcon /></a>
                    <a href={() => false}><InstagramIcon /></a>
                    <a href={() => false}><TwitterIcon /></a>
                    <a href={() => false}><MailOutlineIcon /></a>
                    

                </div>
            </div>  
            
        </>
        )
    }

export default Contact;