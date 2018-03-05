import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

const Hufflepuff = (props) => {
   return (
            
            <div>
        {props.characters.map((character) =>{
            let hufflepuff;
           let characterBio;
           characterBio = props.characterBio(character);
        if (character.house === "Hufflepuff") {
            hufflepuff = (characterBio)
            } 
            return (
                <div>
                    {hufflepuff}
                </div>
            )
        })
    }
    
            </div>
        )
}

export default Hufflepuff;