import React from 'react'
import Project from '../Project'

function Portfolio() {

    return (
        <div className="my-5" >
            <h1>Portfolio</h1>
            <h3>(Click on the project title to see the application. And next to the title is the Github repository link of the project.)</h3>
            <Project></Project>
        </div>
    )
}

export default Portfolio