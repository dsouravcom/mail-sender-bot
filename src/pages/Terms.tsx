import SEO from "../components/SEO";

const Terms = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 pt-24 pb-12 px-6">
            <SEO
                title="Terms and Conditions"
                description="Read our Terms and Conditions. We prioritize your privacy and do not store any personal data or email content."
            />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-light text-zinc-100 mb-8 tracking-tight">
                    Terms and Conditions
                </h1>

                <div className="space-y-8 text-lg leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-normal text-zinc-200 mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing and using this website, you accept and
                            agree to be bound by the terms and provision of this
                            agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-normal text-zinc-200 mb-4">
                            2. Data Privacy & Security
                        </h2>
                        <p className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
                            We take your privacy seriously.{" "}
                            <strong className="text-zinc-100">
                                We do not store any of your personal data,
                                files, or email content.
                            </strong>
                            Files uploaded are processed solely for the purpose
                            of sending the email and are immediately discarded
                            after the transaction is complete.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-normal text-zinc-200 mb-4">
                            3. Usage
                        </h2>
                        <p>
                            This tool is provided for legitimate use only. You
                            agree not to use this service for sending spam,
                            unsolicited messages, or any illegal content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-normal text-zinc-200 mb-4">
                            4. Disclaimer
                        </h2>
                        <p>
                            The service is provided "as is" without warranties
                            of any kind. We are not responsible for any failure
                            to deliver emails or for any data loss during the
                            transmission process.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
