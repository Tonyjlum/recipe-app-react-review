import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'
import Recipe from './components/Recipe'

class App extends Component {
  state = {
    categories: [],
    currentSearchRecipes: [],
    savedRecipes: []
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



  handleSaveRecipes = (recipeInfo)=>{
    console.log(recipeInfo)
    const removeRecipeFromSearch = this.state.currentSearchRecipes.filter((r)=>{
        return r.idMeal !== recipeInfo.idMeal
      })
    this.setState({
      currentSearchRecipes: removeRecipeFromSearch,
      savedRecipes: [...this.state.savedRecipes, recipeInfo]
    })


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
            <RecipeContainer currentSearchRecipes={this.state.currentSearchRecipes}
            handleSaveRecipes={this.handleSaveRecipes}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer currentSearchRecipes={this.state.savedRecipes}
            handleSaveRecipes={this.handleSaveRecipes}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
