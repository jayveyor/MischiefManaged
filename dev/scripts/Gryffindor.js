import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Chart from './Chart';
      


let deathEaterCount = 0;
let DACount = 0;
let unaffiliatedCount = 0;
const Gryffindor = (props) => {
    return (
            
            <div>
        {props.characters.map((character) =>{
            // console.log(character)
            let gryffindor;
           let characterBio;
           characterBio = props.characterBio(character);
            if (character.house === "Gryffindor" && character.dumbledoresArmy === true) {
                DACount = DACount + 1;
                
            } else if (character.house === "Gryffindor" && character.deathEater === true) {
                deathEaterCount = deathEaterCount + 1;
            } else {
                unaffiliatedCount = unaffiliatedCount + 1;
            }

                gryffindor = (characterBio)
                
                // console.log(deathEaterCount);
                console.log(DACount);
                // console.log(unaffiliatedCount);
                // console.log(character)

            return (
                <div>
                    {gryffindor}
                </div>
            )
        })
    }
    
            </div>
        )
}


// if (character.dumbledoresArmy === true) {
//     // console.log(`I am good`);
//     DACount = DACount + 1;
// } else if (character.deathEater === true) {
//     // console.log(`I am evil`);
//     deathEaterCount = deathEaterCount + 1;
// } else {
//     // console.log(`unaffiliated`)
//     unaffiliatedCount = unaffiliatedCount + 1;
// }


// const Gryffindor = (props) => {

//     const gryffinStudents = props.characters.map((character) => {
//         if (character.house === "Gryffindor") {
//             return character;
//         }
//     })
//     return (
//         <React.Fragment>
//             {gryffinStudents.map((character) => {
//                 characterBio = props.characterBio(character);
//                 console.log(character)
//                 return (
//                     <div>
//                         {characterBio}
//                     </div>
//                 )
//             } 
                    
//         )}

//     </React.Fragment>
//     )};


export default Gryffindor