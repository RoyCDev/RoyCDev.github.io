import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import jobs, { type Job } from "../data/experience"
import JobItem from "../components/JobItem";
import { useState } from "react";

function AboutPage() {
    const [selectedJob, setSelectedJob] = useState<null | Job>(null);

    return (
        <section>
            <h1 className="text-2xl font-medium mb-3">Roy Cheung</h1>
            <p className="mb-6 text-lg">
                Recent graduate from San Jose State University. I'm an aspiring <strong>frontend developer</strong> interested in making websites with simple/ intuitive design.
            </p>
            <div className="mb-10 flex items-center gap-2">
                <a href="https://github.com/RoyCDev" target="_blank" className="hover:opacity-70"><FaGithub size={25} /></a>
                <a href="https://www.linkedin.com/in/roy-cheung-web-dev/" target="_blank" className="hover:opacity-70"><FaLinkedin size={25} /></a>
                <a href="mailto:rcheung0117@gmail.com" className="hover:opacity-70"><MdEmail size={30} /></a>
            </div>

            <h2 className="text-xl font-medium mb-3">More about me</h2>
            <p className="mb-6">
                My first exposure to programming dates back to high school, where I learned about making <a href="https://scratch.mit.edu/users/CheungRcompsci" target="_blank" className="link link-primary">Scratch games</a> and websites. What I enjoyed is the immediate visual feedback. It's exciting to witness how my projects evolve and come to life as the progress unfold step by step.
            </p>
            <p className="mb-10">
                I have high standards for my work quality, and I always strive to improve. Currently, I'm looking for an opportunity to bring my skills to a professional setting. I'm comfortable working on Frontend web development with React.js.
            </p>

            <h2 className="text-xl font-medium mb-3">Experience</h2>
            <div className="grid grid-cols-2 gap-3 mb-10">
                {jobs.map(job => <JobItem job={job} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />)}
            </div>

            {selectedJob &&
                <div className="animate-slide">
                    <h4 className="text-lg font-medium mb-3">Job Responsibilities</h4>
                    <ul className="list-disc ml-8 mb-10">
                        {selectedJob.responsibilities.map((res, index) => <li key={index}>{res}</li>)}
                    </ul>
                </div>
            }
        </section>
    )
}

export default AboutPage;