import gasoLean from "../assets/projects/GasoLean.png"
import dailyEntry from "../assets/projects/dailyEntry.png"
import rental157A from "../assets/projects/rental157A.png"
import tripler from "../assets/projects/tripler.png"
import charSearch from "../assets/projects/charSearch.png"

export interface Project {
    name: string,
    year: number,
    image: string,
    desc: string,
    tools: string[],
    video?: string,
    link: string
}

const projects: Project[] = [
    {
        name: "Daily Entry",
        year: 2024,
        image: dailyEntry,
        desc: "A journal website where you can document your daily experiences and long-term goals. A simple yet intuitive UI that lets you create, view, update, and delete your entries.",
        tools: ["React", "Chakra UI", "Node.js", "MySQL"],
        link: "https://github.com/RoyCDev/dailyEntry"
    },
    {
        name: "157A Car Rental",
        year: 2024,
        image: rental157A,
        desc: "Find the dream car to rent by a simple search and filter! An admin panel is available to manage user accounts and website data. Check out a quick demo from one of my group partner: ",
        tools: ["Flask", "Bootstrap", "SQLite", "Group Project"],
        video: "https://www.youtube.com/embed/47mSonx8_Mw",
        link: "https://github.com/DuckyKay/CMPE157ACarRental"
    },
    {
        name: "Anime Character Search",
        year: 2023,
        image: charSearch,
        desc: "A website that uses AniList API to fetch character info upon user requests. Hover over a character to see their bios and the earliest anime/ manga they appear in.",
        tools: ["React", "Material UI", "GraphQL", "AniList API"],
        link: "https://github.com/RoyCDev/AnimeCharSearch"
    },
    {
        name: "GasoLean",
        year: 2025,
        image: gasoLean,
        desc: "A mobile application that provides an in-depth analysis of your gas consumption to help you save more gas and decrease the use of fossil fuel usage.",
        tools: ["UI only", "Adobe XD"],
        link: "https://xd.adobe.com/view/1d4ea304-7653-49fa-acb9-97e3dff2aec5-481d/screen/1f7fe80d-bace-48f5-a097-c7e3e20dfd3f"
    },
    {
        name: "Tripler",
        year: 2023,
        image: tripler,
        desc: "A mobile application that guides you in every step of the trip planning process, from finding tourist attractions to creating a  personalized itinerary and booking a flight.",
        tools: ["UI only", "Adobe XD"],
        video: "https://www.youtube.com/embed/4G25hz7JvGI",
        link: "https://xd.adobe.com/view/7549d6ad-d7b8-4cf2-bbe2-4f996e6d497b-201a/"
    },
]

export default projects;