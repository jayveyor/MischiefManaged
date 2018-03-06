import React from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Affiliation from './Affiliation';
import Ancestry from './Ancestry';

class Hufflepuff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deathEaterCount: 0,
            DACount: 0,
            unaffiliatedCount: 0,
            muggleCount: 0,
            mixedCount: 0,
            unknownCount:0,
            purebloodCount: 0,
            characters: [],
            showChart: 'none',
        }
        this.hideChart = this.hideChart.bind(this);
        this.sortByAff = this.sortByAff.bind(this);
        this.sortByAnces = this.sortByAnces.bind(this);
        this.filterCharacters = this.filterCharacters.bind(this);
    }
    componentDidMount() {
        axios.get(`${config.HPapiURL}`, {
            params: {
                key: config.HPapiKey,
                school: config.school,
            }
        })
            .then(({ data }) => {

                this.setState({
                    characters: data
                });
                this.filterCharacters();
            });
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
    filterCharacters() {
        let charState = this.state.characters;
        charState = charState.filter((character) => {
            return character.house === 'Hufflepuff';
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
            else if (char.bloodStatus === 'half-blood'){
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
            Chart = (<div><div className="hideButton"><button onClick={this.hideChart}>Hide Chart</button></div>
            <Affiliation DACount={this.state.DACount} deathEaterCount={this.state.deathEaterCount} unaffiliatedCount={this.state.unaffiliatedCount} /></div>
                )
        }
        else if (this.state.showChart === 'Ancestry') {
            Chart = (<div><div className="hideButton"><button onClick={this.hideChart}>Hide Chart</button></div>
            <Ancestry purebloodCount={this.state.purebloodCount} muggleCount={this.state.muggleCount} mixedCount={this.state.mixedCount} unknownCount={this.state.unknownCount}/></div>
                )
        }
        else {
            Chart = (<div></div>)
        }
        return (
            <div className="mainBody">
                <div className="buttons">
                <button onClick={this.sortByAff}>Affiliation</button>
                <button onClick={this.sortByAnces}>Wizarding Ancestry</button>
                </div>
                {Chart}
                <div className="characterBios">
                    {this.state.characters.map((character) => {
                        return (
                            <div>{this.props.characterBio(character)}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Hufflepuff;