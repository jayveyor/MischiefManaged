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

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    }
  
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/characters', {
      params: {
        key: '$2a$10$uaBOxtF57MOEVumKnFQpeuQ.NDM5bS7lmAmb0gJHTWwarcz2HQam.',
        school: "Hogwarts School of Witchcraft and Wizardry",
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
            let status;

              if (character.dumbledoresArmy === true) {
                status = (
                  "Dumbledores Army"
                )
                
              } else if (character.deathEater === true){
                status = (
                  "Death Eater"
                )
              } else {
                status = (
                  "Unaffiliated"
                )
              }
      characterBio = (
        <div>
        <h2>{character.name}</h2>
        <h6 className={character.house}>{character.house}</h6>
          <h6>{character.bloodStatus}</h6>
          <h6>{character.wand}</h6>
          <h6>{character.patronus}</h6>
          <h6>{status}</h6>
        </div>
      )
        
            let house;
            if (character.house === "Ravenclaw") {
              house = (<Ravenclaw characterBio={characterBio} />)
            } else if (character.house === "Hufflepuff") {
              house = (<Hufflepuff characterBio={characterBio} />)
            } else if (character.house === "Slytherin") {
              house = (<Slytherin characterBio={characterBio} />)
            } else if (character.house === "Gryffindor") {
              house = (<Gryffindor characterBio={characterBio} />)
            } 
            return (
              <div>
                {house}
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
      <Route path = "/" exact component={Home} />
        <Route path="/gryffindor" exact component={Gryffindor} />
        <Route path="/ravenclaw" exact component={Ravenclaw} />
        <Route path="/hufflepuff" exact component={Hufflepuff} />
        <Route path="/slytherin" exact component={Slytherin} />
    </div>
    </Router>
  )
}
}

ReactDOM.render(<App />, document.getElementById('app'));
