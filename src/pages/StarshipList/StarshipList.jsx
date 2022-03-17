import { useEffect, useState } from 'react';
import { getStarshipList } from '../../services/api-calls';
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getStarshipList()
    .then(listData => setStarships(listData.results))
  }, [])

  return ( 
    <div>
      <h1>STARWARS STARSHIPS</h1>
      <div className='icon-container'>
      {starships.map((starshipCard, index) => (
        <Link to='/starship' state={{starshipCard}} key={index}>
          <div className='ship-card'> 
            {starshipCard.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default StarshipList;

// 3. Obtain all the starships from the API and render in  a clickable  
//(imported from react-router-dom) card for each starship. 

// You must style the link to look like a button and contain the text of the starship’s name. For example: 