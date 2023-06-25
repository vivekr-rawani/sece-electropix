import React from 'react'
import Container from 'react-bootstrap/Container';
import EventCard from './eventCard';
import { eventList } from './eventsList';


function Events() {

  return (

    <div>

      <Container className='heading'>
        <h1> Events and Workshops</h1>
      </Container>
      <Container className='events'>
        {
          eventList.map((event) => {
            return (
              <EventCard
                eventSerialNo={event.eventSerialNo}
                imgLink={process.env.PUBLIC_URL + '/assets/events/' + event.image+ '.jpg'}
                eventName={event.eventName}
              />
            )
          })
        }
      </Container>
    </div>




  )
}

export default Events