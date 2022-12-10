import React from "react";
import photo from '../../assets/self-image.jpg';
function About() {
    return (
        <section data-testid="about-me" className="section-content">
            <div className="section-title">
                <h1>About Me</h1>
            </div>
            <div className="about-me-content">
                <img src={photo} alt="Picture of James trying to look cool!" />
                <p>Hello! My name is James and you have reached my personal portfolio. I was born in England and moved
                    to Canada, Ontario in 2007. I am 29 years of age and
                    currently enrolled in a bootcamp at the University of Toronto for web development. Let me tell you
                    a little bit more about myself and what I do. I work full time in Newmarket at Canada Computers
                    Inc. whilst studying to become a web developer. My
                    main interests consist of video games, playing guitar and I also stream on Twitch.tv!
                    Please check out my current work listed below as well as all of my contact information!
                </p>
            </div>
        </section>
    );
}

export default About;