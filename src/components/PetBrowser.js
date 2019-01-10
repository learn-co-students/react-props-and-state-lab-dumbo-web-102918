import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
      {this.props.pets.map((pet, index) => {
        console.log(pet);
         return (
           <div>
            <Pet id={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
           </div>
         )
      })}
      </div>
  )
  }
}

export default PetBrowser
