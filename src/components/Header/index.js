import React from 'react'
import Link from 'gatsby-link'
import s from './index.module.scss'

const IndexHeader = () => (
  <div className={s.header}>
    <h1>
      <Link to="/">
        Mmanges Arts
      </Link>
    </h1>
    <div className={s.menu}>
      <p>Home</p>
      <p>About</p>
      <p>Gallery</p>
      <p>Blog</p>
    </div>
  </div>
)

export default IndexHeader
