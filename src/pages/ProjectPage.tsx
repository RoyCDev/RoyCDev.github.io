import projects from "../data/projects"
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams, Navigate } from "react-router";

function ProjectPage() {
    const { id } = useParams();
    if (!id || parseInt(id) >= projects.length)
        return <Navigate to="/" />

    const project = projects[parseInt(id)];

    return (
        <section className="animate-slide">
            <h1 className="text-xl sm:text-2xl font-medium mb-1 flex items-baseline gap-2">
                {project.name}
                <a href={project.link} target="_blank"><FaExternalLinkAlt size={12} /></a>
            </h1>
            <p className="text-sm sm:text-base flex items-center gap-2 mb-6">
                <span className="badge badge-soft badge-sm sm:badge-md">{project.year}</span>
                {project?.tools.join(", ")}
            </p>
            <p className="mb-6 sm:text-lg">{project.desc}</p>

            {project.video ?
                <iframe width="100%" className="aspect-video mb-10" src={project.video}></iframe> :
                <img src={project.image} alt="project image" className="mb-10" />
            }
        </section>
    )
}

export default ProjectPage;

