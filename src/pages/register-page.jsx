import Navbar from "../components/Navbar.jsx";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import {validate} from "../utils/utils.js";
import axios from "axios";
import {STRAPI_URL} from "../utils/data.js";

const RegisterPage = () => {

    const getFormData = () => {
        return {firstname: '', lastname: '', username: '', email: '', password: '', confirm_password: ''};
    }

    const navigate = useNavigate();
    const [formData, setFormData] = useState(getFormData());

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate(formData)) {
            alert("Please fill all the fields!");
            return;
        }
        const {firstname, lastname, username, email, password, confirm_password} = formData;
        axios.post(`${STRAPI_URL}/api/auth/local/register`, formData)
            .then(res => {
                console.log(res.data);
                navigate("/login");
            }).catch(error => {
                console.log(error);
        })
    }

    return (
        <>
            <Navbar/>
            <section className="w-full py-10 md:py-0 md:h-[calc(100svh-5rem)] flex justify-center items-center bg-gray">
                <form className="px-10 py-10 flex flex-col shadow-lg bg-white" onSubmit={handleSubmit}>
                    <h1 className="text-primary text-center font-[600] text-4xl mb-8 select-none">Register</h1>
                    <div className="w-full flex flex-col sm:flex-row">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="flex flex-col sm:mr-5">
                                <label className="font-[500] font-open-sans mb-1">First Name</label>
                                <input
                                    className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                                    type="text"
                                    placeholder="Enter your first name *"
                                    name="firstname"
                                    onChange={handleChange}
                                    value={formData.firstname}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-[500] font-open-sans mt-2 sm:mt-0 mb-1">Last Name</label>
                                <input
                                    className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                                    type="text"
                                    placeholder="Enter your last name *"
                                    name="lastname"
                                    onChange={handleChange}
                                    value={formData.lastname}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row sm:mt-2">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="flex flex-col sm:mr-5">
                                <label className="font-[500] font-open-sans mt-2 sm:mt-0 mb-1">Username</label>
                                <input
                                    className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                                    type="text"
                                    placeholder="Enter your username *"
                                    name="username"
                                    onChange={handleChange}
                                    value={formData.username}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-[500] font-open-sans mt-2 sm:mt-0 mb-1">Email</label>
                                <input
                                    className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                                    type="email"
                                    placeholder="Enter your email *"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row sm:mt-2">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="flex flex-col sm:mr-5">
                                <label className="font-[500] font-open-sans mt-2 sm:mt-0 mb-1">Password</label>
                                <input
                                    className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                                    type="password"
                                    placeholder="Enter your password *"
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-[500] font-open-sans mt-3 sm:mt-0 mb-1">Confirm Password</label>
                                <input
                                    className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                                    type="password"
                                    placeholder="Confirm your password *"
                                    name="confirm_password"
                                    onChange={handleChange}
                                    value={formData.confirm_password}/>
                            </div>
                        </div>
                    </div>
                    <button className="mt-8 py-2 w-80 bg-primary text-white font-[600] self-center" type="submit">Submit</button>
                    <span className="text-primary text-sm font-open-sans mt-1.5 text-center">Already have an account?
                        <Link to="/login" className="font-[600] underline cursor-pointer ml-1.5">Login</Link></span>
                </form>
            </section>
            <Footer/>
        </>
    )
}
export default RegisterPage;
