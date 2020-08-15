import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
            <li class="list-inline-item"><i class="fab fa-angular"></i></li>
            <li class="list-inline-item"><i class="fab fa-react"></i></li>
            <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
            <li class="list-inline-item"><i class="fab fa-sass"></i></li>
            <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
            <li class="list-inline-item"><i class="fab fa-java"></i></li>
            <li class="list-inline-item"><i class="fab fa-python"></i></li>
          </ul>
          <div className="row">
            {
              this.skills.map((data, index) => (
                <div key={index} className="col-6">
                  <p className="list-item">
                    <FontAwesomeIcon icon={faCheckCircle} color="green" />
                    <span className="ml-3">{data.name}</span>
                  </p>
                </div>
              ))
            }
          </div>
          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;