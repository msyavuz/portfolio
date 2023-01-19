import ProjectCard from "../ProjectCard";

function Projects() {
    return (
        <section
            id="projects"
            className="grid lg:grid-cols-3 place-content-center lg:mx-32 gap-12 lg:gap-8 mx-2 mb-8 lg:mb-0 lg:h-screen"
        >
            <h2 className="lg:col-span-3 text-white font-bold tex-sm lg:text-xl text-center">
                Projects
            </h2>

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
            <ProjectCard
                title="Keeper"
                imageSource="https://github.com/msyavuz/Keeper/blob/master/assets/Screenshot.png?raw=true"
                repoURL="https://github.com/msyavuz/Keeper"
            >
                Note taking app with React
            </ProjectCard>
            <a
                href="https://github.com/msyavuz?tab=repositories"
                target="_blank"
                className="text-white font-bold text-2xl text-center grid place-content-center"
            >
                More...
            </a>
        </section>
    );
}

export default Projects;
