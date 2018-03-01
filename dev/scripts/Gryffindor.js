import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

// class Gryffindor extends React.Component {
//     constructor () {
//         super();
//         this.state = {


//         };
//     }

// }
const Gryffindor = (props) => {
    return ( 
        <div>
            {props.characterBio}
        </div>
    )
}

// render() {
//     return (
//         <div>
//             {props.gryffindor}
//         </div>
//     )
// }
export default Gryffindor;