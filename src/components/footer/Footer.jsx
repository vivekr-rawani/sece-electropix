import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faLinkedin, faInstagram, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import '../../styles/footer.css'

function Footer() {
  return (
    <>
      <div className="container-footer">

        <div className='footer-child f'>
        <h1>About us</h1>
	
        Our goal is to give a spark to electronics engineers!

        </div>

        <div className='footer-child '>
        <h1>Contact info</h1>
       sece@nitjsr.ac.in
        </div>
        <div className='footer-child l'>
        <h1>Connect with us</h1>
        <p className='links'>
				<a className ="soc fb" target="blank" href="https://www.facebook.com/secenitjsr"><FontAwesomeIcon icon ={faFacebook}/></a>
				<a className ="soc mail" target="blank" href="mailto:sece@nitjsr.ac.in"><FontAwesomeIcon icon = {faGoogle}/></a>
				<a className ="soc insta" target="blank" href="https://www.instagram.com/secenitjsr"><FontAwesomeIcon icon = {faInstagram}/></a>
        <a className ="soc linkedin" target="blank" href="https://linkedin.com/company/sece-nitjsr/"><FontAwesomeIcon icon = {faLinkedin}/></a>
        <a className ="soc yt" target ="blank" href="https://youtube.com/@secenitjamshedpur6613"><FontAwesomeIcon icon = {faYoutube}/></a>

			</p>
        </div>

      </div>
    </>

  )
}

export default Footer