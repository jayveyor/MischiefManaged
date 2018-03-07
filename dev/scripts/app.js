import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Gryffindor from './gryffindor.js'
import Ravenclaw from './ravenclaw.js'
import Slytherin from './slytherin.js'
import Hufflepuff from './hufflepuff.js'
import config from './config';
// import Chart from './Chart';
import HeaderTabs from './HeaderTabs'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      // pictures: []
    }


  }


    render() {
      return (
        <div>
          <main>
            <div className="instructions">
              <h1>Mischief Managed</h1>
            </div>
            <div className="gryffindor-landing landing">
              <div className="words">
                <Link to="/gryffindor">Gryffindor <p className="tagline">Gather info on Gryffindor</p></Link>
                
              </div>
            </div>
            <div className="hufflepuff-landing landing"> 
              <div className="words">
                <Link to="/hufflepuff">Hufflepuff <p className="tagline">Harvest facts on Hufflepuff</p></Link>
                
              </div>
            </div>
            <div className="ravenclaw-landing landing">
              <div className="words">
                <Link to="/ravenclaw">Ravenclaw <p className="tagline">Read up on Ravenclaw</p></Link>
                
              </div>
            </div>
            <div className="slytherin-landing landing">
              <div className="words">
                <Link to="/slytherin">Slytherin <p className="tagline">Search the stats in Slytherin</p></Link>
                
              </div>
            </div>
          </main>
        </div>
      )
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // characters : [],
    }
    this.characterBio = this.characterBio.bind(this);
  }
  componentDidMount() {
    // axios.get(`${config.HPapiURL}`, {
    //   params: {
    //     key: config.HPapiKey,
    //     school: config.school,
    //   }
    // })
    //   .then(({ data }) => {

    //     this.setState({
    //       characters: data
    //     }); 
    //   });
  }

  
  characterBio(event) {
    let affiliation;
    // console.log(event);

    if (event.dumbledoresArmy === true) {
      affiliation = (
        "Dumbledores Army"
      )

    } else if (event.deathEater === true) {
      affiliation = (
        "Death Eater"
      )
    } else {
      affiliation = (
        "Unaffiliated"
      )
    }
    let characterBio;

    characterBio = (
      <div className="characterBio">
        <div className="cardContainer">
          <div className="cardFrontContainer">
            <div className="cardFront">
              <img className="frogCardFrontBorder" src="./chocolatefrog.png" alt="Chocolate Frog Card border" />
              <img className="portrait" src={event.thumbnail} alt="" />
            </div>
          </div>
          <div className="cardBackContainer">
            <div className="cardBack">
              <img className="frogCardBackBorder" src="./chocolatefrogback.png" alt="" />
              <div className="characterInfo">
                <h6 className={event.house}>{event.house}</h6>
                {/* <h6>{event.bloodStatus}</h6> */}
                <h6>{event.wand}</h6>
                <h6>{event.patronus}</h6>
                <h6>{affiliation}</h6>
              </div>
            </div>
          </div>  
        </div>
        <h2 className="characterName" >{event.name}</h2>
      </div>
    )
    return characterBio;

    
  }

render() {
  return(
    <div>
      <Router>
        <div>
          <Route path="/" exact component={Home} />

          <Route
            path="/gryffindor"
            render={(props) => {
              return <Gryffindor {...props} characters={this.state.characters} characterBio={this.characterBio} />
            }}
          />
          <Route
            path="/ravenclaw"
            render={(props) => {
              return <Ravenclaw {...props} characters={this.state.characters} characterBio={this.characterBio} />
            }}
          />
          <Route
            path="/hufflepuff"
            render={(props) => {
              return <Hufflepuff {...props} characters={this.state.characters} characterBio={this.characterBio} />
            }}
          />
          <Route
            path="/slytherin"
            render={(props) => {
              return <Slytherin {...props} characters={this.state.characters} characterBio={this.characterBio} />
            }}
          />
          <footer>
            <p>Credit to: Gian Paolo Delfino for the icon. Kristen Spencer for the HarryPotterAPI. Created by Jay Button, Natalie Van Dine and Meagan Moore</p>
          </footer>
        </div>
      </Router>
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('app'));