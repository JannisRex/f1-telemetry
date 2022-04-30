import React from 'react'
import Main from './components/Main'
import './config/styles.css'
// import './config/reset.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='wrapper'>
        <Main />
      </div>
    )
  }
}

export default App
