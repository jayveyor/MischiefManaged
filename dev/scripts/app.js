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
    // this.sortHouses = this.sortHouses.bind(this);
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

  // sortHouses () {
  //   let house;
  //   let word;
  //   word = this.state.characters.house;
  //   if (this.state.characters.house === "Ravenclaw" ) {
  //     house = (<h6 className="red">{this.state.characters.house}</h6> )
  //   } else {
  //     house = (<h6 className="green">{this.state.characters.house}</h6>)
  //   }
  //   return house;
  // }

  // sortHouses() {
  //   let chara;
   
  //     chara = (
  //       <div>
  //         <h3>{character.name}</h3>
  //         {house}

  //       </div>
  //     )
  //   })
  //   return chara;
  // }



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

ReactDOM.render(<App />, document.getElementById('app'));
