import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Gryffindor from './gryffindor.js'
import Ravenclaw from './ravenclaw.js'
import Slytherin from './slytherin.js'
import Hufflepuff from './hufflepuff.js'

class HeaderTabs extends React.Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <header>
                        <div className="houseTabs">
                            <div className="gryffindor"><Link to="/gryffindor">Gryffindor</Link></div>
                            <div className="hufflepuff"> <Link to="/hufflepuff">Hufflepuff</Link></div>
                            <div className="ravenclaw"><Link to="/ravenclaw">Ravenclaw</Link></div>
                            <div className="slytherin"> <Link to="/slytherin">Slytherin</Link></div>
                        </div>
                        <button onClick={this.sortByAff}>Affiliation</button>
                        <button onClick={this.sortByAnces}>Wizarding Ancestry</button>
                    </header>


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
        )
    }
}

