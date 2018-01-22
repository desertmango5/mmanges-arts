import React from 'react'
import Link from 'gatsby-link'
import 'typeface-happy-monkey'
import 'typeface-open-sans'
import s from '../styles/modules/index.module.scss'
import Footer from '../components/Footer/footer'
import deerImage from '../../static/images/deer.jpg'
import sideImage from '../../static/images/side-by-side.jpg'

const IndexPage = () => (
  <div>
    <div className={s.body}>
      <h1 className={s.head1}>Wood Burning Art</h1>
      <p className={s.content1__text}>
        Bacon ipsum dolor amet tenderloin corned beef pork loin hamburger salami buffalo, beef shank capicola ham hock jowl t-bone meatball cupim turkey. Kielbasa tenderloin leberkas doner bacon drumstick landjaeger frankfurter ham. Ball tip porchetta bacon kevin cupim, strip steak andouille short ribs frankfurter chuck chicken shoulder pancetta capicola turkey. Bacon strip steak beef, t-bone rump sirloin porchetta prosciutto jowl turkey. Sausage leberkas tongue pancetta, drumstick shankle pig bresaola biltong chicken. Kevin jerky tri-tip beef ribs pork meatball drumstick brisket t-bone fatback ball tip burgdoggen sausage beef buffalo. Cow buffalo tenderloin brisket.
      </p>
      <img 
        className={`${s.image1} ${s.image}`} 
        src={deerImage} 
        alt="Wood burning of a deer"
      />
      <h3 className={s.head2}>Custom Designs</h3>
      <img 
        className={`${s.image2} ${s.image}`} 
        src={sideImage} 
        alt="Side by side comparison image"
      />
      <p className={s.content2__text}>
        Tri-tip pancetta landjaeger brisket bacon pork short loin ham pig. Shankle pastrami pork belly sirloin short loin leberkas. Short ribs beef kevin prosciutto, biltong pancetta ribeye brisket flank bacon rump. Turducken ham doner shoulder andouille, fatback pork loin jowl boudin flank short ribs. Burgdoggen salami tail, bresaola pork chop shoulder jerky tongue doner capicola porchetta ham hock andouille hamburger jowl.
      </p>
    </div>
    <Footer />
  </div>
)

export default IndexPage
