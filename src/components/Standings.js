import React, { Component } from 'react'

export default class Standings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <table class='tableContainer'>
        <tr class='tableContent driver1'>
          <td>
            <span class='position'>1</span>
            <span class='driverName'>Lewis</span>
            <span class='driverSurname'>Hamilton</span>
            <span class='team'>Mercedes</span>
          </td>
          <td>
            <span class='points'>157 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver2'>
          <td>
            <span class='position'>2</span>
            <span class='driverName'>Max</span>
            <span class='driverSurname'>Verstappen</span>
            <span class='team'>Red Bull Racing</span>
          </td>
          <td>
            <span class='points'>110 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver3'>
          <td>
            <span class='position'>3</span>
            <span class='driverName'>Valtteri</span>
            <span class='driverSurname'>Bottas</span>
            <span class='team'>Mercedes</span>
          </td>
          <td>
            <span class='points'>107 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver4'>
          <td>
            <span class='position'>4</span>
            <span class='driverName'>Alexander</span>
            <span class='driverSurname'>Albon</span>
            <span class='team'>Red Bull Racing</span>
          </td>
          <td>
            <span class='points'>48 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver5'>
          <td>
            <span class='position'>5</span>
            <span class='driverName'>Charles</span>
            <span class='driverSurname'>Leclerc</span>
            <span class='team'>Ferrari</span>
          </td>
          <td>
            <span class='points'>45 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver6'>
          <td>
            <span class='position'>6</span>
            <span class='driverName'>Lando</span>
            <span class='driverSurname'>Norris</span>
            <span class='team'>McLaren</span>
          </td>
          <td>
            <span class='points'>45 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver7'>
          <td>
            <span class='position'>7</span>
            <span class='driverName'>Lance</span>
            <span class='driverSurname'>Stroll</span>
            <span class='team'>Racing Point</span>
          </td>
          <td>
            <span class='points'>42 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver8'>
          <td>
            <span class='position'>8</span>
            <span class='driverName'>Daniel</span>
            <span class='driverSurname'>Ricciardo</span>
            <span class='team'>Renault</span>
          </td>
          <td>
            <span class='points'>33 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver9'>
          <td>
            <span class='position'>9</span>
            <span class='driverName'>Sergio</span>
            <span class='driverSurname'>Perez</span>
            <span class='team'>Racing Point</span>
          </td>
          <td>
            <span class='points'>33 PTS</span>
            <i class='fas fa-chevron-right'></i>
          </td>
        </tr>
        <tr class='tableContent driver10'>
          <td>
            <span class='position'>10</span>
            <span class='driverName'>Esteban</span>
            <span class='driverSurname'>Ocon</span>
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
