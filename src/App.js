import React from 'react'
import Table from './components/Table'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='wrapper'>
        <Table />
      </div>
    )
  }
}

export default App
