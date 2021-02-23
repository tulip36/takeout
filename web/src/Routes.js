// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/food-items/new" page={NewFoodItemPage} name="newFoodItem" />
      <Route path="/food-items/{id:Int}/edit" page={EditFoodItemPage} name="editFoodItem" />
      <Route path="/food-items/{id:Int}" page={FoodItemPage} name="foodItem" />
      <Route path="/food-items" page={FoodItemsPage} name="foodItems" />
      <Route path="/categories/new" page={NewCategoryPage} name="newCategory" />
      <Route path="/categories/{id:Int}/edit" page={EditCategoryPage} name="editCategory" />
      <Route path="/categories/{id:Int}" page={CategoryPage} name="category" />
      <Route path="/categories" page={CategoriesPage} name="categories" />
      <Route path="/menus/new" page={NewMenuPage} name="newMenu" />
      <Route path="/menus/{id:Int}/edit" page={EditMenuPage} name="editMenu" />
      <Route path="/menus/{id:Int}" page={MenuPage} name="menu" />
      <Route path="/menus" page={MenusPage} name="menus" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/user-examples/new" page={NewUserExamplePage} name="newUserExample" />
      <Route path="/user-examples/{id:Int}/edit" page={EditUserExamplePage} name="editUserExample" />
      <Route path="/user-examples/{id:Int}" page={UserExamplePage} name="userExample" />
      <Route path="/user-examples" page={UserExamplesPage} name="userExamples" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
