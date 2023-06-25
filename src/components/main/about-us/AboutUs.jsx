
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function BasicExample() {
  return (
    <>
      <Container
        style={{
          width: "80%",
          marginTop: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
        }}
        className="rounded"
      >
        <Row>
          <Col xs={12} md={6} style={{marginTop: "auto",marginBottom:'auto' ,backgroundColor: "#f5feff" }}>
            <h3>SECE</h3>
            <p>
              Society of Eletronics and Communication Engineering is a de novo
              departmental society of N.I.T. Jamshedpur, which was sculpted on
              18th February 2015 ,under the direction of our honourable HOD
              Prof. Dr.S.N.Singh, who succeeded in creating a common platform
              for students of ECE department .Currently the HOD(Dr.Amit Prakash) is the Chairperson of this society with Dr. Basudeba Behera as the faculty advisor .
            </p>
          </Col>
          <Col style={{marginTop: "auto",marginBottom:'auto', backgroundColor: "#f5feff" }}>
            <Image
              style={{ width: "80%" ,marginTop: "auto",marginBottom:'auto'}}
              rounded
              src="sece.png"
            />
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          width: "80%",
          marginTop: "5rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
          backgroundColor: "#f5feff",
        }}
        className="rounded"
      >
        <Row>
          <Col xs={12} md={6} style={{marginTop: "auto",marginBottom:'auto', backgroundColor: "#f5feff", }}>
            <Image
              style={{ width: "88%"}}
              rounded
              src="https://www.cassindustries.com/wp-content/uploads/2020/08/custom-electronic-design.jpg"
            />
          </Col>
          <Col style={{marginTop: "auto",marginBottom:'auto' , backgroundColor: "#f5feff",}}>
            <h3>Electropix</h3>
            <p>
              Since our inception in 2015, SECE has been in constant efforts to
              greatly improve the understanding of electronics and related
              subjects among the students of the institute. We have always strived to expand in such a way that we
              reach as many interested people as we can. With these things in
              mind, we are planning to conduct our techfest, ELECTROPIX between
              11th March and 12th March.
              <b>ELECTROPIX</b> will feature a wide range of events ranging from electronics to some general events such as Quizzing and some fun-  events which will attract good participation. It will focus on technical know-how and methods of developing and sustaining the engineering knowledge of its attendees through a plethora of events. It will not only help in boosting their skills but also promote a sense of unity among the students. It will provide a platform for students to share their knowledge. It aims to inspire the students to think innovatively, develop and come out as a pioneer in implementing. It will be a two-day fest jam-packed with a multitude of events to keep the participants on their toes. 
            </p>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          width: "80%",
          marginTop: "5rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
          backgroundColor: "#f5feff",
        }}
        className="rounded"
      >
        <Row>
          <Col xs={12} md={6} style={{marginTop: "auto",marginBottom:'auto' , backgroundColor: "#f5feff",}}>
            <h3>Events Under Electropix</h3>
            <p>
              ELECTROPIX will feature a wide range of events ranging from electronics to somegeneral events such as Quizzing and some fun events which will attract good participation.<b> DIGIMON </b>Basic understandings of digital electronics.<b> CODETHON </b>Solving problem from various coding platform.<b> ROBONOID </b>Basic understandings of digital electronics(Arduino).<b> HACKATHON </b>It is basically a design sprint for programmers, bringing developers together in a team to collaborate on various projects.<b> DRAWASAURUS  </b> is a fun event is based on the infamous drawing and guessing game. 
 It not only tests the creative side of students but also provides an opportunity for showcasing their prominent teamwork and decision-making skills.
            </p>
          </Col>
          <Col style={{marginTop: "auto",marginBottom:'auto', backgroundColor: "#f5feff", }}>
            <Image
              style={{ width: "80%",marginTop: "auto",marginBottom:'auto' }}
              rounded
              src="https://thumbs.dreamstime.com/b/events-word-cut-out-magazine-letters-pinned-to-cork-notice-board-may-refer-to-news-current-affairs-special-33082182.jpg"
            />
          </Col>
        </Row>
      </Container>

     
    </>
  );
}

export default BasicExample;
