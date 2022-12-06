import React from 'react';
import axios from 'axios';
import './SearchBar.css';



//component de la bar de recherche de pistes
export default class Searchbar extends React.Component {
    ///////////////////////////////////////////////////Constructeur/////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            rechercheValue: "chanrossa",
            nom: "",
            piste: []
        };

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////methode de react pour recupérer les donées d'une api/////////////////////////////////////////////////////////////
    componentDidMount = () => {
        this.getPiste();
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////methode permettant de lancer la recherche////////////////////////////////////////////////////////////////////
    chercher = (event) => {
        event.preventDefault();
        this.getPiste();
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////on vide la barre de recgherche/////////////////////////////////////////////////////////////////////
    resetSearch = () => {
        this.setState({
            rechercheValue: ''
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    ///////////////////////////////////////////////////Récupération de l'ensemble des restaurants/////////////////////////////////////////////////////////////
    getPiste = () => {
        axios.get(`http://localhost:8080/${this.state.rechercheValue}`)
            .then((response) => {
                const data = response.data;
                this.setState({ piste: data });
                console.log(data);
                console.log(this.state.piste);
                console.log('Données recuperees');
            })
            .catch(() => {
                console.log('erreur de recuperation des données');
            });
        this.resetSearch();
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    render() {
        return (
            <div className='searchbar'>
                <form onSubmit={this.chercher}>
                    <input
                        type="submit hidden"
                        name="recherche"
                        placeholder='entrer une piste'
                        value={this.state.rechercheValue}
                        onChange={(event) => this.setState({ rechercheValue: event.target.value })}

                    />

                </form>


                <div className="blog">
                    <h3>{this.state.piste.title}</h3>
                    <div> Couleur : {this.state.piste.couleur}</div>
                    <div>Horaire d'ouverture : {this.state.piste.ouverture} - {this.state.piste.fermeture}</div>
                    <div> </div>



                </div>
            </div>
        );
    }
}