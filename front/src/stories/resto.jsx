import React from 'react';
import './AffRestos.css';
//import { Image } from 'react-native';
//import Img from `C:/Documents/ING4/Semestre1/web/GitHub/dashboard_web/front/src/images/${this.props.urlImage}.png`;



//component d'affichage du graphe de frequentation des pistes
export default class resto extends React.Component {

    constructor(props) {
        super(props);
    };



    render() {
        return (
            <div className='affresto'>
                <h3>{this.props.nom}</h3>

                {/*<img src={Img} />*/}
                {/*console.log(`C:/Documents/ING4/Semestre1/web/GitHub/dashboard_web/front/src/images/${this.props.urlImage}.jpg`)*/}

                <div>{this.props.note}/5</div>
                <div>Prix moyen : {this.props.prixMoyen} €</div>
                <div>Horaires d'ouverture : {this.props.ouverture} - {this.props.fermeture}</div>
                <div> {"\n"}</div>
            </div>
        );
    }

};