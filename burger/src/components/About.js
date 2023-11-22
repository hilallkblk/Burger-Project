import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import '../styles/About.css';

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus, ante id aliquet iaculis, ante ex porta nisl, eu elementum
          odio arcu in quam. Nunc lobortis sollicitudin ipsum, ultrices cursus
          tortor malesuada non. Praesent mollis varius est non ornare. Fusce
          pellentesque metus quis cursus lacinia. Phasellus faucibus eu dolor et
          lacinia. Aliquam imperdiet neque a nisl interdum euismod. Nam
          ullamcorper, elit a cursus faucibus, arcu odio accumsan libero, sed
          vulputate urna purus nec ipsum. Fusce sed rutrum dui. Aliquam placerat
          porttitor facilisis. Sed tellus felis, euismod vel ornare non,
          volutpat vel tortor. Duis a suscipit mauris. 
          Cras commodo congue nisi,
          nec dapibus nibh. Donec bibendum diam at molestie dignissim. In hac
          habitasse platea dictumst. Quisque quis odio sagittis, iaculis arcu
          sed, porta dolor. Fusce mi purus, porta et pretium a, semper non
          turpis. Morbi quis sem ac erat feugiat porttitor. Aenean posuere
          vulputate dui eu porttitor. Vestibulum tempus nec ex a tempus.
          Suspendisse semper dapibus turpis, ornare ullamcorper metus accumsan
          a.
        </p>
      </div>
    </div>
  );
};

export default About;
