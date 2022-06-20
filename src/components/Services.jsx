import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaClipboardCheck, FaFileCode } from 'react-icons/fa'
import { MaterialDesignicons } from 'react-icons'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Lifetime Access ",
                info: "Once enrolled can be used lifetime any number of times. "
            },
            {
                icon: <FaHiking />,
                title: "Track based Learning",
                info: "Step by step concept building with practice questions for every section."
            },
            {
                icon: <FaFileCode />,
                title: "Course Completion Certificate",
                info: "Skillgrow certificate on completion of course"
            },
            {
                icon: <FaClipboardCheck />,
                title: "Assessment Tests",
                info: "Continuous evaluation of learning by assessment tests in the courses"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
                <Title title="Benefits" />
                <div className="row">
                    {this.state.services.map((item, index) => {
                        return (
                            <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                                <div className="card shadow-lg border-0 p-4">
                                    <article className="service">
                                        <span>{item.icon}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                    </article>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}