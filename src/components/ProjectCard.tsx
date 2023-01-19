import { useState } from "react";
import { Transition } from "@headlessui/react";

type projectCardProps = {
    title: string;
    imageSource: string;
    children: React.ReactNode;
};

function ProjectCard(props: projectCardProps) {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div
            className="project-card"
            onClick={() => {
                setShowDescription((prev) => !prev);
            }}
        >
            <Transition show={showDescription}>{props.children}</Transition>
        </div>
    );
}

export default ProjectCard;
