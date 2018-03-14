import React from 'react'
import { Table } from 'reactstrap'

const SavedTrains = ({savedTrains}) => {
  console.log(savedTrains)
  const savedTrainsList = savedTrains.map(train => {
    return (
      <tr key={train.id}>
        <th>{train.id}</th>
        <td>{train.name}</td>
      </tr>
    )
  })

  return (
    <div>
      <h4>Saved Routes</h4>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {savedTrainsList}
        </tbody>
      </Table>
    </div>
  )
}

export default SavedTrains
