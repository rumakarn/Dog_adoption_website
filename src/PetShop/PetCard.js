import React, {useState} from "react";
import "./PetShop.css";
function PetCard(props) {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        
        <div className="cards">
            {modal && (<div className="modal">
                        <div onClick={toggleModal} className="overlay">  </div>
                        <div className="modal-content">
                    <h2 >GREAT CHOICE!</h2>
                    <p>{props.name} is a { props.temperament} dog.
                    <br /><br/>
                        Buy Your Perfect Canine Match at Affordable Adoption Price .
                        <br />
                        For further interaction and adoption procedure:<br/>
                        </p>
                           <button className="book-modal">Book a session.</button> 
                            <button className="close-modal" onClick={toggleModal}>Close</button>
                        </div>
                        
                    </div>)}
            <div className="card">
                <img src={props.image} alt="DoggoImg" className="card_img"></img>
                <div className="card_info">
                    <span className="Dog_name">{props.name}</span>
                    <br />
                    <span className="Dog_info">Breed: {props.breed}</span>
                    <br />
                    <span className="Dog_info">Life Span: {props.life}</span>
                    
                    <button onClick={toggleModal} className="btn-modal">Click to adopt me! </button>
                    
                    
                    </div>
            </div>
        </div>
        
    )
;

}
export default PetCard;