import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Gryffindor extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
        }

    }
    componentDidMount() {
        axios.get(`https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f`, {
            params: {
                key: config.HPapiKey,
            }
        })
        .then(({ data }) => {
            // console.log(data[0].members);
            this.setState({
                members: data[0].members
            });
        });
    }
    
    render(){
        console.log(this.state.members);
        return (
            <div>
                {this.state.members.map((member) => {
                    return member.name
                })}
            </div>
        )
    }
}

// const Gryffindor = (props) => {
//     return ( 
//         <div>
//             {props.characterBio}
//         </div>
//     )
// }

export default Gryffindor;