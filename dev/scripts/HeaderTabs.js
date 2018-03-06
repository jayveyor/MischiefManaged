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
        )
    }
}

