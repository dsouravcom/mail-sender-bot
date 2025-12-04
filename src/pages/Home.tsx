import axios from "axios";
import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import SEO from "../components/SEO";

interface FormDataState {
    email: string;
    subject: string;
    description: string;
}

const INITIAL_STATE: FormDataState = {
    email: "",
    subject: "",
    description: "",
};

function Home() {
    const [formData, setFormData] = useState<FormDataState>(INITIAL_STATE);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id === "body" ? "description" : id]: value,
        }));
    };

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.size / (1024 * 1024) <= 25) {
            setSelectedFile(file);
            setFileError("");
        } else {
            setSelectedFile(null);
            setFileError("File size exceeds 25MB");
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const onFileUpload = async (e: FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        if (selectedFile) data.append("file", selectedFile);
        Object.entries(formData).forEach(([key, value]) =>
            data.append(key, value)
        );

        try {
            const apiUrl = import.meta.env.VITE_API_URL;

            const response = await axios.post(apiUrl, data);

            if (response.status === 200) {
                Swal.fire({
                    title: "Success",
                    text: "Your email has been sent successfully!",
                    icon: "success",
                    background: "#18181b",
                    color: "#fff",
                    confirmButtonColor: "#6366f1",
                });
                setFormData(INITIAL_STATE);
                setSelectedFile(null);
                setFileError("");
                if (fileInputRef.current) fileInputRef.current.value = "";
            } else {
                throw new Error("Upload failed");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            Swal.fire({
                title: "Error",
                text: "Something went wrong please try again!",
                icon: "error",
                background: "#18181b",
                color: "#fff",
                confirmButtonColor: "#ef4444",
            });
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-12 px-6 flex items-center justify-center">
            <SEO
                title="Free Email Sender"
                description="Send emails anonymously and securely with attachments up to 25MB. No registration required. Fast, free, and easy to use email sender tool."
            />
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-tight">
                        Send emails <br />
                        <span className="text-zinc-600">effortlessly.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed">
                        A sophisticated tool for your communication needs.
                        Secure, fast, and designed for simplicity.
                    </p>

                    <div className="flex items-center space-x-8 pt-4">
                        <div>
                            <p className="text-3xl font-medium text-white">
                                25MB
                            </p>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                                File Limit
                            </p>
                        </div>
                        <div className="w-px h-12 bg-zinc-800"></div>
                        <div>
                            <p className="text-3xl font-medium text-white">
                                Secure
                            </p>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                                Encryption
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-zinc-800 shadow-2xl">
                    <form onSubmit={onFileUpload} className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-zinc-400 ml-1"
                            >
                                Recipient Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@example.com"
                                className="w-full p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all duration-200"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium text-zinc-400 ml-1"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="What is this about?"
                                className="w-full p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all duration-200"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="body"
                                className="text-sm font-medium text-zinc-400 ml-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="body"
                                rows={4}
                                placeholder="Write your message here..."
                                className="w-full p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all duration-200 resize-none"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400 ml-1">
                                Attachment
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={onFileChange}
                                />
                                <label
                                    htmlFor="file"
                                    className={`flex items-center justify-center w-full p-4 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
                                        selectedFile
                                            ? "border-indigo-500/50 bg-indigo-500/10 text-indigo-200"
                                            : "border-zinc-800 hover:border-zinc-700 bg-zinc-950/30 text-zinc-500 hover:text-zinc-400"
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            />
                                        </svg>
                                        <span className="text-sm truncate max-w-[200px]">
                                            {selectedFile
                                                ? selectedFile.name
                                                : "Choose a file (Max 25MB)"}
                                        </span>
                                    </div>
                                </label>
                            </div>
                            {fileError && (
                                <p className="text-red-400 text-sm ml-1">
                                    {fileError}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-indigo-900/20 ${
                                fileError
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:scale-[1.02] active:scale-[0.98]"
                            }`}
                            disabled={!!fileError}
                        >
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
