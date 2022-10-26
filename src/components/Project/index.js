import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project() {
    const projects = [
        {
            name: 'Music Finder', gitHubLink: "https://github.com/RyanOfEastview/group4-music",
            deployedApplication: "https://ryanofeastview.github.io/group4-music/", imageName: "liveMusicFinderPreview"
        },
        {
            name: 'Movies Review', gitHubLink: "https://github.com/RyanOfEastview/group4-movies",
            deployedApplication: "https://movies-group4.herokuapp.com/", imageName: "MoviesReviewPreview"
        },
        {
            name: 'Weather Dashboard', gitHubLink: "https://github.com/HiuSumJaimeYue/Weather-Dashboard",
            deployedApplication: "https://hiusumjaimeyue.github.io/Weather-Dashboard/", imageName: "weatherDashboardPreview"
        },
        {
            name: 'Work Day Schedule', gitHubLink: "https://github.com/HiuSumJaimeYue/Work-Day-Scheduler",
            deployedApplication: "https://hiusumjaimeyue.github.io/Work-Day-Scheduler/", imageName: "workDaySchedulerPreview"
        },
        {
            name: 'NoteTaker', gitHubLink: "https://github.com/HiuSumJaimeYue/Note-Taker",
            deployedApplication: "https://note-taker-hiusumjaimeyue.herokuapp.com/", imageName: "noteTakerPreview"
        },
        {
            name: 'Tech Blog', gitHubLink: "https://github.com/HiuSumJaimeYue/Tech-Blog",
            deployedApplication: "https://new-tech-blog-hiusumjaimeyue.herokuapp.com/",
            imageName: "TechBlogPreview"
        }

    ]
    return (

        <section>
            <div>
                <div className="flex-row">
                    {projects.map((project, i) => (
                        <div className="project-link">
                            <img
                                src={require(`../../assets/images/${project.imageName}.jpg`)}
                                alt={project.name}
                                className="img-thumbnail mx-1"></img>

                            <div className='centered-text'>
                                <a href={project.deployedApplication} target="_blank" rel="noopener noreferrer">{project.name}</a>
                                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" className="project-icon" />
                                </a>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project