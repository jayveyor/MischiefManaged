import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

// class Gryffindor extends React.Component {
//     constructor (props) {
//         super();
        
const Gryffindor = (props) => {
    // return ( 
    
    //     }
    // render() {
        {console.log(props.characters)}
        {props.characters.map((character) =>{
            console.log(character)
        })};
        return (
            <div>
            </div>
        )
    // }
    
}



export default Gryffindor;