import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export default class TableF1 extends Component {
  render() {
    return (
      <Table striped bordered hover>
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
            <td>3.</td>
            <td>Max Verstappen</td>
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
            <td>4.</td>
            <td>Sergio Perez</td>
            <td>01.12.239</td>
            <td> - </td>
            <td>23.412</td>
            <td>20.213</td>
            <td>34.511</td>
            <td>32.361</td>
            <td>22.415</td>
            <td>20.314</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
