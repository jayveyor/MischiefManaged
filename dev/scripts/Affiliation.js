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
    componentWillReceiveProps(props) {
        this.setState({
            chartData: {
                labels: [`Death Eater`, `Dumbledore's Army`, `Unaffiliated`],
                datasets: [
                    {
                        label: 'Magic Stuff',
                        data: [props.deathEaterCount, props.DACount, props.unaffiliatedCount],
                        backgroundColor: ['purple', 'orange', 'pink']
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