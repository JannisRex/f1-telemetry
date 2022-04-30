import React, { Component } from 'react'
import Indicator from 'react-activity-indicator'

const ActivityIndicator = () => {
  return (
    <div className='wrapper'>
      <Indicator
        number={5}
        diameter={30}
        duration={250}
        color='#cc3232'
        activeColor='#2dc937'
        borderRadius='50%'
        borderWidth={1}
        borderColor='black'
      />
    </div>
  )
}

export default ActivityIndicator
