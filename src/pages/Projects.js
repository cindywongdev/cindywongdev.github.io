const Projects = (props) => {
    const projects = require('../data/projects.json')

    const imageStyling = {
        width: "90%"
    }

    return (<><main>
        {projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name} style={imageStyling}/>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))}
    </main></>)
}

export default Projects