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
      data.forEach(function(characterObject){
        console.log(characterObject);
        return(characterObject);
      });
      // this.setState({
      //   characters: this.i.house
      // });
    });
  }


    render() {
      return (
        <div>
          <p>{this.data}</p>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
