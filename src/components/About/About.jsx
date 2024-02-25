import React from "react";
import TimeCard from "./TimeCard";
import TimeCards from "./aboutTime.json";


function About() {
  
  const cards = TimeCards;

  return (
    <container className="about-main" >
      <h1 className="about-title">ABOUT ME</h1>
      <ul className="about-ul">
      {cards.map((card) =>(
        <TimeCard 
          key={card.id}
          color={card.color}
          date={card.date}
          descr={card.descr}
        />
      ))}
        
      </ul>
    </container>
  );
};

export default About;
