import React from 'react';
import './Neige.css';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(
  Title, Tooltip, LineElement,
  Legend, CategoryScale, LinearScale,
  PointElement, Filler
)

const Neige = () => {
  //modele sur lequel notre graphique va prendre forme à l'aide de notre API
  const [data, setData] = useState({
    labels: ["jan"],
    datasets: [
      {
        label: "First Dataset",
        data: [],
        backgroundColor: "yellow",
        borderColor: ' green',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true,
        drawBorder: false
      }
    ],
  })


  useEffect(() => {
    const arr = [];
    fetch('http://localhost:8082/neige')
      .then(response => response.json())
      .then(json => {
        console.log("json", json)
        json.map((item, index) => {
          arr.push(item.cm)

        })


        setData({
          labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
          datasets: [
            {
              label: "Epaisseur en cm",
              data: arr,
              backgroundColor: "grey",
              borderColor: ' green',
              tension: 0.4,
              fill: true,
              pointStyle: 'rect',
              pointBorderColor: 'blue',
              pointBackgroundColor: '#fff',
              showLine: true,
              drawBorder: false
            }
          ],


        })
      }



      )
    console.log("arr", arr)




  }, [])

  return (
    <div className='neige'>
      <div className='neigeInfo'>
        <h2>Evolution de l'epaisseur de la neige en cm</h2>
        <Line data={data}> </Line>

      </div>

    </div>

  );
}

export default Neige