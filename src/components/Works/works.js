import React from 'react';
import './works.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';

const Works = () => {
    return (
        <section id="works">
            <h2 className="workstitle">Projects</h2>
            <div className="worksImgs">
                <div className="projecttitle">
                    <img src={Project1} alt="Project1" className="worksImg"/>
                    <h3>WhiteBoard</h3>
                </div>
                <div className="projecttitle">
                    <img src={Project2} alt="Project2" className="worksImg"/>
                    <h3>Excel Clone</h3>
                </div>
                <div className="projecttitle">
                    <img src={Project3} alt="Project3" className="worksImg"/>
                    <h3>Tweet Sentiment Analysis</h3>
                </div>
            </div>
        </section>
    );
}

export default Works;