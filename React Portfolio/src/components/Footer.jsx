import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-3" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1000 }}>
            <div className="container d-flex justify-content-center">
                <a href="https://github.com/celeste-hayes" target="_blank" className="mx-2 noopener noreferrer">
                    <FaGithub size={25} />
                </a>
                <a href="https://www.linkedin.com/in/celeste-hayes-a93464b8/" target="_blank" className="mx-2 noopener noreferrer">
                    <FaLinkedin size={25} />
                </a>
            </div>
        </footer>
    );
}