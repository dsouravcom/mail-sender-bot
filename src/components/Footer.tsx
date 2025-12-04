import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full py-6 mt-auto border-t border-zinc-800 bg-zinc-950">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
                <div className="mb-4 md:mb-0">
                    <p>
                        &copy; {new Date().getFullYear()} Mail Sender Bot. All
                        rights reserved.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <Link
                        to="/terms"
                        className="hover:text-zinc-300 transition-colors duration-200"
                    >
                        Terms & Conditions
                    </Link>
                    <span>|</span>
                    <p className="font-medium text-zinc-400">
                        Made by <span className="text-zinc-200"><a href="https://dsourav.com" target="_blank" rel="noopener noreferrer">Sourav</a></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
