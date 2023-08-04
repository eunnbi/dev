import type { Metadata } from "next";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const BASE_KEYWORDS = ["개발자", "웹", "프론트엔드", "블로그", "프로젝트"] as const;
export const commonMetadata = {
    keywords: ["개발자", "웹", "프론트엔드", "블로그", "프로젝트"],
    authors: [{ name: "강은비", url: "https://github.com/eunnbi" }],
    description: "은비의 개발 블로그",
    openGraph: {
        type: "website",
        description: "은비의 개발 블로그",
        url: 'https://www.eunnbi.dev',
        siteName: "eunnbi.dev",
        images: [{
            url: "/images/og-image.png"
        }]
    }
}
export const generateMetadata = ({
    path,
    title,
    desc,
    images,
    keywordList
}: {
    path: string;
    title: string;
    desc?: string;
    images?: OpenGraph["images"];
    keywordList?: string[];
}): Metadata => {
    const description = desc || "은비의 개발 블로그";
    const keywords = keywordList
        ? [...BASE_KEYWORDS, ...keywordList].join(", ")
        : BASE_KEYWORDS.join(", ");
    const authors = [{ name: "강은비", url: "https://github.com/eunnbi" }]
    const metadataBase = new URL('https://www.eunnbi.dev')
    return {
        title,
        description,
        keywords,
        authors,
        metadataBase,
        openGraph: {
            type: "website",
            url: path,
            title,
            description,
            siteName: "eunnbi.dev",
            images: images || [{
                url: "/images/og-image.png"
            }]
        }
    };
};
