import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import our toggleTimer action
import { toggleTimer } from '../actions'
import { formatTime } from '../utils';
import './timer-view.css'

class TimerView extends Component {
    constructor(props) {
        super(props)
    }

    // Timer should have its name, time, and a start/stop button (logic for this button will be built out later)
    render() {

        // Extract these specific props to use in the component
        const { index, toggleTimer, timer } = this.props
        const buttonClass = timer.isRunning ? "stop" : "start";
        return (
                  <div className='timer-view'>
                    <h2 className='timer-view-name__h2'>{timer.name}</h2>
                    <h1 className='timer-view-time__h1'>{formatTime(timer.time)}</h1>
                    <button className={`timer-view__button timer-view__button--${buttonClass}`}
                        // This calls our toggleTimer action on the specific timer (specified by the index)
                        onClick={(e) => {
                            toggleTimer(index)
                        }}>
                        {timer.isRunning ? "Stop" : "Start"}
                    </button>
                  </div>
              )
          }
      }

const mapStateToProps = (state) => {
    return {}
}

// Use the toggleTimer action for this component
const mapDispatchToProps = () => {
    return { toggleTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(TimerView)
