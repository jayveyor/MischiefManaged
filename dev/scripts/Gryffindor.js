import React from 'react';
import config from './config';
import axios from 'axios';
import Qs from 'qs';
import { Link } from 'react-router-dom';
import Affiliation from './Affiliation';
import Ancestry from './Ancestry';
import HeaderTabs from './HeaderTabs';
import CharacterBio from './characterBio';


class Gryffindor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deathEaterCount :0,
            DACount: 0, 
            unaffiliatedCount: 0,
            muggleCount: 0,
            mixedCount: 0,
            purebloodCount: 0,
            unknownCount: 0,
            characters: [],
            showChart: 'none',
            picture: '',
            filteredCharacters: [],
        }
        this.hideChart = this.hideChart.bind(this);
        this.sortByAff = this.sortByAff.bind(this);
        this.sortByAnces = this.sortByAnces.bind(this);
        this.filterCharacters = this.filterCharacters.bind(this);
        
    }

    // axios request from HPAPI to set character state
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
    
    // Create filter function to only characters of selected house
    filterCharacters() {   
        let charState = this.state.characters;
        charState = charState.filter((character) => {
            return character.house === 'Gryffindor';
        });

        // axios request to get images from fandomwiki, using name from HPAPI to connect name to image.
        const images = charState.map((char) => {
            return axios({
                method: 'GET',
                url: 'https://proxy.hackeryou.com',
                dataResponse: 'json',
                paramsSerializer: function (params) {
                    return Qs.stringify(params, { arrayFormat: 'brackets' })
                },
                params: {
                    reqUrl: 'https://harrypotter.wikia.com/api/v1/Articles/Details',
                    params: {
                        format: 'json',
                        titles: char.name,
                    }
                }
            });
        });

        // For Each to populate chart info
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

        // Shout out to Ryan, this is dope
        Promise.all(images)
            .then((images) => {

                images = images.map(el => el.data.items)
                    .map(el => {
                        let result = {};
                        for (let key in el) {
                            result = el[key];
                        }
                        return result;
                    });

                images.forEach((el, i) => {
                    //take each element and match it with the state of the character
                    //And then add the images
                    charState[i].thumbnail = el.thumbnail
                })
                this.setState({
                    filteredCharacters: charState
                });
            });


    
    }
    render() {
        let Chart;
        let Affiliation;
        let Ancestry;
        if (this.state.showChart === 'Affiliation') {
            Chart = (<div><div className="hideButton"><button onClick={this.hideChart}><i className="fas fa-times"></i></button></div>
                <Affiliation DACount={this.state.DACount} deathEaterCount={this.state.deathEaterCount} unaffiliatedCount={this.state.unaffiliatedCount} /></div>
            )
            Affiliation = (
                'highlighted'
            )
            Ancestry = ('')
        }
        else if (this.state.showChart === 'Ancestry') {
            Chart = (<div><div className="hideButton"><button onClick={this.hideChart}><i className="fas fa-times"></i></button></div>
                <Ancestry purebloodCount={this.state.purebloodCount} muggleCount={this.state.muggleCount} mixedCount={this.state.mixedCount} unknownCount={this.state.unknownCount} /></div>
            )
            Affiliation = ('')
            Ancestry = (
                'highlighted'
            )
        }
        else {
            Chart = (<div></div>)
            Affiliation = ('')
            Ancestry = ('')
        }
        return (
            <div className="mainBody">
                <HeaderTabs />
                <div className="buttons">
                    <p>Click the buttons for Gryffindor Data Wizualizations</p>
                    <button onClick={this.sortByAff}>Affiliation</button>
                    <button onClick={this.sortByAnces}>Wizarding Ancestry</button>
                </div>
                {Chart}
                <div className="characterBios clearfix">
                    {this.state.filteredCharacters.map((character) => {

                    return (
                        <CharacterBio character={character} />
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Gryffindor