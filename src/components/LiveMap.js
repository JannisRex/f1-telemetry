import React, { Component } from 'react'

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
  render(track) {
    console.log(track)
    return (
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
