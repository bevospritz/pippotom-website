import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fotoMia from "../../Assets/foto/mia_festaJun.jpg";
import Home2 from "./Home2";
import Home3 from "./Home3";

function Home() {
  return (
    <section fluid className="home-section">
      <Container  id="home">
        <Container className="home-content">
          <Row className="justify-content-md-center">
            <Col  md={{ span: 3, offset: 1 }} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                HEY!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <span className="main-name">
                  {" "}
                  FILIPPO TOMMASO{" "}
                  <strong className="main-surname">MASCHIO</strong>
                </span>
              </h1>
            </Col>

            <Col md={{ span: 4, offset: 1 }} className="home-img">
              <img
                src={fotoMia}
                alt="home pic"
                className="profile-pic img-fluid"
                style={{ maxHeight: "250px" }}
              />
            </Col>
          </Row>
        </Container>
        <hr className="hr-fat"></hr>
        <Home3 />
        <hr className="hr-fat"></hr>
        <Home2/>
      </Container>
      
    </section>
  );
}

export default Home;
