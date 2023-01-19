import ProjectCard from "../ProjectCard";

function Projects() {
    return (
        <section id="project" className="grid grid-cols-3">
            <ProjectCard title="Imager" imageSource="">
                Image uploading and sharing app with firebase backend.
            </ProjectCard>
        </section>
    );
}

export default Projects;
