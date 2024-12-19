import React from 'react';
import './skills.css';
import Javalogo from '../../assets/Javalogo.png';
import Pythonlogo from '../../assets/Pythonlogo.png';
import Clogo from '../../assets/Clogo.png';
import Reactjslogo from '../../assets/Reactjslogo.png';
import JavaScriptlogo from '../../assets/JavaScriptlogo.png';
import CSSlogo from '../../assets/CSSlogo.png';
import HTMLlogo from '../../assets/HTMLlogo.png';
import Machinelogo from '../../assets/Machinelogo.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">Skills</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Javalogo} alt="Javalogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Java</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Pythonlogo} alt="Pythonlogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Python</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Clogo} alt="Clogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>C Programming</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Reactjslogo} alt="Reactjslogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>React.js</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={JavaScriptlogo} alt="JavaScriptlogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>JavaScript</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={CSSlogo} alt="CSSlogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>CSS</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={HTMLlogo} alt="HTMLlogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>HTML</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Machinelogo} alt="Machinelogo" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;