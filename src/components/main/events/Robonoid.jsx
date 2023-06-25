import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from './Button'
function Robonoid() {
  return (
    <>
      <Container>
      <h1>Robonoid</h1>
        <b>ABOUT</b> <br />
        Arduino is an open hardware development board that can be used by tinkerers, hobbyists and makers to design and build devices that interact with the real world. It allows students, beginners, teachers and engineers to design academic and real time projects to solve modern problems.<br />
        Robonoid brings the opportunity to all of you to explore one of the most important components of the electronic world.<br />
        <br />
        <b>EVENT DETAILS </b><br />

        Round 1:  A contest based on the basics of Arduino and its coding. Different levels of questions as per as the year of students. The round is time bound and participants scoring above the cut off qualify for the next round.
        <br />Round 2:  A contest consisting of advanced level of questions related to Arduino and its working. Similar to round 1, different cut offs for participants according to their year. This round is time bound too.
        <br /><br />
        <b>RULES</b><br />
        1.	Any form of unfair means will lead to disqualification.
        <br /> 2.	A team may consist of 2-3 members only.
        <br /><br />
        The prize money for this event is worth ₹4000 and we also have exclusive prizes for first years.
        <br />
        <Button gformlink = 'https://forms.gle/19qXaHEFw9bQSE4R8' />
      </Container>
    </>
  )
}

export default Robonoid