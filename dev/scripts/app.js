import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Gryffindor from './gryffindor.js'
import Ravenclaw from './ravenclaw.js'
import Slytherin from './slytherin.js'
import Hufflepuff from './hufflepuff.js'
import config from './config'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    }
  
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
      //
      });
    });
  }
    render() {
      return (
        <div>
          {this.state.characters.map((character) => {
            let characterBio; 
            let affiliation;

              if (character.dumbledoresArmy === true) {
                affiliation = (
                  "Dumbledores Army"
                )
                
              } else if (character.deathEater === true){
                affiliation = (
                  "Death Eater"
                )
              } else {
                affiliation = (
                  "Unaffiliated"
                )
              }
      characterBio = (
        <div>
        {/* <img src="" alt="Character Photo"/> */}
        <h2>{character.name}</h2>
        <h6 className={character.house}>{character.house}</h6>
          {/* maybe not BS */}
          <h6>{character.bloodStatus}</h6> 
          <h6>{character.wand}</h6>
          {/* <img src="" alt="Character Patronus Photo"/> */}
          <h6>{character.patronus}</h6>
          <h6>{affiliation}</h6>
        </div>
      )
        
            let ravenclaw;
            let hufflepuff;
            let slytherin;
            let gryffindor;
            if (character.house === "Ravenclaw") {
              ravenclaw = (<Ravenclaw characterBio={characterBio} />)
            } else if (character.house === "Hufflepuff") {
              hufflepuff = (<Hufflepuff characterBio={characterBio} />)
            } else if (character.house === "Slytherin") {
              slytherin = (<Slytherin characterBio={characterBio} />)
            } else if (character.house === "Gryffindor") {
              gryffindor = (<Gryffindor characterBio={characterBio} />)
            } 
            return (
              <div>
                {ravenclaw}
                {/* {house} */}

              </div>
            )
          })}
        </div>
      )
    }
}

class App extends React.Component { 
render() {
  return(
    <Router>
      <div>
        <header>
          {/* <Link to="/">Home</Link> */}
          <Link to="/gryffindor">Gryffindor</Link>
          <Link to="/ravenclaw">Ravenclaw</Link>
          <Link to="/hufflepuff">Hufflepuff</Link>
          <Link to="/slytherin">Slytherin</Link>
        </header>
        <Route path = "/" exact component={Home} />
          <Route path="/gryffindor" exact component={Gryffindor} />
          <Route path="/ravenclaw" exact component={Ravenclaw} />
          <Route path="/hufflepuff" exact component={Hufflepuff} />
          <Route path="/slytherin" exact component={Slytherin} />
        <Home />
      </div>
    </Router>
  )
}
}

ReactDOM.render(<App />, document.getElementById('app'));
