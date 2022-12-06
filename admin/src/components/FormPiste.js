import React from 'react';
import axios from 'axios';



//component permettant l'ajout d'une piste
export default class FormPiste extends React.Component {
    //////////////////////////////////////////////////////////////////////////////////////////////Constructeur///////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            couleurPiste: "",
            title: "",
            ouverture: "",
            fermeture: "",
            value: "",
        };
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////methode pour recuperer la valeur des champs///////////////////////////////////////////////////////////////
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////methode permettant de choisir le code de la bonne couleur/////////////////////////////////////////////
    choixCouleur = () => {
        if (this.state.couleurPiste === "verte") {
            return {
                title: this.state.title,
                couleur: this.state.couleurPiste,
                ouverture: this.state.ouverture,
                fermeture: this.state.fermeture,
                value: this.state.value,
                color: "#196f3d"
            };
        }
        else if (this.state.couleurPiste === "bleue") {
            return {
                title: this.state.title,
                couleur: this.state.couleurPiste,
                ouverture: this.state.ouverture,
                fermeture: this.state.fermeture,
                value: this.state.value,
                color: "#1f618d"
            };
        }
        else if (this.state.couleurPiste === "rouge") {
            return {
                title: this.state.title,
                couleur: this.state.couleurPiste,
                ouverture: this.state.ouverture,
                fermeture: this.state.fermeture,
                value: this.state.value,
                color: "#a93226"
            };
        }
        else if (this.state.couleurPiste === "noire") {
            return {
                title: this.state.title,
                couleur: this.state.couleurPiste,
                ouverture: this.state.ouverture,
                fermeture: this.state.fermeture,
                value: this.state.value,
                color: "#000000"
            };

        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////methode permettant de nettoyer les champs/////////////////////////////////////////////////
    resetForm = () => {
        this.setState({
            couleurPiste: "",
            title: "",
            ouverture: "",
            fermeture: "",
            value: "",
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////methode permettant d'ajouter une piste/////////////////////////////////////////////////////
    submit = (event) => {
        event.preventDefault();
        this.choixCouleur();

        const payload = this.choixCouleur();
        console.log("payload");
        console.log(payload);

        axios({
            url: 'http://localhost:8080/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data sent to server');
                this.resetUserInputs();
            })
            .catch(() => {
                console.log('internal server error');
            });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    render() {
        return (
            <div>
                <div onSubmit={this.submit}>
                    <h2>Ajouter une piste</h2>
                    <form>
                        <div className="form-input">
                            <input
                                type="text"
                                name="couleurPiste"
                                placeholder="couleur de la piste"
                                value={this.state.couleurPiste}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-input">
                            <input
                                type="text"
                                name="title"
                                placeholder="nom de la piste"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-input">
                            <input
                                type="text"
                                name="ouverture"
                                placeholder="ouverture de la piste"
                                value={this.state.ouverture}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-input">
                            <input
                                type="text"
                                name="fermeture"
                                placeholder="fermeture de la piste"
                                value={this.state.fermeture}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-input">
                            <input
                                type="text"
                                name="value"
                                placeholder="skieurs moyen"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button>Ajouter la piste</button>
                    </form>
                </div>
            </div>
        );
    }
}