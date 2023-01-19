import { useState } from "react";
import { Transition } from "@headlessui/react";

type projectCardProps = {
    title: string;
    imageSource: string;
    repoURL: string;
    children: React.ReactNode;
};

function ProjectCard(props: projectCardProps) {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div
            className="project-card relative scale-90 overflow-x-hidden col-span-1 text-center text-lg hover:scale-110 transition-all rounded hover:z-10"
            onMouseEnter={() => {
                setShowDescription(true);
            }}
            onMouseLeave={() => {
                setShowDescription(false);
            }}
            onClick={() => {
                window.open(props.repoURL, "_blank");
            }}
        >
            <h1 className="text-white font-bold">{props.title}</h1>
            <img
                src={props.imageSource}
                alt="screenshot"
                className="object-fill"
            />
            <Transition
                show={showDescription}
                className="absolute bottom-0 left-4 right-4 lg:left-0 lg:right-0 bg-black rounded text-white px-2 py-1 text-center lg:rounded-none"
            >
                {props.children}
            </Transition>
        </div>
    );
}

export default ProjectCard;
