import React from 'react' 
import s from './footer.module.scss'
import facebook from '../../../static/icons/32-facebook.png'
import instagram from '../../../static/icons/32-instagram.png'
import etsy from '../../../static/icons/32-etsy.png'

class Footer extends React.Component {
  render() {

    const year = new Date().getFullYear()

    return (
      <div className={s.footer}>
        <div className={s.footer__icons}>
          <a href="https://www.facebook.com/mercedez.manges" target="_blank">
            <img 
              src={facebook} 
              alt="Facebook logo" 
              title="Facebook"
              className={s.footer__icon}
            />
          </a>
          <a href="https://www.instagram.com/mmangesarts/" target="_blank">
            <img 
              src={instagram} 
              alt="Instagram logo" 
              title="Instagram" 
              className={s.footer__icon}
            />
          </a>
          <a href="https://www.etsy.com/shop/MmangesArtsCreations" target="_blank">
            <img 
              src={etsy} 
              alt="Etsy logo" 
              title="Etsy" 
              className={s.footer__icon}
            />
          </a>
        </div>
        <p className={s.footer__location}>Pueblo, Colorado</p>
        <p className={s.footer__copyright}>Copyright © {year} Mercedez Manges</p>
      </div>
    )
  }
} 

export default Footer