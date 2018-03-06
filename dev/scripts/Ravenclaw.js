import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Affiliation from './Affiliation';
import Ancestry from './Ancestry';

class Ravenclaw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deathEaterCount:0,
            DACount: 0,
            unaffiliatedCount: 0,
            muggleCount: 0,
            mixedCount: 0,
            purebloodCount: 0,
            unknownCount: 0,
            characters: this.props.characters,
            showChart: 'none',
        }
        this.hideChart = this.hideChart.bind(this);
        this.sortByAff = this.sortByAff.bind(this);
        this.sortByAnces = this.sortByAnces.bind(this);

    }
    hideChart() {
        this.setState({
            showChart: 'none'
        });
    }
    sortByAff() {
        this.setState({
            showChart: 'Affiliation'
        });
    }
    sortByAnces() {
        this.setState({
            showChart: 'Ancestry'
        });
    }
    componentWillReceiveProps(props) {
        let charState = Array.from(props.characters);
        charState = charState.filter((character) => {
            return character.house === 'Ravenclaw';
        });


        charState.forEach((char) => {

            if (char.bloodStatus === 'pure-blood') {
                this.setState((prevState, props) => {
                    return { purebloodCount: prevState.purebloodCount + 1 }
                });
            }
            else if (char.bloodStatus === 'muggle-born') {
                this.setState((prevState, props) => {
                    return { muggleCount: prevState.muggleCount + 1 }
                });
            }
            else if (char.bloodStatus === 'half-blood') {
                this.setState((prevState, props) => {
                    return { mixedCount: prevState.mixedCount + 1 }
                });
            } else {
                this.setState((prevState, props) => {
                    return { unknownCount: prevState.unknownCount + 1 }
                });
            }
            if (char.deathEater === true) {
                this.setState((prevState, props) => {
                    return { deathEaterCount: prevState.deathEaterCount + 1 }
                });
            }
            else if (char.dumbledoresArmy === true) {
                this.setState((prevState, props) => {
                    return { DACount: prevState.DACount + 1 }
                });
            }
            else {
                this.setState((prevState, props) => {
                    return { unaffiliatedCount: prevState.unaffiliatedCount + 1 }
                }); 

            }

        });

        this.setState({
            characters: charState
        });
    }
    render() {
        let Chart;
        if (this.state.showChart === 'Affiliation') {
            Chart = (<Affiliation DACount={this.state.DACount} deathEaterCount={this.state.deathEaterCount} unaffiliatedCount={this.state.unaffiliatedCount} />)
        }
        else if (this.state.showChart === 'Ancestry') {
            Chart = (<Ancestry purebloodCount={this.state.purebloodCount} muggleCount={this.state.muggleCount} mixedCount={this.state.mixedCount} unknownCount={this.state.unknownCount}/>)
        }
        else {
            Chart = (<div></div>)
        }
        return (
            <div>
                <button onClick={this.sortByAff}>Affiliation</button>
                <button onClick={this.sortByAnces}>Wizarding Ancestry</button>
                <button onClick={this.hideChart}>Hide Chart</button>
                {Chart}
                {this.state.characters.map((character) => {
                    return (
                        <div>{this.props.characterBio(character)}</div>
                    )
                })}
            </div>
        )
    }
}

export default Ravenclaw;