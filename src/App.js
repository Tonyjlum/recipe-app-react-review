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
    savedRecipes: []//just Id of meals?
  }

  componentDidMount(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(json => this.setState({
      categories: json.categories
    }))
  }

  handleCategoryClick = (categoryData) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryData.strCategory}`)
    .then(res=>res.json())
    .then(recipes=>
    this.setState({
      currentSearchRecipes: recipes.meals
    }))
  }

  filterBasedOnSaves = () => {
    return this.state.currentSearchRecipes.filter(meals => {
      return !this.state.savedRecipes.includes(meals.idMeal)
    })
  }

  handleSaveRecipes = (recipeInfo)=>{
    this.setState({
      savedRecipes: [...this.state.savedRecipes, recipeInfo.idMeal]
    },()=>{
      this.setState({
        currentSearchRecipes: this.filterBasedOnSaves()
      }, console.log(this.state.currentSearchRecipes))
    })
  }

  //handle remove recipes
  handleRemoveSave = (recipeInfo) => {


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
            handleRemoveSave={this.handleRemoveSave}
            handleSaveRecipes={this.handleSaveRecipes}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
