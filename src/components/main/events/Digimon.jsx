import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from './Button'
function Digimon() {
  return (
    <> <Container>
      <h1> 1. Digimon </h1>

      <p>Have you ever found binary, logical circuits and systems enticing? <br />
        If yes, then here's your chance to use your wit and participate in "DIGIMON”, an event in which you'll be judged on your Basic understandings of digital electronics.<br />
        It is an individual participation event which will be conducted in two rounds.
      </p>
      <p>
        <b>PRELIMS: -</b> <br/>
        The first round will be a digital quiz consisting of very basic questions of digital domain which will be organized on "Kahoot”, and this will be an elimination round. <br/>
        <b>FINALS: -</b><br/>
        Those who clear the first round will move to the final round which is an interview round where you'll be asked basic digital electronics questions. This round will be judged by our professors. <br/>
        The prize money for this event is worth ₹4000 and we also have exclusive prizes for first years.<br/>
      </p>
      <Button gformlink = 'https://forms.gle/cGLnEQnZdfwu2p3a6' />
    </Container>

    </>
  )
}

export default Digimon