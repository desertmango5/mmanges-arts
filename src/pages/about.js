import React from 'react' 
import s from '../styles/modules/about.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer/footer'

const About = () => (
  <div>
    <div className={s.body}>
        <h1>Hello. You can see me.</h1>
    </div>
    <Footer />
  </div>
)

export default About