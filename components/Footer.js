import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="columns is-vcentered is-centered">
          <div className="column has-text-centered">
            <p className="content">
              If you're a Millennium Point or Tower leaseholder and would like to join the association please <a href="mailto:mpmt.residents.association+join.us@gmail.com?subject=Request to Join Association">email us</a> with your name, building and apartment number
            </p>
            <h3 className="title is-3">Follow Us</h3>
            <a style={{color: "inherit"}} href="https://twitter.com/MpmtSalford">
              <FontAwesomeIcon className="mx-2" size="2x" icon={faTwitterSquare} />
            </a>
            <a style={{color: "inherit"}} href="https://www.instagram.com/mpmtsalfordleaseholders">
              <FontAwesomeIcon className="mx-2" size="2x" icon={faInstagramSquare} />
            </a>
            <a style={{color: "inherit"}} href="https://www.youtube.com/channel/UCh8qkXq2zaHRBESP-jp0tkA">
              <FontAwesomeIcon className="mx-2" size="2x" icon={faYoutubeSquare} />
            </a>
          </div>
          <iframe className="column is-one-quarter" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1187.329133745641!2d-2.288783914772258!3d53.47456721965608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae1504d8b9b1%3A0x6e651731d2850baf!2sMillennium%20Tower%2C%20250%20The%20Quays%2C%20Salford%20M50%203SA!5e0!3m2!1sen!2suk!4v1615747466635!5m2!1sen!2suk" height="300" loading="lazy" />
        </div>
        <p className="content has-text-centered block mt-6 is-size-7">Copyright © 2021 Millennium Residents Associaation. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
