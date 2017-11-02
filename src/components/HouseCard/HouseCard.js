import React from 'react';

const HouseCard = ({houseData}) => {
  console.log(houseData);
   return(
     <article className="house-card-container">
       <h3>{`HOUSE NAME: ${houseData.name}`}</h3>
       <p>{`FOUNDED: ${houseData.founded || 'N/A'} `}</p>
       <p className='house-card-list-title'>{`SEATS: ${houseData.seats}`}</p>
       <ul className='house-card-seats-list'></ul>
       <p className='house-card-list-title'>{`TITLES: ${houseData.titles}`}</p>
       <ul className='house-card-titles-list'></ul>
       <p>{`COAT OF ARMS: ${houseData.coatOfArms}`}</p>
       <p className='house-card-list-ancestral-weapons'>{`ANCESTRAL WEAPONS: ${houseData.ancestralWeapons}`}</p>
       <ul className='house-card-ancestral-weapons-list'></ul>
       <p className='house-card-words'>{`WORDS: ${houseData.words || 'N/A'}`}</p>
    </article>
   )
}

export default HouseCard;

// name, founded, seats, titles, coatOfArms, ancestralWeapons, words