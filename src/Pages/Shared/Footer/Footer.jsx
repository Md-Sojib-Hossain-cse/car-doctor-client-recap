import { IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import logo from "../../../assets/logo.svg";

const Footer = () => {
    return (
        <section className="bg-black mt-12 md:mt-24 lg:mt-32">
            <footer className="footer max-w-6xl mx-auto p-10">
                <aside className="space-y-5">
                    <img src={logo} alt="" className="w-16" />
                    <p className="max-w-[283px] text-[#F3F3F3]">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className="space-x-1">
                        <button className="text-[#F3F3F3] text-base p-3 rounded-full bg-[#FFFFFF1A]"><a href="mailto:arifulislamofficial26@gmail.com" target="_blank"><IoLogoGoogle /></a></button>
                        <button className="text-[#F3F3F3] text-base p-3 rounded-full bg-[#FFFFFF1A]"><a href="https://x.com/MDSOJIBHOS22770" target="_blank"><IoLogoTwitter /></a></button>
                        <button className="text-[#F3F3F3] text-base p-3 rounded-full bg-[#FFFFFF1A]"><a href="https://www.instagram.com/ariful_islam_083/" target="_blank"><IoLogoInstagram /></a ></button>
                        <button className="text-[#F3F3F3] text-base p-3 rounded-full bg-[#FFFFFF1A]"><a href="https://www.linkedin.com/in/md-sojib-hossain-059a6b230/" target="_blank"><IoLogoLinkedin /></a></button>
                    </div>
                </aside>
                <nav className="space-y-2 md:space-y-8 lg:space-y-10">
                    <h6 className="text-xl font-semibold text-white">About</h6>
                    <div className="flex flex-col gap-2">
                        <a className="link link-hover text-[#F3F3F3]">Home</a>
                        <a className="link link-hover text-[#F3F3F3]">Service</a>
                        <a className="link link-hover text-[#F3F3F3]">Contact</a>
                    </div>
                </nav>
                <nav className="space-y-2 md:space-y-8 lg:space-y-10">
                    <h6 className="text-xl font-semibold text-white">Company</h6>
                    <div className="flex flex-col gap-2">
                        <a className="link link-hover text-[#F3F3F3]">Why car doctor</a>
                        <a className="link link-hover text-[#F3F3F3]">About</a>
                    </div>
                </nav>
                <nav className="space-y-2 md:space-y-8 lg:space-y-10">
                    <h6 className="text-xl font-semibold text-white">Support</h6>
                    <div className="flex flex-col gap-2">
                        <a className="link link-hover text-[#F3F3F3]">Support center</a>
                        <a className="link link-hover text-[#F3F3F3]">Feedback</a>
                        <a className="link link-hover text-[#F3F3F3]">Accessibility</a>
                    </div>
                </nav>
            </footer>
        </section>
    );
};

export default Footer;