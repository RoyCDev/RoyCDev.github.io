import projects from "../data/projects"
import { useNavigate, useParams } from "react-router";

function ProjectList() {
    const navigate = useNavigate();
    const { id } = useParams();

    // avoids adding the same url to browser history if already on the page
    const navigateProject = (index: number) => {
        if (!id || parseInt(id) !== index) navigate(`/projects/${index}`);
    }

    return (
        <div className="mb-10">
            {projects.map((proj, index) =>
                <article className="flex gap-4 mb-4 cursor-pointer group" key={proj.name} onClick={() => navigateProject(index)} >
                    <img src={proj.image} alt={proj.name} className="w-35 aspect-video rounded-lg group-hover:opacity-60 duration-200 transition-opacity" />
                    <div>
                        <h3 className="font-medium">{proj.name}</h3>
                        <p className="text-sm mb-2">{proj.year} | {proj.tools[0]}</p>
                    </div>
                </article>)}
        </div>
    )
}

export default ProjectList;