import React, { Component } from 'react'

export default class Standings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      selectedTrack: '',
      TrackMap: null,
    }
  }

  render() {
    return (
      <table class='table-container'>
        <tr class='table-content driver1'>
          <td>
            <span class='position'>1</span>
            <span class='driver-name'>Lewis</span>
            <span class='driver-surname'>Hamilton</span>
            <span class='team'>Mercedes</span>
          </td>
          <td>
            <span class='points'>157 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver2'>
          <td>
            <span class='position'>2</span>
            <span class='driver-name'>Max</span>
            <span class='driver-surname'>Verstappen</span>
            <span class='team'>Red Bull Racing</span>
          </td>
          <td>
            <span class='points'>110 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver3'>
          <td>
            <span class='position'>3</span>
            <span class='driver-name'>Valtteri</span>
            <span class='driver-surname'>Bottas</span>
            <span class='team'>Mercedes</span>
          </td>
          <td>
            <span class='points'>107 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver4'>
          <td>
            <span class='position'>4</span>
            <span class='driver-name'>Alexander</span>
            <span class='driver-surname'>Albon</span>
            <span class='team'>Red Bull Racing</span>
          </td>
          <td>
            <span class='points'>48 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver5'>
          <td>
            <span class='position'>5</span>
            <span class='driver-name'>Charles</span>
            <span class='driver-surname'>Leclerc</span>
            <span class='team'>Ferrari</span>
          </td>
          <td>
            <span class='points'>45 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver6'>
          <td>
            <span class='position'>6</span>
            <span class='driver-name'>Lando</span>
            <span class='driver-surname'>Norris</span>
            <span class='team'>McLaren</span>
          </td>
          <td>
            <span class='points'>45 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver7'>
          <td>
            <span class='position'>7</span>
            <span class='driver-name'>Lance</span>
            <span class='driver-surname'>Stroll</span>
            <span class='team'>Racing Point</span>
          </td>
          <td>
            <span class='points'>42 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver8'>
          <td>
            <span class='position'>8</span>
            <span class='driver-name'>Daniel</span>
            <span class='driver-surname'>Ricciardo</span>
            <span class='team'>Renault</span>
          </td>
          <td>
            <span class='points'>33 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver9'>
          <td>
            <span class='position'>9</span>
            <span class='driver-name'>Sergio</span>
            <span class='driver-surname'>Perez</span>
            <span class='team'>Racing Point</span>
          </td>
          <td>
            <span class='points'>33 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='table-content driver10'>
          <td>
            <span class='position'>10</span>
            <span class='driver-name'>Esteban</span>
            <span class='driver-surname'>Ocon</span>
            <span class='team'>Renault</span>
          </td>
          <td>
            <span class='points'>26 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
      </table>
    )
  }
}
