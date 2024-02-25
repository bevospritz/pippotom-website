import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home3() {
  return (
    <section>
    <h3 className="home2-title">Xps</h3>
      <div className="home3-main">
      
        <Container>
          <Row>
            <Col xs="12" md="4">
              <div className="home3-col col-intro">
                <h3>Grafica e Stampa</h3>
                <p></p>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div className="home3-col col-specs">
                <h3>3d graphic e progettazione</h3>
                <p></p>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div className="home3-col col-specs">
                <h3>Organizzazione e gestione progetti</h3>
                <p></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Home3;
