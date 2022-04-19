import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./style.scss";

const About = () => {
  return (
    <section className="about-section">
      <SectionHeader title="about" />
      <p id="headline">
        We are united by our passion for the unseen, the unexplored, the unconquered, and enriching journeys. 
      </p>
      <p id="headline">
        When traveling the world, we always felt that the most amazing experiences should be shared.
      </p>
      <p id="headline">
        We are skiers,
        snowboarders, hikers, climbers, bikers, sailors, surfers, guides, and we
        love making people smile.
      </p>
    </section>
  );
};

export default About;
