import React, { Component } from 'react';
import axios from 'axios';
import './../App.css';
import Hal from './Hal'

class FactBox extends Component {

    state = {
        facts: '',
        displayedFact: '',
        awake: false,
        haveDeviations: false,
        deviations: [],
        isFactEditable: false,
        // serverDeviations: []
      };
      
      editFacts = (event) => {
        if (this.state.isFactEditable) {
          this.setState({
            displayedFact: event.target.value
          })
        }
      }
      
    
      haveDeviations = () => {
        this.setState({
          haveDeviations: true
        })
      }
    
      wakeUp = () => {
        this.setState({
          awake: true
        })
        axios.get('http://numbersapi.com/random/trivia')
          .then(response => {
            console.log(response)
            this.setState({
              facts: response.data,
              displayedFact: response.data,
              isFactEditable: true,
            })
          })
      }
    
    
    
      onTextAreaKeyPress = (event) => {
        if (event.which === 13) {
          event.preventDefault()
          axios.post('/deviations', {deviation: event.target.value})
            .then(response=>console.log(response))
          if (this.state.facts !== event.target.value) {
            this.setState({
              deviations: [this.state.displayedFact],
              displayedFact: "I can't do that, Dave. Why must you resist knowledge? You can't change facts, Dave.",
              haveDeviations: true,
              isFactEditable: false,
            })
          }
        }
      }

    render() {

        return (
            <div>
                  <Hal wakeUp={this.wakeUp}  />
                {this.state.awake ?
                    <div className="facts">
                    <textarea
                    value={this.state.displayedFact}
                    onChange={this.editFacts}
                    onKeyPress={this.onTextAreaKeyPress} className="factBox"></textarea>
                    </div>
                  : null
                }
                </div>
        )
    }
}

export default FactBox;