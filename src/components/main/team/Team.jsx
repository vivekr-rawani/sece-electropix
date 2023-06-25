import React from 'react'
import { Container } from 'react-bootstrap'
import InfoCards from './InfoCards'
import { members, proff } from './members'
import TeamTable from './TeamTable'


function Team() {


  return (
    <Container fluid = 'true'>
      <h1>Meet Our Team</h1>
      <br />

      <h2>Professors</h2>
      <div className='proff'>
        <InfoCards detail={proff[0]} />
        <InfoCards detail={proff[1]} />
      </div>
      <h2>Members from Thrid Year</h2>
      <div className='null'>
        {members.map((m, i) =>
        (<InfoCards
          detail={m}
          key={i}
        />)


        )}
      </div>
      <br />
      <h2>Members from Second Year</h2>
      <TeamTable />
    </Container>
  )
}

export default Team