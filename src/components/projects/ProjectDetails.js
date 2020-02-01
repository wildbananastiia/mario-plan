import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="crd-content">
                    <div className="card-title">Project Title {id}</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum qui sapiente labore tempora, itaque quasi alias nisi nobis laboriosam voluptatibus exercitationem eaque modi, iure repellat dolorem, minus quae quas similique.</p>
                </div>
                <div className="card-action grey lighten-4">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
