import SEO from "../components/SEO";

function About() {
    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-12 px-6">
            <SEO
                title="About Us"
                description="Learn more about Mail Sender Bot. We provide a secure and simple way to send emails and files anonymously without storing your data."
            />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
                        About <span className="text-zinc-500">MailBot</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We are simplifying the way you share files and messages.
                        Secure, fast, and always reliable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                        <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-indigo-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">
                            Effortless Sending
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Input the recipient's email, attach your file, and
                            send with a few clicks. No sign-ups, no hassle.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                        <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-indigo-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">
                            Secure & Private
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Your content reaches its destination securely. We
                            don't store your files or personal data.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center pt-8 border-t border-zinc-900">
                    <p className="text-zinc-500 mb-6">Open Source Project</p>
                    <a
                        href="https://github.com/isouravcom/mail-sender-bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full transition-all duration-200 border border-zinc-800 hover:border-zinc-700"
                    >
                        <svg
                            className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>View on GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
