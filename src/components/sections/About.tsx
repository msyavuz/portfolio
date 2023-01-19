function About() {
    return (
        <section
            className="flex justify-center items-center flex-col gap-12 text-white font-bold text-3xl lg:text-xl text-center pt-24"
            id="about"
        >
            <h1 className="text-3xl">Salih Yavuz</h1>
            <img
                src="/assets/pp.webp"
                alt="profile picture"
                className="w-4/5 lg:w-1/5"
                loading="lazy"
            />
            <p className="">
                Self taught developer with a passion for learning
            </p>
        </section>
    );
}

export default About;
