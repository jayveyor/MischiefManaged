import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chart from 'Chart.js';
import PropTypes from 'prop-types';




const Gryffindor = (props) => {


    return (
        <React.Fragment>
                {props.characters.map((character) =>{
                    let gryffindor;
                    let characterBio;

                    characterBio = props.characterBio(character);
                    if (character.house === "Gryffindor") {
                        gryffindor = (characterBio)

                    } 
                console.log(character)
                    
                    return (
                        <div>
                            {gryffindor}
                        </div>
                        )
                    })

                });
    </React.Fragment>
    
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