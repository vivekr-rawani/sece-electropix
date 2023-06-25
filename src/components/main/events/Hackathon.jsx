import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from './Button'
function Hackathon() {
  return (
    <>
      <Container>
      <h1>Hackathon</h1>
        <b>ABOUT</b><br/>
        It is basically a design sprint for programmers, bringing developers together in a team to collaborate on various projects. Typically, taking place for a limited period, hackathons involve an intense sprint to finish.
        <br/>By participating in a hackathon one can learn to produce code in a focused way and to a tight deadline, as well as learning a new web framework to help with the project.
        <br/>

        <br/><b>EVENT DETAILS</b> <br/>
        1.It will be based on both App and Web Development.<br/>
        2.Contestants need to participate in teams of 2 or 3.<br/>
        3.Teams will be provided with problem statement on our website.<br/>
        4.Time Constraint :7 hrs. (9:00 am to 4:00 pm).<br/>

        The prize money for the event is worth Rs. 7000 and some exclusive prizes for first years.<br/>

        <br/><b>Hackathon Procedure</b><br/>
        <ol>
          <li>Product Idea</li>
          <li>Power Point Presentation</li>
          <li>Team Interview</li>
        </ol>
        <Button gformlink = 'https://forms.gle/wZxJQ9BcX31mbBWc9' />
      </Container>
    </>
  )
}

export default Hackathon