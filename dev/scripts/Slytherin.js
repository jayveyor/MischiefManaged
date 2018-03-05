import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

const Slytherin = (props) => {
       return (
            
            <div>
        {props.characters.map((character) =>{
            let Slytherin;
           let characterBio;
           characterBio = props.characterBio(character);
        if (character.house === "Slytherin") {
            Slytherin = (characterBio)
            } 
            return (
                <div>
                    {Slytherin}
                </div>
            )
        })
    }
    
            </div>
        )
}

export default Slytherin;