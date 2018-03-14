import React from 'react'
import Trains from './Trains'
import { Table } from 'reactstrap'

const DepartureBoard = (props) => {
  // console.log(props)
  const data = props.data
  const trainsList = data.map(({...train}) => {
    return (
      <Trains onAdd={props.saveMethod} key={train.id} {...train} />
    )
  })

  return (
    <div>
      <h4>{props.boardTitle}</h4>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {trainsList}
        </tbody>
      </Table>
    </div>
  )
}

export default DepartureBoard
