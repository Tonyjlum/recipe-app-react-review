import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'

const Category = (props) => {
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={props.info.strCategoryThumb} />}
      title={props.info.strCategory}
      actions={[<Button key={v4()} onClick={()=>{props.handleCategoryClick(props.info)}} waves='light'>Find Recipes</Button>]}
    >
      {props.info.strCategoryDescription}
    </Card>
  )
}

export default Category
