import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    fetch("/api/pets").then(res => res.json()).then(json => this.setState({ pets: [...json] }));
    
    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.findPetsHandler = this.findPetsHandler.bind(this);
  }
  changeTypeHandler(qType){
    this.setState({ filters: qType });
  }

  findPetsHandler(){
    let qURL = this.state.filters.type === 'all' ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
    fetch(qURL).then(res => res.json()).then(json => this.setState({ pets: json}));
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeTypeHandler} onFindPetsClick={this.findPetsHandler}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
