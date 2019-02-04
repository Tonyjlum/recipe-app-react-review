import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)


class CategoryContainer extends React.Component {

  mapCategories = () => {
    return this.props.categories.map( c => {
      return <Category key={c.idCategory} info={c}/>
    })
  }

  render() {
    {console.log(this.props.categories)}
    return (
      <div>
        {this.mapCategories()}
      </div>
    )
  }
}

export default CategoryContainer
