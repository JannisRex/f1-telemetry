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
  render() {
    return (
      <div class='view'>
        <div class='viewQuarter'>
          <div class='liveMap'>
            <Monaco />
          </div>
        </div>
      </div>
    )
  }
}
