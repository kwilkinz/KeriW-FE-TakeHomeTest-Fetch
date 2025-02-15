import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DogCard = ( {dog} ) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="{dog.src}" className="card-img-top"  alt={dog.name}/>
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <p className="card-text">Breed: {dog.breed}</p>
                <p className="card-text">Age: {dog.age}</p>
                <button className="btn btn-primary">Favorite</button>
            </div>
        </div>
    );
};

export default DogCard;