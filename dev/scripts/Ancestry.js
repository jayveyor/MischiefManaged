import React from 'react';
import { render } from 'react-dom';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Gryffindor from './Gryffindor';
import Hufflepuff from './Hufflepuff';
import Ravenclaw from './Ravenclaw';
import Slytherin from './Slytherin';


class Ancestry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
            }
        };
    }
    // For data viz chart
    componentDidMount() {
        this.setState({
            chartData: {
                labels: [`Wizarding Ancestry`, `Mixed Ancestry`, `Muggle Ancestry`, `Ancestry Unknown`],
                datasets: [
                    {
                        label: 'Magic Stuff',
                        data: [this.props.purebloodCount, this.props.muggleCount, this.props.mixedCount, this.props.unknownCount],
                        backgroundColor: ['darkred', 'darkslateblue', 'steelblue', 'slategrey']
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


export default Ancestry;