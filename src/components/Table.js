import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <table class='tableDashboard'>
        <thead>
          <tr>
            <th class='header'>POS</th>
            <th class='header'>DRIVER</th>
            <th class='header'>BEST LAP</th>
            <th class='header'>GAP</th>
            <th class='header'>S1 LAST</th>
            <th class='header'>S1 BEST</th>
            <th class='header'>S2 LAST</th>
            <th class='header'>S2 BEST</th>
            <th class='header'>S3 LAST</th>
            <th class='header'>S3 BEST</th>
          </tr>
        </thead>
        <tbody>
          <tr class='driver'>
            <td>1.</td>
            <td>Janny</td>
            <td>01.12.239</td>
            <td> - </td>
            <td>23.412</td>
            <td>20.213</td>
            <td>34.511</td>
            <td>32.361</td>
            <td>22.415</td>
            <td>20.314</td>
          </tr>
          <tr class='driver'>
            <td>2.</td>
            <td>Lenni</td>
            <td className='purple'>01.12.239</td>
            <td>0.1</td>
            <td>23.412</td>
            <td>20.213</td>
            <td>34.511</td>
            <td>32.361</td>
            <td>22.415</td>
            <td>20.314</td>
          </tr>
          <tr class='driver'>
            <td>3.</td>
            <td>Max Verstappen</td>
            <td>01.12.239</td>
            <td>0.7</td>
            <td>23.412</td>
            <td>20.213</td>
            <td>34.511</td>
            <td>32.361</td>
            <td>22.415</td>
            <td>20.314</td>
          </tr>
          <tr class='driver'>
            <td>4.</td>
            <td>Sergio Perez</td>
            <td>01.12.239</td>
            <td>0.2</td>
            <td>23.412</td>
            <td>20.213</td>
            <td>34.511</td>
            <td>32.361</td>
            <td>22.415</td>
            <td>20.314</td>
          </tr>
          <tr class='driver'>
            <td>5.</td>
            <td>Charles</td>
            <td>01.12.239</td>
            <td>0.8</td>
            <td>23.412</td>
            <td>20.213</td>
            <td>34.511</td>
            <td>32.361</td>
            <td>22.415</td>
            <td>20.314</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
