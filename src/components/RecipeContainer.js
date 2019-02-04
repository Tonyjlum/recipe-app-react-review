import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {

  mapOverRecipes = ()=>{
    return this.props.currentSearchRecipes.map((r)=>{
      return <Recipe key={r.idMeal} info={r}/>
    })
  }

  render() {
    console.log(this.props.currentSearchRecipes)
    return (
      <div>
      {this.mapOverRecipes()}
      </div>
    )
  }
}

export default RecipeContainer
