import React from 'react'
import Table from './components/Table'
import LiveMap from './components/LiveMap'
import './config/styles.css'
import './config/reset.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='wrapper'>
        <Table />
        <LiveMap/>
      </div>
    )
  }
}

export default App
