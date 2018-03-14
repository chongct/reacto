import React from 'react'
import { Button } from 'reactstrap'

const Trains = (train) => {
  // console.log(train)
  return (
    <tr>
      <th scope="row">{train.id}</th>
      <td>{train.name}</td>
      <td>{train.from}</td>
      <td>{train.to}</td>
      <td><Button outline color="info" size="sm" onClick={() => train.onAdd(train.id)}>+</Button></td>
    </tr>
  )
}

export default Trains
