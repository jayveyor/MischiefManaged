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
    componentWillReceiveProps(props) {
        this.setState({
            chartData: {
                labels: [`Wizarding Ancestry`, `Muggle Ancestry`, `Mixed Ancestry`],
                datasets: [
                    {
                        label: 'Magic Stuff',
                        data: [props.purebloodCount, props.muggleCount, props.mixedCount],
                        backgroundColor: ['green', 'blue', 'red']
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