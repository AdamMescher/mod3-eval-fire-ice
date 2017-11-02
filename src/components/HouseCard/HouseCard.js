import React from 'react';

const HouseCard = () => {
   return(
     <article className="house-card-container">
       <h3>HOUSE NAME: </h3>
       <p>FOUNDED: </p>
       <p className='house-card-list-title'>SEATS: </p>
       <ul className='house-card-seats-list'></ul>
       <p className='house-card-list-title'>TITLES: </p>
       <ul className='house-card-titles-list'></ul>
       <p>COAT OF ARMS: </p>
       <p className='house-card-list-ancestral-weapons'>ANCESTRAL WEAPONS: </p>
       <ul className='house-card-ancestral-weapons-list'></ul>
       <p className='house-card-words'>WORDS: </p>
    </article>
   )
}

export default HouseCard;

// name, founded, seats, titles, coatOfArms, ancestralWeapons, words