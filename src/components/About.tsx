function About() {
    return (
        <section
            className="flex justify-center items-center flex-col gap-12 text-white font-bold text-3xl lg:text-xl text-center pt-24"
            id="about"
        >
            <img
                src="/assets/pp.webp"
                alt="profile picture"
                className="w-4/5 lg:w-1/5"
            />
            <p className="">
                Self taught developer with a passion for learning
            </p>
        </section>
    );
}

export default About;
