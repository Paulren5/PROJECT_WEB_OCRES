import React from 'react';
import axios from 'axios';



//component permettant de supprimmer une piste a partir de son nom
export default class SuppPiste extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rechercheValue: "",
            nom: "",
            piste: []
        };
    }

    //////////////////////////////////////////////////////////////////methode pour supprimer la piste//////////////////////////////////////////////
    delPiste = () => {
        axios.delete(`http://localhost:8080/${this.state.rechercheValue}`)
            .then((response) => {
                const data = response.data;
                this.setState({ piste: data });
                console.log(data);
                console.log(this.state.piste);
                console.log('Donnees recuperees');
            })
            .catch(() => {
                console.log('Erreur lors de la recuperation');
            });
        this.resetSearch();
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////methode appelant la methode de suppression/////////////////////////////////////////
    supprimer = (event) => {
        event.preventDefault();
        this.delPiste();
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////methode permettant de remettre les champs a zero////////////////////////////////////
    resetSearch = () => {
        this.setState({
            rechercheValue: ''
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    render() {
        return (
            <div>
                <h2>Supprimer la piste : </h2>
                <form onSubmit={this.supprimer}>
                    <input
                        type="text"

                        name="recherche"
                        placeholder='entrer une piste'
                        value={this.state.rechercheValue}
                        onChange={(event) => this.setState({ rechercheValue: event.target.value })}

                    />

                    <button>supprimer la piste</button>

                </form>
            </div>
        );
    }
}