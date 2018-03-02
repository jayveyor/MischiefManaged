import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';



// class Gryffindor extends React.Component {
//     constructor (props) {
//         super(props);
        
const Gryffindor = (props) => {
    
    //     }
    // render() {
        // {console.log(props.characters)}
           
        return (
            
            <div>
        {props.characters.map((character) =>{
            // console.log(character)
        let characterBio;
        characterBio = (
        <div>
        
        <h2>{character.name}</h2>
        <h6 className={character.house}>{character.house}</h6>
      
          <h6>{character.bloodStatus}</h6> 
          <h6>{character.wand}</h6>
        
          <h6>{character.patronus}</h6>
          {/* <h6>{affiliation}</h6> */}
        </div>
      )
        let gryffindor;
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







    //     {console.log(props.characters)}
    //     return (
    //         <div>
    //             <p>Gryffindor</p>
    //         </div>
    //     );
    // };
    

export default Gryffindor;