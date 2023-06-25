import React from 'react'


import '../../../styles/team.css'

function InfoCards(props) {
    // let salutation = ''
   // let imageSrc = '';
   //if(props.isProfessor) imageSrc = process.env.PUBLIC_URL + '/assets/contacts/proff' + props.detail.image;
   const imageSrc = process.env.PUBLIC_URL + '/assets/contacts/' + props.detail.image



  return (
    <div className='info-card-container'>

        
           <img className='card-image'
            src = {imageSrc}
            alt = {props.name}
           />
           <br/>
           <h3 className='name'>{props.detail.name}</h3>
           <h3>{props.detail.lName}</h3>
          <br/>
           <p className='post'>{props.detail.post}</p>
           <br/>
           {/* <p className='phone-no'><FontAwesomeIcon icon ={faPhone}/>{props.phoneNo}</p>
           <p className='email'><FontAwesomeIcon icon ={faEnvelope}/>{props.email}</p> */}
       

    </div>
  )
}

export default InfoCards