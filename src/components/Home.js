import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import SearchBar from './SearchBar'
import Prediction from './Prediction'
import SavedTrains from './SavedTrains'

import trainsData from '../data/trains'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      keyword: 'Search',
      trains: trainsData,
      savedTrains: []
    } // can only set the initial state here
  }

  handleChange = (evt) => {
    let newTitle = evt.target.value || 'Search'
    let filteredTrainsData = this.state.trains.filter(train => train.from.toLowerCase().includes(newTitle.toLowerCase()))
    // console.log(filteredTrainsData)

    console.log(this.state.trains) // asynchronous, this occurs before state is set

    this.setState({
      keyword: newTitle,
      trains: filteredTrainsData.length ? filteredTrainsData : trainsData
    })
  }

  handleAdd = (id) => {
    let addedTrain = trainsData.find(train => train.id === id)
    this.setState({
      savedTrains: [...this.state.savedTrains, addedTrain]
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Container>
          <Row>
            <Col xs="12" md="3">
              <SearchBar searchTitle="Search" searchMethod={this.handleChange} />
              <SavedTrains savedTrains={this.state.savedTrains}/>
            </Col>
            <Col md="9">
              <Prediction data={this.state.trains} boardTitle={this.state.keyword} saveMethod={this.handleAdd} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
