import React, { Component } from 'react';
import axios from 'axios';
import './../App.css';

class Deviations extends Component {

    state = {
        serverDeviations: []
    }

    componentWillMount() {
       this.getDeviations()
    }

    deleteDeviations() {
        axios.delete('/deviations')
        .then(response => {
            this.setState({
                serverDeviations: [
                    ...response.data,
                ],
            })
        })
    }

    getDeviations() {
        axios.get('/deviations')
        .then(response => {
          this.setState({
            serverDeviations: [
              ...response.data,
            ],
          })
        })
    }
    
    componentWillReceiveProps() {
        this.getDeviations()
    }

    render() {

        return (
        <div className="deviationsList">
                <h4> Dave's attempts to distort the truth: </h4>
                    {this.state.serverDeviations.map((item, index)=>{
                    return(
                        <li key={`deviations-${index}`}>
                        {item}
                        </li>
                    )
                    })}
                </div>
        )
    }
}

export default Deviations;