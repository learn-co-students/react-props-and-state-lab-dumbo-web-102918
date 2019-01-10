import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {

    const petArray = this.props.pets.map(pet => (<Pet key={pet.name + '-' + pet.age} name={pet.name} 
      type={pet.type} 
      age={pet.age} 
      weight={pet.weight} gender={pet.gender}/>));

    return <div className="ui cards">{petArray}</div>
  
  }
}

export default PetBrowser
