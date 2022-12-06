import React from 'react';
import axios from 'axios';
import './AffRestos.css'
import Resto from './resto';


export default class AffRestos extends React.Component {

    ///////////////////////////////////////////////////Constructeur/////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: "",
            restos: []
        };

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////methode de react pour recupérer les donées d'une api/////////////////////////////////////////////////////////////
    componentDidMount = () => {
        this.getRestos();
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////Récupération de l'ensemble des restaurants/////////////////////////////////////////////////////////////
    getRestos = () => {
        axios.get('http://localhost:8081/tousRestos')
            .then((response) => {
                const data = response.data;
                this.setState({ restos: data });
                console.log('Donnees recuperees');
            })
            .catch(() => {
                console.log('erreur de recuperation des donnees');
            });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////Affichage des restaurant par prix croissant/////////////////////////////////////////////////////////////
    displayRestosPrix = (restos) => {
        if (!restos.length) {
            console.log("vide");
            return null;
        }


        const restosTrie = restos;
        restosTrie.sort((a, b) => (a.prixMoyen > b.prixMoyen ? 1 : -1));
        return restosTrie.map((restosTrie, index) => (


            <Resto
                nom={restosTrie.nom}
                urlImage={restosTrie.urlImahge}
                note={restosTrie.note}
                prixMoyen={restosTrie.prixMoyen}
                ouverture={restosTrie.ouverture}
                fermeture={restosTrie.fermeture}

            />
        ));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////Affichage des restaurant par note croissant/////////////////////////////////////////////////////////////
    displayRestosNote = (restos) => {
        if (!restos.length) {
            console.log("vide");
            return null;
        }


        const restosTrie = restos;
        restosTrie.sort((a, b) => (a.note > b.note ? 1 : -1));

        return restosTrie.map((restosTrie, index) => (
            <Resto
                nom={restosTrie.nom}
                urlImage={restosTrie.urlImage}
                note={restosTrie.note}
                prixMoyen={restosTrie.prixMoyen}
                ouverture={restosTrie.ouverture}
                fermeture={restosTrie.fermeture}

            />
        ));
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////methode permettant le choix entre les prix et les notes///////////////////////////////////////
    choix = (restos) => {
        if (this.props.data === "Meilleure note") {

            return this.displayRestosNote(restos);
        }
        else {
            return this.displayRestosPrix(restos);
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    render() {
        return (
            <div>
                <div className="blog-">
                    {
                        this.choix(this.state.restos)
                    }
                </div>
            </div>
        );
    }
}