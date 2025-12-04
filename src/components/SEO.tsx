import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    name?: string;
    type?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title,
    description,
    name = "Mail Sender Bot",
    type = "website",
    image = "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764874881/mail-sender-bot.webp",
    url = window.location.href,
}: SEOProps) {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>
                {title} | {name}
            </title>
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
}
