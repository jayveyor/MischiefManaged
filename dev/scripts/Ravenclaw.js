import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

const Ravenclaw = (props) => {
       return (
            
            <div>
        {props.characters.map((character) =>{
            let Ravenclaw;
           let characterBio;
           characterBio = props.characterBio(character);
        if (character.house === "Ravenclaw") {
            Ravenclaw = (characterBio)
            } 
            return (
                <div>
                    {Ravenclaw}
                </div>
            )
        })
    };
    
            </div>
        )
}

export default Ravenclaw;