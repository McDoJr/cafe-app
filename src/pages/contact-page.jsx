import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <section className="w-full h-[calc(100svh-5rem)] bg-gray flex justify-center items-center">
                <form className="px-10 py-10 flex flex-col shadow-lg bg-white">
                    <h1 className="text-primary font-[600] text-4xl mb-8 select-none">Contact Us</h1>
                    <label className="font-[500] font-open-sans mb-1">Subject</label>
                    <input
                        className="border w-80 sm:w-96 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                        type="text"
                        placeholder="Subject *"/>
                    <label className="font-[500] font-open-sans mt-5 mb-1">Message</label>
                    <textarea
                        className="border w-80 sm:w-96 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm min-h-36 max-h-36"
                        placeholder="Enter your message *"/>
                    <button className="mt-8 py-2 bg-primary text-white font-[600]">Send</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}
export default ContactPage;
