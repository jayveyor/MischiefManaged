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
                <Link to="/gryffindor"><p>Gryffindor <p className="tagline">Gather info on Gryffindor </p> </p></Link>
                
              </div>
            </div>
            <div className="hufflepuff-landing landing"> 
              <div className="words">
                <Link to="/hufflepuff"><p>Hufflepuff <p className="tagline">Harvest facts on Hufflepuff</p></p></Link>
                
              </div>
            </div>
            <div className="ravenclaw-landing landing">
              <div className="words">
                <Link to="/ravenclaw"><p>Ravenclaw <p className="tagline">Read up on Ravenclaw</p></p></Link>
                
              </div>
            </div>
            <div className="slytherin-landing landing">
              <div className="words">
                <Link to="/slytherin"><p>Slytherin <p className="tagline">Search the stats in Slytherin</p></p></Link>
                
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
    }
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