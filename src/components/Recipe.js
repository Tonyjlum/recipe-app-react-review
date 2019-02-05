import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const Recipe = (props) => {

  // const whatToDo = ()=>{
  //   const foundRecipe = props.savedRecipes.find((recipe)=>{recipe.mealId === props.info.idMeal})
  //   return foundRecipe ? props.handleRemoveSave(props.info) : props.handleSaveRecipes(props.info)
  // }


  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.info.strMealThumb} />}
      title={props.info.strMeal}
      onClick={()=>{props.toggleSaved(props.info.idMeal)}}
    />
  )
}

export default Recipe

// const filterBasedOnSaves = () => {
//   return recipes.meals.filter(meals => {
//     return !this.state.savedRecipes.includes(meals.idMeal)
//   })
// }
// this.setState({
//   currentSearchRecipes: filterBasedOnSaves
// })
