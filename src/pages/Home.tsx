import axios from "axios";
import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

function Home() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [fileError, setFileError] = useState("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileSize = file.size / (1024 * 1024); // Convert to MB
            if (fileSize <= 25) {
                setSelectedFile(file);
                setFileError("");
            } else {
                setSelectedFile(null);
                setFileError("File size exceeds 25MB");
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
        }
    };

    const onFileUpload = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            if (selectedFile) {
                formData.append("file", selectedFile);
            }
            formData.append("subject", subject);
            formData.append("email", email);
            formData.append("description", description);

            const response = await axios.post(import.meta.env.VITE_API_URL, formData);

            if (response.status === 200) {
                Swal.fire(
                    "Congratulation!",
                    "Your email has been sent successfully!",
                    "success"
                );

                setEmail("");
                setSubject("");
                setDescription("");
                setFileError("");
                setSelectedFile(null);

                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            } else {
                Swal.fire(
                    "Error!",
                    "Something went wrong please try again!",
                    "error"
                );
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            Swal.fire(
                "Error!",
                "Something went wrong please try again!",
                "error"
            );
        }
    };

    return (
        <div>
            <div className="bg-gray-900 min-h-screen flex justify-center items-center">
                <div className="bg-gray-800 -mt-16 p-7 rounded-lg w-full sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-4/12">
                    <form onSubmit={onFileUpload}>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter subject"
                                className="w-full p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="body"
                                placeholder="Enter body"
                                className="w-full p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="file"
                                className="text-white block mb-2"
                            >
                                File Attachment (Size max 25MB):
                            </label>
                            <input
                                type="file"
                                id="file"
                                ref={fileInputRef}
                                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
                                onChange={onFileChange}
                            />
                            {fileError && (
                                <p className="text-red-500 mt-1">{fileError}</p>
                            )}
                        </div>
                        <div className="mt-7 flex justify-center">
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ${
                                    fileError
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={!!fileError}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
