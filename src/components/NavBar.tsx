import { Link } from "react-router";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useState, useEffect } from "react";
import profile from "../assets/profile.png";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(prev => !prev)

    useEffect(() => {
        const theme = isDarkMode ? "dark" : "light"
        document.querySelector("html")?.setAttribute("data-theme", theme)
    }, [isDarkMode])

    return (
        <nav className="flex justify-end py-8 gap-4 bg-base-100 sticky top-0">
            <button className="flex items-center gap-2 text-sm border-1 px-3 py-0.5 rounded-lg cursor-pointer" onClick={toggleDarkMode}>
                {isDarkMode ? <>Dark <FaMoon /></> : <>Light <FaSun /> </>}
            </button>
            <Link to="/" className="avatar">
                <div className="w-8 rounded-full">
                    <img src={profile} alt="profile image" />
                </div>
            </Link>
        </nav>
    )
}

export default Navbar;