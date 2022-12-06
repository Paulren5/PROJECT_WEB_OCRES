
//import background pictures
import coldbg from './pictures/cold.jpg'
import React from 'react';


//on import nos composants
import SearchBar from './Components/SearchBar';
import MenuDeroulant from './Components/MenuDeroulant';
import PisteChart from './Components/PisteCharts';
import Neige from './Components/Neige';
import Geo from './Components/Geo';
import Contact from './Components/Contact';
import Meteo from './Components/Meteo';

function App() {

  return (
    //using background pictures we imported
    <div className="app" style={{ backgroundImage: `url(${coldbg})` }}>
      <div className='overlay'>
        {/*meteo de la ski station*/}
        <Meteo />
        {/*map de la ski station*/}
        <div className='geolocalisation'>
          <Geo />
        </div>

        {/*data a propros de l'evolution de la neige par jour au ski station*/}
        <div className='infoNeige'>
          <Neige />
        </div>

        {/*mail box pour contacter notre ski station*/}
        <div className='infoMail'>
          <Contact />
        </div>

        {/*Search bar pour rechercher une piste */}
        <SearchBar />


        {/*Menu deroulant pour voir les notes des restaurants */}
        <MenuDeroulant />

        {/*Bar graphique permettant de savoir la frequentation des pistes  */}
        <PisteChart />

      </div>

    </div>

  );
}

export default App;
