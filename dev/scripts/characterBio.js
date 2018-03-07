import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Gryffindor from './Gryffindor';
import Hufflepuff from './Hufflepuff';
import Ravenclaw from './Ravenclaw';
import Slytherin from './Slytherin';

class CharacterBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardSide: true,
            event: props.character
        };
        this.flipCard = this.flipCard.bind(this);
        this.characterBio = this.characterBio.bind(this);
    }

    flipCard() {
        if (this.state.cardSide) {
            this.setState({
                cardSide: false
            });
        } else {
            this.setState({
                cardSide: true
            });
        }
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
  if (this.state.cardSide) {
    characterBio = (
        <div>
          <div className="cardFrontContainer">
            <div className="cardFront">
              <img className="frogCardFrontBorder" src="./chocolatefrog.png" alt={`Chocolate Frog Card border containing picture of ${event.name}`} />
              <img className="portrait" src={event.thumbnail} alt={`picture of ${event.name}`}/>
            </div>
                <h2 className="characterName" >{event.name}</h2>
          </div>
        <div className="cardBackContainer">
            <div className="cardBack">
                    <img className="frogCardBackBorder" src="./chocolatefrogback.png" alt={`Chocolate Frog Card border containing information about ${event.name}`} />
                <div className="characterInfo">
                    <h6 className={event.house}>{event.house}</h6>
                    <h6>{event.wand}</h6>
                    <h6>{event.patronus}</h6>
                    <h6>{affiliation}</h6>
                </div>
            </div>
            <h2 className="characterName" >{event.name}</h2>
        </div>
        </div>
    )
  } else {
    characterBio = (
          <div className="cardBackClicked">
            <div className="cardBack">
                <img className="frogCardBackBorder" src="./chocolatefrogback.png" alt={`Chocolate Frog Card border containing information about ${event.name}`}  />
              <div className="characterInfo">
                <h6 className={event.house}>{event.house}</h6>
                <h6>{event.wand}</h6>
                <h6>{event.patronus}</h6>
                <h6>{affiliation}</h6>
              </div>
            </div>
            <h2 className="characterName" >{event.name}</h2>
          </div>
    )
  }
    return characterBio;
  }


    render() {
        return (
            <div>
                <div onClick={this.flipCard} className="characterBio">
                    <div className="cardContainer">
               {this.characterBio(this.state.event)}
                </div>
            </div>
            </div>
        )
    }

}

export default CharacterBio;