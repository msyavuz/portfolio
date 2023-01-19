import ProjectCard from "../ProjectCard";

function Projects() {
    return (
        <section id="project" className="grid grid-cols-3">
            <ProjectCard
                title="Imager"
                imageSource="https://github.com/msyavuz/imager/raw/main/assets/Screenshot.png?raw=true"
            >
                Image uploading and sharing app with firebase backend.
            </ProjectCard>
        </section>
    );
}

export default Projects;
