import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Chart from './Chart';
      
// const Gryffindor = (props) => {
//     return (
            
//             <div>
//         {props.characters.map((character) =>{
//             // console.log(character)
//         let gryffindor;
//            let characterBio;
//            characterBio = props.characterBio(character);
//         if (character.house === "Gryffindor") {
//             gryffindor = (characterBio)
//             } 
//             console.log(gryffindor)

//             return (
//                 <div>
//                     {gryffindor}
//                 </div>
//             )
//         })
//     }
    
//             </div>
//         )
// }




const Gryffindor = (props) => {

    const gryffinStudents = props.characters.map((character) => {
        if (character.house === "Gryffindor") {
            return character;
        }
    })
    return (
        <React.Fragment>
            {gryffinStudents.map((character) => {
                characterBio = props.characterBio(character);
                console.log(character)
                return (
                    <div>
                        {characterBio}
                    </div>
                )
            } 
                    
        )}

    </React.Fragment>
    )};


export default Gryffindor