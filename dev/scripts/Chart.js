import React from 'react';
import { render } from 'react-dom';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Gryffindor from './Gryffindor';


class Chart extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        
        this.state = {
            chartData: {
                labels: ['Wizard Ancestry', 'Mixed Ancestry', 'Muggle Ancestry', 'Unknown'],
                datasets: [
                    {
                        label: 'Magic Stuff',
                        data: [
                            18,
                            7,
                            4,
                            12
                        ],
                        backgroundColor: ['purple', 'orange', 'pink', 'tan']
                    }
                ]
            }
        };
    }
    render() {
        return(
            <div>
                <p>hello</p>
                <Doughnut
                    data={this.state.chartData}
                    options={{
                    }}
                />
            </div>
        )
    }
}


export default Chart;