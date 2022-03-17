import { getAllStarships } from '../../services/api-calls';
import { Link } from 'react-router-dom'
// allows us to link to new pages

const Starships = (props) => {
  return ( 
    <div>
      This is Starships
    </div>
  );
}

export default Starships;

// Obtain all the starships from the API and render in  a clickable  
//(imported from react-router-dom) for each starship. You must style the link to look like a button and contain the text of the starship’s name. For example: 