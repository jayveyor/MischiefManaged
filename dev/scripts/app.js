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

    axios({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'json',
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      },
      params: {
        reqUrl: 'https://harrypotter.wikia.com/api/v1/Articles/Details',
        params: {
          format: 'json',
          titles: event.name,
          width: 300,
          height: 300,
        }
      }
    })
      .then(({ data }) => {
        console.log(data);
        // this.setState({
        //   // pictures: data
        // });
      }
      );  

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
              <img className="portrait" src="./ginny.jpg" alt="" />
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
        <div className="main">
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
<<<<<<< HEAD
=======

>>>>>>> f7777158a3eb7cacffce02c7a2f4509fb2cda465
    </div>

  )
}
}

ReactDOM.render(<App />, document.getElementById('app'));