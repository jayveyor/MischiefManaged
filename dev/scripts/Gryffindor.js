import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
      
const Gryffindor = (props) => {
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
}







    //     {console.log(props.characters)}
    //     return (
    //         <div>
    //             <p>Gryffindor</p>
    //         </div>
    //     );
    // };
    

export default Gryffindor;