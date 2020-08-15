import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.projects = props.projects;
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
                    {
                        this.projects.map((data, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <a href={data.link}><h3 className="mb-1">{data.title}</h3></a>
                                    {/* <div className="subheading mb-3">{data.degree}</div> */}
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Projects;