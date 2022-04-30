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
              Race Engineer
              <div className='wrapper row innerSection'>
                <div className='innerSection green'>LEFT CONTENT</div>
                <div className='innerSection purple'>RIGHT CONTENT</div>
              </div>
            </div>
          </div>
        </div>
        <div class='section blue'>
          <div className='wrapper alignStart'>
            Grand Prix
            <div className='wrapper row innerSection'>
              <div className='innerSection green'>LEFT CONTENT</div>
              <div className='innerSection purple'>RIGHT CONTENT</div>
            </div>
          </div>
        </div>
        <div class='section slategrey'>
          <div className='wrapper alignStart'>
            Dashboard
            <div className='wrapper row innerSection'>
              <div className='innerSection green'>LEFT CONTENT</div>
              <div className='innerSection purple'>RIGHT CONTENT</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
