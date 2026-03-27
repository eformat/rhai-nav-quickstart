"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Page,
  PageSection,
  Gallery,
  GalleryItem,
  Button,
} from "@patternfly/react-core";
import { ArrowLeftIcon, ExternalLinkAltIcon, SunIcon, MoonIcon } from "@patternfly/react-icons";

const sites = [
  {
    name: "Voice Agents",
    url: "https://eformat.github.io/voice-agents/voice-agents/index.html",
    description: "Voice-powered AI agent interfaces",
  },
  {
    name: "Rainforest",
    url: "https://eformat.github.io/rainforest-docs",
    description: "Rainforest documentation and guides",
  },
  {
    name: "Special Potato",
    url: "https://eformat.github.io/special-potato",
    description: "Special Potato project resources",
  },
  {
    name: "Quickstart 1",
    url: "https://soyr-redhat.github.io/demo-platform-quickstart-test",
    description: "Demo platform quickstart tutorials",
  },
];

export default function Home() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeName, setActiveName] = useState<string>("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const logoTextFill = dark ? "white" : "black";

  if (activeUrl) {
    return (
      <div className="flex flex-col h-screen">
        <div className="flex items-center gap-3 bg-rh-gray-light dark:bg-rh-black px-4 py-2 border-b-2 border-rh-red transition-colors">
          <Button
            variant="link"
            onClick={() => setActiveUrl(null)}
            className="!text-rh-black dark:!text-white hover:!text-rh-red flex items-center gap-2 !p-0"
          >
            <ArrowLeftIcon /> Back
          </Button>
          <span className="text-[#666] dark:text-rh-gray text-sm">|</span>
          <span className="text-rh-black dark:text-white font-semibold text-sm">{activeName}</span>
          <div className="ml-auto">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[#666] dark:text-rh-gray hover:text-rh-red transition-colors"
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <iframe
          src={activeUrl}
          className="flex-1 w-full border-0"
          title={activeName}
        />
      </div>
    );
  }

  return (
    <Page
      masthead={
        <Masthead className="!bg-white dark:!bg-rh-black !border-b-2 !border-rh-red !transition-colors">
          <MastheadMain>
            <MastheadBrand>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 750 145"
                height="36"
                aria-label="Red Hat AI"
              >
                <path
                  fill="#e00"
                  d="M127.47 83.49c12.51 0 30.61-2.58 30.61-17.46a14 14 0 0 0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89 8.69 103.76.5 97.51.5 91.69.5 90 8 83.06 8c-6.68 0-11.64-5.6-17.89-5.6-6 0-9.91 4.09-12.93 12.5 0 0-8.41 23.72-9.49 27.16A6.43 6.43 0 0 0 42.53 44c0 9.22 36.3 39.45 84.94 39.45M160 72.07c1.73 8.19 1.73 9.05 1.73 10.13 0 14-15.74 21.77-36.43 21.77C78.54 104 37.58 76.6 37.58 58.49a18.45 18.45 0 0 1 1.51-7.33C22.27 52 .5 55 .5 74.22c0 31.48 74.59 70.28 133.65 70.28 45.28 0 56.7-20.48 56.7-36.65 0-12.72-11-27.16-30.83-35.78"
                />
                <path
                  fill={dark ? "white" : "#e00"}
                  d="M160 72.07c1.73 8.19 1.73 9.05 1.73 10.13 0 14-15.74 21.77-36.43 21.77C78.54 104 37.58 76.6 37.58 58.49a18.45 18.45 0 0 1 1.51-7.33l3.66-9.06A6.43 6.43 0 0 0 42.53 44c0 9.22 36.3 39.45 84.94 39.45 12.51 0 30.61-2.58 30.61-17.46a14 14 0 0 0-.31-3.42"
                />
                <path
                  fill={logoTextFill}
                  d="M579.74 92.8c0 11.89 7.15 17.67 20.19 17.67a52.11 52.11 0 0 0 11.89-1.68V95a24.84 24.84 0 0 1-7.68 1.16c-5.37 0-7.36-1.68-7.36-6.73V68.3h15.56V54.1h-15.56v-18l-17 3.68V54.1h-11.29v14.2h11.25Zm-53 .32c0-3.68 3.69-5.47 9.26-5.47a43.12 43.12 0 0 1 10.1 1.26v7.15a21.51 21.51 0 0 1-10.63 2.63c-5.46 0-8.73-2.1-8.73-5.57m5.2 17.56c6 0 10.84-1.26 15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52 0-16.94 2-26 6.1l6.1 12.52c6.52-2.74 12-4.42 16.83-4.42 7 0 10.62 2.73 10.62 8.31v2.73a49.53 49.53 0 0 0-12.62-1.58c-14.31 0-22.93 6-22.93 16.73 0 9.78 7.78 17.24 20.19 17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12h-18.07v28.29h-30.29V36.12h-18.09Zm-68.86-27.9c0-8 6.31-14.1 14.62-14.1A17.22 17.22 0 0 1 397 72.09v19.45A16.36 16.36 0 0 1 385.24 96c-8.2 0-14.62-6.1-14.62-14.09m26.61 27.87h16.83V32.44l-17 3.68v20.93a28.3 28.3 0 0 0-14.2-3.68c-16.19 0-28.92 12.51-28.92 28.5a28.25 28.25 0 0 0 28.4 28.6 25.12 25.12 0 0 0 14.93-4.83ZM320 67c5.36 0 9.88 3.47 11.67 8.83h-23.2C310.15 70.3 314.36 67 320 67m-28.67 15c0 16.2 13.25 28.82 30.28 28.82 9.36 0 16.2-2.53 23.25-8.42l-11.26-10c-2.63 2.74-6.52 4.21-11.14 4.21a14.39 14.39 0 0 1-13.68-8.83h39.65v-4.23c0-17.67-11.88-30.39-28.08-30.39a28.57 28.57 0 0 0-29 28.81M262 51.58c6 0 9.36 3.78 9.36 8.31S268 68.2 262 68.2h-17.89V51.58Zm-35 58.16h17.05V82.92h13.67l16.94 26.82h18.11l-18.24-28.5c8.73-3.68 13.87-11.15 13.87-20.72 0-13.25-10.41-24.39-27.24-24.39h-34.93Z"
                />
                <text
                  x="625"
                  y="110"
                  fill={logoTextFill}
                  fontFamily="RedHatText, Red Hat Text, Overpass, Open Sans, Helvetica, Arial, sans-serif"
                  fontWeight="bold"
                  fontSize="100"
                >
                  AI
                </text>
              </svg>
            </MastheadBrand>
          </MastheadMain>
          <MastheadContent>
            <div className="flex justify-end w-full">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-rh-gray hover:text-rh-red transition-colors"
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              >
                {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>
          </MastheadContent>
        </Masthead>
      }
    >
      <PageSection className="!bg-white dark:!bg-rh-black !py-16 !transition-colors">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-rh-black dark:text-white">
            AI Quickstart Navigator
          </h1>
          <p className="text-[#666] dark:text-rh-gray mb-10 text-lg">
            Explore Red Hat AI quickstart guides
          </p>
          <Gallery hasGutter minWidths={{ default: "100%", sm: "300px" }}>
            {sites.map((site, index) => (
              <GalleryItem key={site.name}>
                <Card
                  isCompact
                  ouiaId={`nav-card-${index}`}
                  className="!bg-rh-gray-light dark:!bg-[#1a1a1a] !border !border-rh-gray dark:!border-[#333] hover:!border-rh-red !transition-all !duration-200 !cursor-pointer group"
                  onClick={() => {
                    setActiveUrl(site.url);
                    setActiveName(site.name);
                  }}
                >
                  <CardTitle className="!text-rh-black dark:!text-white !text-xl !font-semibold !flex !items-center !justify-between">
                    {site.name}
                    <ExternalLinkAltIcon className="text-[#666] dark:text-rh-gray group-hover:text-rh-red transition-colors" />
                  </CardTitle>
                  <CardBody className="!text-[#666] dark:!text-rh-gray">
                    {site.description}
                  </CardBody>
                  <CardBody>
                    <div className="h-0.5 w-0 group-hover:w-full bg-rh-red transition-all duration-300" />
                  </CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </div>
      </PageSection>
    </Page>
  );
}
