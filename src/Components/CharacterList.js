import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../Actions'

class CharacterList extends Component{
    render(){
        console.log('this.props',this.props);
        return(
            <div>
            <h4>Characters</h4>
                <ul className = 'list-group'>
                    {
                        this.props.characters.map(char => {
                            return (
                                <li key = {char.id} className = 'list-group-item'>
                                <div className = 'list-item'>{char.name}</div>
                                <div className = 'list-item right-button' onClick = {() => this.props.addCharacterById(char.id)} >+ </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        characters: state.characters
    };
}

// function mapDispatchToProps(dispatch){
//    return bindActionCreators({ addCharacterById }, dispatch)
// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList)