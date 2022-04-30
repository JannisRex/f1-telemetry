import React, { Component } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket'

const client = new W3CWebSocket('ws://127.0.0.1:20778')

// Will get Data from Websocket -> Pass it to Components
// -> Then Render Data
class Main extends Component {
  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected')
    }
    client.onmessage = (message) => {
      console.log(message)
    }
  }

  render() {
    return <div>WebSocket</div>
  }
}

export default Main
