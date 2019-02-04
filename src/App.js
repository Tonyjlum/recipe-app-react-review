import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'

class App extends Component {
  state = {
    categories: [],
    currentSearchRecipes: []
  }

  componentDidMount(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(json => this.setState({
      categories: json.categories
    },() => console.log(this.state.categories)))
  }

  handleCategoryClick = (categoryData) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryData.strCategory}`)
    .then(res=>res.json())
    .then(recipes=>
    this.setState({
      currentSearchRecipes: recipes.meals
    }))
  }

  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer categories={this.state.categories} handleCategoryClick={this.handleCategoryClick}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer currentSearchRecipes={this.state.currentSearchRecipes}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            {/* how can we render recipes here? */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
