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
      <div class='container'>
        <div class='section red'>
          <div className='wrapper'>LEFT CONTENT</div>
        </div>
        <div class='section blue'>
          <div className='wrapper'>CENTER CONTENT</div>
        </div>
        <div class='section green'>
          <div className='wrapper'>RIGHT CONTENT</div>
        </div>
      </div>
    )
  }
}

export default Main
