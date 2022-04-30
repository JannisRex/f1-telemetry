import React, { Component } from 'react'
import ActivityIndicator from './ActivityIndicator'

import {
  Abudhabi,
  Australia,
  Austria,
  Azerbaijan,
  Bahrain,
  Belgium,
  Brazil,
  Canada,
  China,
  France,
  Greatbritain,
  Hungary,
  Italy,
  Japan,
  Mexico,
  Monaco,
  Netherlands,
  Russia,
  Singapore,
  Spain,
  Usa,
  Vietnam,
} from '../assets/tracks/index'

export default class LiveMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      selectedTrack: '',
    }
  }

  componentDidMount = () => {
    console.log(this.props.track)
  }

  getTrackComponent = () => {
    const { track } = this.props
  }

  render() {
    const { isLoading, selectedTrack } = this.state
    return isLoading ? (
      <ActivityIndicator/>
    ) : (
      <div className='view'>
        <div className='viewQuarter'>
          <div className='liveMap'>
            <Monaco />
          </div>
        </div>
      </div>
    )
  }
}
