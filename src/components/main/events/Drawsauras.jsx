import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from './Button'

function Drawsauras() {
    return (
        <>
            <Container >
                <h1>Drawsauras</h1>
                <p>
                It is a fun event conducted especially for first year students. It is based on the infamous drawing and guessing game. It basically requires the players to draw something from a given word and make the other players guess it correctly.
                This event not only tests the creative side of students but also provides an opportunity for showcasing their prominent teamwork and decision-making skills.

                </p>
                <b>Mode of Event </b> : Online<br />
                Website - <a href='https://www.drawasaurus.org' target={'_blank'} rel='noreferrer '
                style={{textDecoration : 'none'}}
                >www.drawasaurus.org</a><br /><br/>
                <b>Round 1</b> : Participants will be divided in groups. Each group will contain 10 participants from ECE 1st and 2nd year. One Participant from each group will draw the figure of the word displayed on the website and the remaining participants of the group will have to guess the word. Points will be given according to the time taken to guess the correct word. The round will contain 3 cycles(each Participant will get 3 chances to draw). The one with maximum points will be the winner of the group.
                <br /><br />
                <b>Round 2 </b>: Winners of each group from round 1 will reach round 2. They will be clubbed in a single group. Rules will remain same as Round 1. This round will contain 3 cycles(each Participant will get 3 chances to draw)<br />
                Winners of round 2 will be awarded.<br /><br />

                Prize Pool: 4.5k<br />
                <Button gformlink = 'https://forms.gle/cxZqoXZcfpjbvn956' />
            </Container>

        </>
    )
}

export default Drawsauras