import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {

  mapOverRecipes = (recipeCollection)=>{
    return recipeCollection.map((r)=>{
      return <Recipe key={r.idMeal} info={r}
      toggleSaved={this.props.toggleSaved}/>
    })
  }

  render() {
    return (
      <div>
      {this.mapOverRecipes(this.props.currentSearchRecipes)}
      </div>
    )
  }
}

export default RecipeContainer
