import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';



// class Gryffindor extends React.Component {
//     constructor (props) {
//         super(props);
        
const Gryffindor = (props) => {
    
    {props.characters.map((character) =>{
        // console.log(character);
        if(character.house === "Gryffindor") {
            // console.log(character);
            return character;

        }

    })};
    return (
        <div>
        <Link to={`/gryffindor`}> 
            <h3>Gryffindor</h3>
            </Link>
        </div>
    )
};









    //     {console.log(props.characters)}
    //     return (
    //         <div>
    //             <p>Gryffindor</p>
    //         </div>
    //     );
    // };
    

export default Gryffindor;