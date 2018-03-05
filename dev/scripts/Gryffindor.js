import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chart from './Chart';




class Gryffindor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deathEaterCount :1,
            DACount : 1, 
            unaffiliatedCount : 1,
            characters: this.props.characters,
        }
    }
    componentWillReceiveProps(props) {   
        let charState = Array.from(props.characters);
        charState = charState.filter((character) => {
            return character.house === 'Gryffindor';
        });
        

        charState.forEach((char) => {

            
            if (char.deathEater === true) {
                this.setState({
                    deathEaterCount: this.state.deathEaterCount++
                });
            }
            else if (char.dumbledoresArmy === true) {
                this.setState({
                    DACount: this.state.DACount++
                })
            }
            else {
                this.setState({
                    unaffiliatedCount: this.state.unaffiliatedCount++
                })
            }

        });

        this.setState({
            characters: charState
        });
    }
    render() {
        return (
            <div>
                {this.state.characters.map((character) => {
                    return (
                        <div>{this.props.characterBio(character)}</div>
                    )
                })}
                <Chart DACount={this.state.DACount} deathEaterCount={this.state.deathEaterCount} unaffiliatedCount={this.state.unaffiliatedCount} />
             </div>
        )
    }
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