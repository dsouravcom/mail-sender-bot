import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
    return (
        <>
            <SEO
                title="404 - Page Not Found"
                description="The page you are looking for does not exist."
            />
            <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 text-center">
                <div className="space-y-6 max-w-md">
                    {/* Icon */}
                    <div className="w-24 h-24 bg-zinc-900/50 rounded-3xl flex items-center justify-center border border-zinc-800 mx-auto shadow-xl shadow-indigo-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12 text-indigo-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                            />
                        </svg>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            404
                        </h1>
                        <h2 className="text-xl font-medium text-zinc-200">
                            Page not found
                        </h2>
                        <p className="text-zinc-400">
                            Sorry, we couldn't find the page you're looking for.
                            It might have been moved or deleted.
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
