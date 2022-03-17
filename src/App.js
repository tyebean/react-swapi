import './App.css';
// * using routes to make each starship card clickable
// import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div>
      <StarshipList />
      {/* <Routes>
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes> */}
    </div>
  );
}

export default App;
