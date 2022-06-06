import React, { useEffect } from "react";

function Resume() {

    useEffect(() => {
        document.title = "Resume";
      });

    const skills = [
        {
            type: 'Javascript'
        },
        {
            type: 'Node.js, Express'
        },
        {
            type: 'MongoDB, mySQL'
        },
        {
            type: 'React'
        }
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 mt-5">
                    <h3>Proficiencies</h3>
                    <ul>
                        {skills.map(skill => (
                            <li key={skill.type}>{skill.type}</li>
                        ))}
                    </ul>
                    <h4>
                        <a className='btn bg-secondary' href="https://docs.google.com/document/d/1LDjYgBYH8RZ7TR2Rh2IXYCnoXs3kjQsXYmS4zPJDCbs/edit">
                            <span className="text-light">Resume</span>
                            </a>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Resume;