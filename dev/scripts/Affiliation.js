import React from 'react';
import { render } from 'react-dom';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Gryffindor from './Gryffindor';
import Hufflepuff from './Hufflepuff';
import Ravenclaw from './Ravenclaw';
import Slytherin from './Slytherin';


class Affiliation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
            }
        };
    }
    // For data visualization chart.
    componentDidMount() {
        this.setState({
            chartData: {
                labels: [`Death Eater`, `Dumbledore's Army`, `Unaffiliated`],
                datasets: [
                    {
                        label: 'Magic Stuff',
                        data: [this.props.deathEaterCount, this.props.DACount, this.props.unaffiliatedCount],
                        backgroundColor: ['black', 'goldenrod', 'slategrey']
                    }
                ]
            }            
        })
    }
    render() {
        return(
            <div>
                <Doughnut
                    data={this.state.chartData}
                    options={{
                    }}
                />
            </div>
        )
    }
}


export default Affiliation;