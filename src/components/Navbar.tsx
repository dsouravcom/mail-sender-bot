import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path
            ? "text-white"
            : "text-zinc-400 hover:text-zinc-200";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    to="/"
                    className="text-xl font-medium tracking-tight text-white flex items-center gap-2"
                >
                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-indigo-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                        </svg>
                    </div>
                    <span>MailBot</span>
                </Link>

                <div className="flex items-center space-x-8 text-sm font-medium">
                    <Link
                        to="/"
                        className={`transition-colors duration-200 ${isActive(
                            "/"
                        )}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`transition-colors duration-200 ${isActive(
                            "/about"
                        )}`}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
