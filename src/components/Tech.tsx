import {
    SiNextdotjs,
    SiReact,
    SiSvelte,
    SiTailwindcss,
    SiGit,
    SiPrisma,
    SiPostgresql,
    SiPython,
    SiDjango,
    SiFlask,
    SiTypescript,
} from "react-icons/si";

function Tech() {
    return (
        <section
            id="tech"
            className="text-white flex flex-col justify-center items center text-center gap-20 font-bold text-sm lg:text-2xl h-screen mt-64 lg:mt-16 "
        >
            <h2>Tech Stack</h2>
            <div className="grid grid-cols-2 gap-12 w-60 lg:w-96 place-self-center">
                <div className="flex justify-center items-center gap-2 text-reactblue">
                    <SiReact className="" />
                    <p>React</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-white">
                    <SiNextdotjs />
                    <p>Next</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-blue-600">
                    <SiTypescript />
                    <p>Typescript</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-windblue">
                    <SiTailwindcss />
                    <p>Tailwind</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-orange-600">
                    <SiSvelte />
                    <p>Svelte</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-orange-700">
                    <SiGit />
                    <p>Git</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-white">
                    <SiPrisma />
                    <p>Prisma</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-sqlblue">
                    <SiPostgresql />
                    <p>PostgreSQL</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-yellow-500">
                    <SiPython />
                    <p>Python</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-green-700">
                    <SiDjango />
                    <p>Django</p>
                </div>
            </div>
        </section>
    );
}

export default Tech;
