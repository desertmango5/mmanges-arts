import React from 'react'
import Link from 'gatsby-link'
import s from '../styles/modules/index.module.scss'

const IndexPage = () => (
  <div className={s.container}>
    <h1 className={s.burning}>Wood Burning Art</h1>
    <p className={s.burning__desc}>
      Bacon ipsum dolor amet tenderloin corned beef pork loin hamburger salami buffalo, beef shank capicola ham hock jowl t-bone meatball cupim turkey. Kielbasa tenderloin leberkas doner bacon drumstick landjaeger frankfurter ham. Ball tip porchetta bacon kevin cupim, strip steak andouille short ribs frankfurter chuck chicken shoulder pancetta capicola turkey. Bacon strip steak beef, t-bone rump sirloin porchetta prosciutto jowl turkey. Sausage leberkas tongue pancetta, drumstick shankle pig bresaola biltong chicken. Kevin jerky tri-tip beef ribs pork meatball drumstick brisket t-bone fatback ball tip burgdoggen sausage beef buffalo. Cow buffalo tenderloin brisket.
    </p>
    <img className={s.burning__image} src="" alt=""/>
    <h3 className={s.custom}>Custom Designs</h3>
    <img className={s.custom__image} src="" alt=""/>
    <p className={s.custom__desc}>
      Tri-tip pancetta landjaeger brisket bacon pork short loin ham pig. Shankle pastrami pork belly sirloin short loin leberkas. Short ribs beef kevin prosciutto, biltong pancetta ribeye brisket flank bacon rump. Turducken ham doner shoulder andouille, fatback pork loin jowl boudin flank short ribs. Burgdoggen salami tail, bresaola pork chop shoulder jerky tongue doner capicola porchetta ham hock andouille hamburger jowl.
    </p>
  </div>
)

export default IndexPage
