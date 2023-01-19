import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

function Contact() {
    return (
        <section
            id="contact"
            className="text-white flex justify-center items-center gap-8 text-3xl mb-4 mt-16"
        >
            <a
                href="https://github.com/msyavuz"
                target="_blank"
                aria-label="github page for msyavuz"
            >
                <BsGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/mehmetsalihyavuz/"
                target="_blank"
                aria-label="linkedin page for msyavuz"
            >
                <BsLinkedin />
            </a>
            <a
                href="https://www.instagram.com/msalihyavuz/"
                target="_blank"
                aria-label="instagram page for msyavuz"
            >
                <BsInstagram />
            </a>
        </section>
    );
}

export default Contact;
