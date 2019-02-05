import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'
import Recipe from './components/Recipe'

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
    }))
  }

  addSavedKeyToMeals = (meals) =>{
    return meals.map((meal)=>{
      return {...meal, saved: false
      }
    })
  }

  handleCategoryClick = (categoryData) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryData.strCategory}`)
    .then(res=>res.json())
    .then(recipes=>
    this.setState({
      currentSearchRecipes: this.addSavedKeyToMeals(recipes.meals)
    }, ()=>{console.log(this.state.currentSearchRecipes)}))
  }

// this happens on click
  toggleSaved = (mealId)=>{
    const updatedMeals = this.state.currentSearchRecipes.map((m)=>{
      if (m.idMeal===mealId){
        return {...m, saved: !m.saved}
      }
      else{
        return m
      }
    })
    this.setState({
      currentSearchRecipes: updatedMeals
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
            <RecipeContainer currentSearchRecipes={this.state.currentSearchRecipes.filter(meal=>!meal.saved)}
            toggleSaved={this.toggleSaved}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer currentSearchRecipes={this.state.currentSearchRecipes.filter(meal=>meal.saved)}
            toggleSaved={this.toggleSaved}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
