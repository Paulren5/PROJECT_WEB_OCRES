import React from 'react'
import { useEffect, useState } from 'react';

import { getFormattedWeatherData } from './WeatherService'
import Infos from './Infos'

const Meteo = () => {
    const [weather, setWeather] = useState(null);
  const [units] = useState('metric');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('paris');
      setWeather(data);
    };
    fetchWeatherData();
  }, [])

  return (
    <div>
         {
          weather && (
            <div className='container'>

              <div className='section section__temperature'>
                <div className='icon'>
                  <h3>{`${weather.name}, ${weather.country} `}</h3>
                  <img src={weather.iconURL} alt='weatherIcon' />
                  <h3>{weather.description}</h3>
                </div>
                <div className='temperature'>
                  <h1>{`${weather.temp.toFixed()} °C`}</h1>
                </div>
              </div>


              <Infos weather={weather} units={units} />




            </div>
          )
        }
    </div>
  )
}

export default Meteo