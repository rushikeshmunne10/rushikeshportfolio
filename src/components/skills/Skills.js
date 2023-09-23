import React from 'react';
import './Skills.css';
import WD from '../../images/website-design.png';
import CPP from '../../images/cpp.jpeg';
import BC from '../../images/blockchain_img.avif';
import PY from '../../images/Python-logo.png';
import JAVA from '../../images/java-logo.webp';
import JS from '../../images/javascript-logo.png';
import OOP from '../../images/OOPS_img.jpg';

const Skills = () => {
    return (
        <div>
            <section id="skills">
                <span className="skillTitle">Skills</span>
                <div className="TechBlocks">
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={CPP} alt="image" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>C/C++</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="skillBar">
                            <img src={JAVA} alt="image" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>JAVA</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="skillBar">
                            <img src={JS} alt="image" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>JAVASCRIPT</h2>
                                <p></p>
                            </div>
                        </div>
                        {/* <div className="skillBar">
                            <img src={PY} alt="image" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>PYTHON</h2>
                                <p></p>
                            </div>
                        </div> */}
                    </div>
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={WD} alt="image" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>MERN Stack</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="skillBar">
                            <img src={BC} alt="image" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>BLOCKCHAIN</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="skillBar">
                            <img src={OOP} alt="image" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>OOPS</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
