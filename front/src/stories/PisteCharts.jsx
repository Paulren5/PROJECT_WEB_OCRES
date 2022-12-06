import React from 'react';
import BarChart from 'react-easy-bar-chart';
import axios from 'axios';
import './PisteCharts.css';



//component d'affichage du graphe de frequentation des pistes
export default class PisteChart extends React.Component {
    ///////////////////////////////////////////////////Constructeur/////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            data: [{
                title: "Maths",
                value: 0,
                color: "#196f3d",
            }
            ]
        };

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    ///////////////////////////////////////////////////methode de react pour recupérer les donées d'une api/////////////////////////////////////////////////////////////
    componentDidMount = () => {
        this.getPistes();
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////Récupération de l'ensemble des frequentation de piste/////////////////////////////////////////////////////////////
    getPistes = () => {
        axios.get('http://localhost:8080/api')
            .then((response) => {
                const freqPiste = response.data.map(({ title, value, color }) => ({ title, value, color }));
                console.log(freqPiste);
                this.setState({ data: freqPiste });
                console.log('Donnee recuperee');
            })
            .catch(() => {
                console.log('erreur de recuperation des donnees');
            });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////Affichage du graphe////////////////////////////////////////////////////////////
    AffGraphe = (dataP) => {

        return (
            <div style={{ width: "10px", marginLeft: "30px", marginBottom: "5%" }}>

                <BarChart
                    xAxis='frequentation des pistes'
                    yAxis="personnes"
                    height={500}
                    width={800}

                    data={dataP}
                />
            </div>
        );
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React Bar Chart!</h1>
                </header>
                {this.AffGraphe(this.state.data)}
                { }
            </div>
        );
    }
}