import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const Recipe = (props) => {
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.info.strMealThumb} />}
      title={props.info.strMeal}
      onClick={()=>{props.handleSaveRecipes(props.info)}}
    />
  )
}

export default Recipe
