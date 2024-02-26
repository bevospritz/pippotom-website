import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imgFrez from "../../Assets/carusel/frez.jpg";
import imgGoku from "../../Assets/carusel/goku.jpg";
import imgKen from "../../Assets/carusel/ken.jpg";
import imgRaul from "../../Assets/carusel/raul.jpg";


function Home2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="carusel-home2">
      <h3 className="home2-title">Playing with AI</h3>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-main"
      >
        <Carousel.Item className="car-item">
          <img
            className="imgcar d-block w-100"
            src={imgFrez}
            alt="John Malkovich as Freeza"
          />
          <Carousel.Caption>
            <h3>John Malkovich as Freeza</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item" >
          <img
            className="imgcar d-block w-100"
            src={imgGoku}
            alt="Mel Gibson as Goku"
          />
          <Carousel.Caption>
            <h3>Mel Gibson as Goku</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item" >
          <img
            className="imgcar d-block w-100"
            src={imgKen}
            alt="Sylvester Stallone as Ken Shiro"
          />
          <Carousel.Caption>
            <h3>Sylvester Stallone as Ken il guerriero</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item" >
          <img
            className="imgcar d-block w-100"
            src={imgRaul}
            alt="Arnold Schwarzenegger as Raoul - Kenshiro"
          />
          <Carousel.Caption>
            <h3>Arnold Schwarzenegger as Raoul - Kenshiro</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>    
      <div className="car-amarcord">
        <p>
          Cresiuto a cavallo tra gli anni '80 e '90 Kenshiro, DragonBall, i
          Cavalieri dello zodiaco erano il mio pane. Erano anche gli anni dei
          film d'azione, della sportiva rivalità Sylvester e Arnold pe chi
          faceva più vendite al botteghino. Bei tempi...Chi non avrebbe sognato,
          però, un bel mashup dei due mondi, cartoon e Holliwood, in stile Stret
          Fighter - il film che per quanto oggettivamente un B movie e recitato
          malissimo, ci ha fatto emozionare un po' a noi tutti piccoli fans. Un
          paio di shots creati con Midjourney.{" "}
        </p>
      </div>
    </section>
  );
}

export default Home2;
