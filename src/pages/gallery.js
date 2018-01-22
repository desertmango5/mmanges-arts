import React from 'react' 
import s from '../styles/modules/gallery.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer/footer'

const Gallery = ({ data, pathContext }) => (
  <div>
    <div className={s.body}>
      <h1>Hello. Welcome to my gallery.</h1>
    </div>
    <Footer />
  </div>
)

export default Gallery