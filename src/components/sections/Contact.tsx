import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

function Contact() {
    return (
        <section
            id="contact"
            className="text-white flex justify-center items-center gap-8 text-3xl mb-4 mt-16"
        >
            <a href="https://github.com/msyavuz" target="_blank">
                <BsGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/mehmetsalihyavuz/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/msalihyavuz/" target="_blank">
                <BsInstagram />
            </a>
        </section>
    );
}

export default Contact;
