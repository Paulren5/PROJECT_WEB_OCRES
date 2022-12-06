import React from 'react';
import axios from 'axios';




export default class UpdatePiste extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //movies: [],
            couleurPiste: "",
            title: "",
            value: "",
        };

    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };



    resetForm = () => {
        this.setState({
            couleurPiste: "",
            title: "",
            value: "",
        });
    };


    choixCouleur = () => {
        if (this.state.couleurPiste === "verte") {
            return {
                couleur: this.state.couleurPiste,
                value: this.state.value,
                color: "#196f3d"
            };
        }
        else if (this.state.couleurPiste === "bleue") {
            return {
                couleur: this.state.couleurPiste,
                value: this.state.value,
                color: "#1f618d"
            };
        }
        else if (this.state.couleurPiste === "rouge") {
            return {
                couleur: this.state.couleurPiste,
                value: this.state.value,
                color: "#a93226"
            };
        }
        else if (this.state.couleurPiste === "noire") {
            return {
                couleur: this.state.couleurPiste,
                value: this.state.value,
                color: "#000000"
            };

        }
    }


    updatePiste = (payload) => {
        axios({
            url: `http://localhost:8080/updt/${this.state.title}`,
            method: 'post',
            data: payload
        })
            .then(() => {
                console.log('mis a jour reussie');
                this.resetUserInputs();
            })
            .catch(() => {
                console.log('erreur lors de la mise a jour');
            });
    }


    update = (event) => {
        event.preventDefault();
        this.choixCouleur();

        const payload = this.choixCouleur();

        this.updatePiste(payload);
    };






    render() {

        //console.log('State', this.state);

        return (
            <div>
                <div onSubmit={this.update}>
                    <h2>Modifier la piste : </h2>
                    <form>
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
                                name="couleurPiste"
                                placeholder="couleur de la piste"
                                value={this.state.couleurPiste}
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

                        <button>Modifier la piste</button>
                    </form>


                </div>

            </div>

        );
    }
}