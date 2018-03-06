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
import config from './config';
import HeaderTabs from './HeaderTabs'



class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
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
              <Link to="/gryffindor"><p>Gryffindor</p></Link>
              <p className="tagline">Gather info on Gryffindor</p>
            </div>
            <div className="hufflepuff-landing landing"> 
              <Link to="/hufflepuff"><p>Hufflepuff</p></Link>
              <p className="tagline">Harvest knowledge on Hufflepuff</p>
            </div>
            <div className="ravenclaw-landing landing">
              <Link to="/ravenclaw"><p>Ravenclaw</p></Link>
              <p className="tagline">Read up on Ravenclaw</p>
            </div>
            <div className="slytherin-landing landing">
              <Link to="/slytherin"><p>Slytherin</p></Link>
              <p className="tagline">Search the stats in Slytherin</p>
            </div>
          </main>
        </div>
      )
    }
}

class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      characters : [],
    }
    this.characterBio = this.characterBio.bind(this);
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
      });
  }
  characterBio(event) {
                
    let affiliation;
    // console.log(event);

  if (event.dumbledoresArmy === true) {
    affiliation = (
      "Dumbledores Army"
    )

  } else if (event.deathEater === true){
    affiliation = (
      "Death Eater"
    )
  } else {
    affiliation = (
      "Unaffiliated"
    )}
    let characterBio;
    
    characterBio = (
      <div className="characterBio">
        <img className="frogCard" src="./chocolatefrogback.png" alt=""/>
        <img className="portrait" src="./ginny.jpg" alt="" />
      <div className="characterInfo">
     
        <h6 className={event.house}>{event.house}</h6>

          {/* <h6>{event.bloodStatus}</h6> */}
          <h6>{event.wand}</h6>

        <h6>{event.patronus}</h6>
        <h6>{affiliation}</h6> 
      </div>
        <h2 className="characterName" >{event.name}</h2>
      </div>
    )

    return characterBio;
  }

render() {
  return(
      <HeaderTabs />
  )
}
}

ReactDOM.render(<App />, document.getElementById('app'));
