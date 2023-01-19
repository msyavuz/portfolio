import ProjectCard from "../ProjectCard";

function Projects() {
    return (
        <section
            id="projects"
            className="grid lg:grid-cols-3 place-content-center lg:mx-32 gap-12 lg:gap-8 mb-16 mx-2"
        >
            <ProjectCard
                title="My Unsplash"
                imageSource="https://raw.githubusercontent.com/msyavuz/my-unsplash/main/assets/Screenshot.png"
                repoURL="https://github.com/msyavuz/my-unsplash"
            >
                Personal unsplash library with NextJS and local sqlite database
            </ProjectCard>
            <ProjectCard
                title="Event Board"
                imageSource="https://github.com/msyavuz/Event-Board/blob/master/assets/Screenshot.png?raw=true"
                repoURL="https://github.com/msyavuz/Event-Board"
            >
                Event board app with NextJS
            </ProjectCard>
            <ProjectCard
                title="Quoter"
                imageSource="https://github.com/msyavuz/Quoter/raw/master/assets/Screenshot.png?raw=true"
                repoURL="https://github.com/msyavuz/Quoter"
            >
                Quote generator app with focus on TDD.
            </ProjectCard>
            <ProjectCard
                title="Imager"
                imageSource="https://github.com/msyavuz/imager/raw/main/assets/Screenshot2.png?raw=true"
                repoURL="https://github.com/msyavuz/imager"
            >
                Image uploading and sharing app with NextJS and firestore
                backend
            </ProjectCard>
        </section>
    );
}

export default Projects;
