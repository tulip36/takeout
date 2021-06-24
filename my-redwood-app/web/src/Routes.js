// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import CategoriesLayout from 'src/layouts/CategoriesLayout'
import AdminsLayout from 'src/layouts/AdminsLayout'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CategoriesLayout}>
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
      <Set wrap={AdminsLayout}>
        <Route path="/admins/new" page={AdminNewAdminPage} name="newAdmin" />
        <Route path="/admins/{id:Int}/edit" page={AdminEditAdminPage} name="editAdmin" />
        <Route path="/admins/{id:Int}" page={AdminAdminPage} name="admin" />
        <Route path="/admins" page={AdminAdminsPage} name="admins" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
