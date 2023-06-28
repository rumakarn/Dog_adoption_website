import React, { useEffect, useState } from "react";
import PetCard from "./PetCard";
import "./PetShop.css";

function PetShop() {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const res = await fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0");
                const data = await res.json();
                setDogs(data);
            }
            catch {
                console.log("error");
            }
        }
        fetchDogData();
    },[])
    return (
    
        <>
        <div className="Shop">
            <h1 className="PetShop-heading">Welcome to your dream shop!</h1>
            </div>
        <div >
            {dogs.map((val) => (
            <PetCard
              key={val.id} // Provide a unique key for each card in the array
              life={val.life_span}
              name={val.name}
              breed={val.breed_group}
              image={val.image.url}
             price={val.price}
            temperament={val.temperament}   
            />
        ))}
                </div>
              
        </>
        
           
    );

}
export default PetShop;