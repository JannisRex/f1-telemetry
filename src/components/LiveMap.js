import React, { Component } from 'react'
import {ReactComponent as Austria} from '../assets/tracks/austria.svg'

export default class LiveMap extends Component {
  render() {
    return (
      <div class='view'>
        <div class='viewQuarter'>
          <div class='liveMap'>
            <Austria/>
          </div>
        </div>
      </div>
    )
  }
} 