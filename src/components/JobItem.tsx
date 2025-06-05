import type { Job } from "../data/experience";

interface JobProps {
    job: Job,
    selectedJob: Job | null
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>
}

function JobItem({ job, selectedJob, setSelectedJob }: JobProps) {
    return (
        <article key={job.title}
            className={`col-span-2 xl:col-span-1 rounded-lg px-5 py-3 flex gap-3 shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer ${job === selectedJob ? "bg-blue-300/8" : "bg-base-100/3"}`}
            onClick={() => setSelectedJob(job === selectedJob ? null : job)}>
            <img src={job.companyLogo} alt="company logo" className="w-12 h-12 self-center" />
            <div>
                <h3 className="font-medium">{job.title}</h3>
                <p className="text-sm">{job.company}</p>
                <p className="text-sm">{job.start} - {job.end}</p>
            </div>
        </article>
    )
}

export default JobItem;