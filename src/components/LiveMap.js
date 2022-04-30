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

// Matches all TrackNames to TrackComponents
// so we can dynamically assign at runtime
const Tracks = {
  Abudhabi: Abudhabi,
  Australia: Australia,
  Austria: Austria,
  Azerbaijan: Azerbaijan,
  Bahrain: Bahrain,
  Belgium: Belgium,
  Brazil: Brazil,
  Canada: Canada,
  China: China,
  France: France,
  Greatbritain: Greatbritain,
  Hungary: Hungary,
  Italy: Italy,
  Japan: Japan,
  Mexico: Mexico,
  Monaco: Monaco,
  Netherlands: Netherlands,
  Russia: Russia,
  Singapore: Singapore,
  Spain: Spain,
  Usa: Usa,
  Vietnam: Vietnam,
}

const mapStyle = {
  overflow: 'hidden',
  height: '60%',
  width: '100%',
}

export default class LiveMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      selectedTrack: '',
      TrackMap: null,
    }
  }

  componentDidMount = () => {
    this.getTrackComponent()
  }

  // Gets corresponding Component to given Trackname
  getTrackComponent = async () => {
    const { track } = this.props
    const TrackMap = Tracks[track]

    // saves TrackMap to state and sets loading to false
    this.setState({
      isLoading: false,
      TrackMap,
    })
  }

  render() {
    const { isLoading, TrackMap } = this.state
    return isLoading ? (
      <ActivityIndicator />
    ) : (
      <div className='wrapper'>
        <div className='liveMap'>
          <TrackMap style={mapStyle}/>
        </div>
      </div>
    )
  }
}
