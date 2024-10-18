import React, { useState, useEffect } from 'react';
import pic from "../Assets/pic.jpg";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => setDarkMode(!darkMode);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
    

    return (
        <div style={{
            backgroundColor: darkMode ? 'black' : 'white',
            color: darkMode ? '#fff' : '#333',
            transition: 'background-color 0.5s ease, color 0.5s ease'
        }}>
            <header style={{
                backgroundColor: darkMode ? '#222' : '#f1897f9d',
                color: darkMode ? '#fff' : '#fff',
            }}>
                <nav>
                    <ul>
                        <li><a href="#home" style={{ color: darkMode ? '#fff' : '#fff' }}>Home</a></li>
                        <li><a href="#about" style={{ color: darkMode ? '#fff' : '#fff' }}>About</a></li>
                        <li><a href="#education" style={{ color: darkMode ? '#fff' : '#fff' }}>Education</a></li>
                        <li><a href="#skills" style={{ color: darkMode ? '#fff' : '#fff' }}>Skills</a></li>
                        <li><a href="#projects" style={{ color: darkMode ? '#fff' : '#fff' }}>Projects</a></li>
                        <li><a href="#contact" style={{ color: darkMode ? '#fff' : '#fff' }}>Contact</a></li>
                        <li>
                            <button onClick={toggleMode} style={{
                                backgroundColor: darkMode ? '#555' : '#f1897f9d',
                                color: darkMode ? '#fff' : '#fff',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                cursor: 'pointer'
                            }}>
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <section id="home" className="home-section">
    <span>
        <h1>Hi, I'm Karthik Ram Gudimetla</h1>
        <p>FRONT END DEVELOPER</p>
    </span>
    <span>
        <img src={pic} alt="karthik" />
    </span>
</section>


            <section id="about" className="about-section">
                <h2>About Me</h2>
                <div className="container">
            <p>An aspiring front-end developer with a passion for building responsive and accessible websites. Learnt major web technologies, built cloning websites initially. Later, started building own websites. And starting from the beginner stage, all projects are pushed to my github. <br/> GitHub Repository :
            <a href='https://github.com/karthikram1269?tab=repositories' target="_blank" style={{color:"coral"}}> Link</a>
            </p>
            </div>

            </section>

            <section id="education" className="education-section">
                <h2>Education</h2>
                <div className="container">
            <h5>Bachelor of Technology (2020-2024)</h5> <br/>
            <p>Computer Science and Engineering <br/>
            Kalasalingam Academy of Research and Education, Krishnan koil <br/>
            Percentage – 70.2</p>
            <h5>Intermediate (2018 -2020)</h5> <br/>
            <p>Narayana junior college, Guntur <br/>
            Percentage – 78.6</p>
            <h5>Secondary School (2017-2018)</h5> <br/>
            <p>Computer Science and Engineering <br/>
            Vignan High School, Peda Palakaluru <br/>
            Percentage – 85.5</p>
            
            </div>

            </section>

            <section id="skills" className="skills-section">
                <h2>Skills</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>Responsive Design</li>
                    <li>Version Control (Git)</li>
                </ul>
            </section>

            <section id="projects" className="projects-section">
                <h2>My Projects</h2>
                <div className="projects-container">
                    <div className="project-card">
                        <h3>Qtrip</h3>
                        <p>Clone of the qtrip website. This application is to look for the places according to the cities of India. Built using the React, mainly with the help of useState, useLocation hooks.</p>
                        <a href="https://github.com/karthikram1269/qtrip" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                    <div className="project-card">
                        <h3>Movie-Database</h3>
                        <p>For this project, api fetching is being used to collect data from the website. React-youtube is been used to display the relevant videos according to input.</p>
                        <a href="https://github.com/karthikram1269/Movie_Search" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                    <div className="project-card">
                        <h3>Database Handling</h3>
                        <p>This is nothing but, ceration of data and manipulation of data using CRUD operations. In this projet, "axios" is being used for the creation of local port. Inorder to locate the file and deletion.</p>
                        <a href="https://github.com/karthikram1269/CRUD-operations" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <h2>Contact </h2>
                <p>@ <a href="mailto:gudimetlakarthikram@gmail.com">gudimetlakarthikram@gmail.com</a></p>
            </section>
        </div>
    );
}

export default Header;
