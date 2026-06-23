import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CH. Yudaya Madhavi | Gen AI Engineer & ML Developer",
  description:
    "Portfolio of CH. Yudaya Madhavi, Gen AI Intern at Amdocs. Building LLM-powered applications, multi-agent systems, and ML solutions. B.Tech ECE from NIT Agartala.",
  keywords: [
    "Gen AI Engineer",
    "Machine Learning",
    "AI Developer",
    "LLM",
    "LangChain",
    "Portfolio",
    "NIT Agartala",
    "Yudaya Madhavi",
  ],
  authors: [{ name: "CH. Yudaya Madhavi" }],
  openGraph: {
    title: "CH. Yudaya Madhavi | Gen AI Engineer & ML Developer",
    description:
      "Building AI-powered solutions, LLM-based applications, and intelligent agents. Gen AI Intern at Amdocs, B.Tech ECE from NIT Agartala.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CH. Yudaya Madhavi | Gen AI Engineer & ML Developer",
    description:
      "Building AI-powered solutions, LLM-based applications, and intelligent agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "CH. Yudaya Madhavi",
              jobTitle: "Gen AI Intern",
              worksFor: {
                "@type": "Organization",
                name: "Amdocs",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "National Institute of Technology, Agartala",
              },
              url: "",
              email: "yudaya2004@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/chelluri-yudayamadhavi-462b16290/",
                "https://github.com/Yudaya3006",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
