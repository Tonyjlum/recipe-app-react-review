import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {

  mapOverRecipes = (recipeCollection)=>{
    return recipeCollection.map((r)=>{
      return <Recipe key={r.idMeal} info={r} handleSaveRecipes={this.props.handleSaveRecipes}
      handleRemoveSave={this.props.handleRemoveSave}
      savedRecipes={this.props.savedRecipes}/>
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
