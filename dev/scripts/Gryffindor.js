import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

// class Gryffindor extends React.Component {
//     constructor (props) {
//         super(props);
        
const Gryffindor = (props) => {
    // return ( 
    
        // }
    // render() {
        // {console.log(props.characters)}
    
        return (
            
            <div>
        {props.characters.map((character) =>{
            // console.log(character)
        let gryffindor;
           let characterBio;
           characterBio = props.characterBio(character);
        if (character.house === "Gryffindor") {
            gryffindor = (characterBio)
            } 
            console.log(gryffindor)

            return (
                <div>
                    {gryffindor}
                </div>
            )
        })
    };
    
            </div>
        )
    // }
}



export default Gryffindor;