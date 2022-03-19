import { useState, useEffect } from 'react';
import { getStarshipDetails } from '../../services/api-calls';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  let location = useLocation()

  useEffect(()=> {
    getStarshipDetails(location.state.starshipCard.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
    return () => {
      setStarshipDetails([])
    } 
  }, [location.state.starshipCard.url]) 
  
  return ( 
    <>
    {starshipDetails.length ? 
    <div className='ship-card'>
    <div>
      <h1>STARWARS STARSHIP</h1>
        <h3>Name: {starshipDetails.name}</h3>
        <h3>Model: {starshipDetails.model}</h3>
        <h3># of Crew Members: {starshipDetails.crew}</h3>
      </div>
      <Link to="/starship">
      <button>Back to Starships</button>
      </Link>
    </div>
    : <h2>loading...</h2>}
    </>
  );
}

export default StarshipDetails;
