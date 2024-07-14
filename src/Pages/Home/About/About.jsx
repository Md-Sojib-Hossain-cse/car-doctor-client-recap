import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero mt-8 md:mt-10 lg:mt-12">
            <div className="hero-content flex-col gap-12 lg:gap-0 lg:flex-row">
                <div className="w-full md:w-1/2 relative">
                    <img
                        src={person}
                        className="rounded-lg shadow-2xl w-3/4" />
                    <img
                        src={parts}
                        className="absolute w-1/2 md:right-10 top-1/2 max-w-sm rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h3 className="text-[#FF3811] text-base md:text-lg lg:text-xl font-bold mb-5">About Us</h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-96 text-[#151515] mb-7">We are qualified & of experience in this field</h1>
                    <p className="mb-5 text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="mb-7  text-sm md:text-base">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-default bg-[#FF3811] text-white btn-sm md:btn-md">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;