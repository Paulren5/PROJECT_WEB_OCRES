import React from 'react';
import AffRestos from './AffRestos';
import './MenuDeroulant.css';


//composant de menu deroulant
export default class MenuDeroulant extends React.Component {

    ///////////////////////////////////////////////////Constructeur/////////////////////////////////////////////////////////////
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: "Meilleure note"
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        const handleChange = (e) => {
            this.setState({ selectedValue: e.target.value })
        }
        return (
            <div className='menu'>
                <select onChange={(e) => handleChange(e)}>
                    {this.props.options.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                </select>
                <div className='restoaff'>
                    <AffRestos data={this.state.selectedValue} />
                </div>
            </div>
        );
    }
}

//elements du menu deroulant
MenuDeroulant.defaultProps = {
    options: ["Meilleure note", "Meilleur Prix"]
}
