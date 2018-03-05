import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chart from './Chart';

class Slytherin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deathEaterCount: 0,
            DACount: 0,
            unaffiliatedCount: 0,
            characters: this.props.characters,
        }
    }
    componentWillReceiveProps(props) {
        let charState = Array.from(props.characters);
        charState = charState.filter((character) => {
            return character.house === 'Slytherin';
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

export default Slytherin;