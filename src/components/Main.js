import React, { Component } from 'react'

// import { w3cwebsocket as W3CWebSocket } from 'websocket'
// const client = new W3CWebSocket('ws://127.0.0.1:20778')

// Will get Data from Websocket -> Pass it to Components
// -> Then Render Data
class Main extends Component {
  // componentDidMount() {
  //   client.onopen = () => {
  //     console.log('WebSocket Client Connected')
  //   }
  //   client.onmessage = (message) => {
  //     console.log(message)
  //   }
  // }

  render() {
    return (
      <div class='container fullSize'>
        <div class='section red'>
          <div class='container'>
            <div className='wrapper alignStart'>
              <h4>Race Engineer</h4>
              <div className='wrapper row innerSection'>
                <div className='innerSection green'>
                  <h5>LEFT CONTENT</h5>
                </div>
                <div className='innerSection purple'>
                  <h5>RIGHT CONTENT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='section blue'>
          <div className='wrapper alignStart'>
            <h4>Grand Prix</h4>
            <div className='wrapper row innerSection'>
              <div className='innerSection green'>
                <h5>LEFT CONTENT</h5>
              </div>
              <div className='innerSection purple'>
                <h5>RIGHT CONTENT</h5>
              </div>
            </div>
          </div>
        </div>
        <div class='section slategrey'>
          <div className='wrapper alignStart'>
            <h4>Dashboard</h4>
            <div className='wrapper row innerSection'>
              <div className='innerSection green'>
                <h5>dashboard</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
