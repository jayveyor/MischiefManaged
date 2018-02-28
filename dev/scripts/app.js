import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      // character: []
      // name: '',
      // house: '',
      // bloodStatus: '',
      // deathEater: false,
      // dumbledoresArmy: false,
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
      // console.log(this.state.characters);
      // this.setState({
      //   name: data.characterObject.name,
      //   house: characterObject.house,
      //   bloodStatus: characterObject.bloodStatus,
      //   deathEater: deathEater,
      //   dumbledoresArmy
      // })
    });
  }

    render() {
      return (
        <div>
          {this.state.characters.map((character) =>{
            return (
              <div>
                <h3>{character.name}</h3>
                <h6>{character.house}</h6>
              </div>
            )
          })}
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
