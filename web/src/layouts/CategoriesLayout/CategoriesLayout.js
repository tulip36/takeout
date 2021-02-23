import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import React from 'react';
import { Button } from '@material-ui/core';

const CategoriesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.categories()} className="rw-link">
            Categories
          </Link>
        </h1>
        {/* <Link to={routes.newCategory()} className="rw-button rw-button-green"> */}
          {/* <div className="rw-button-icon">+</div> New Category */}
          {/* <Button color="primary">New Category</Button> */}
        {/* </Link> */}
        <Button variant="contained" color="primary">
          <Link to={routes.newCategory()}>
            New
          </Link>
        </Button>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default CategoriesLayout
