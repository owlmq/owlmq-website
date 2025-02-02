import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Navbar.css";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(
        typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
    );

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);


    return (
        <nav className="text-textcolor dark:text-textcolor p-4 bg-brown-800 dark:bg-neutral-800">
            <div className="flex items-center">
                {/* Logo */}
                <div className="text-xl justify-start font-semibold w-1/6">
                    <a href="#">MyLogo</a>
                </div>

                {/* Desktop Links */}
                <div className="hidden justify-end w-5/6 md:flex space-x-6">
                    <Link className="hover:text-gray-500 p-2 rounded text-textcolor font-bold" to="/">Home</Link>
                    <Link className="hover:text-gray-500 p-2 rounded text-textcolor font-bold" to="/blog">Blog</Link>
                    <Link className="hover:text-gray-500 p-2 rounded text-textcolor font-bold" to="/about">About</Link>
                    <button
                        className="p-2 rounded-full min-w-10 dark:min-w-10">
                        <a href="https://github.com/owlmq" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </button>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full min-w-10 dark:min-w-10 bg-background dark:bg-background">
                        {darkMode ? <FontAwesomeIcon icon={faSun} size="lg" /> : <FontAwesomeIcon icon={faMoon} size="lg" />}
                    </button>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
