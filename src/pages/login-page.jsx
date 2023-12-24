import Navbar from "../components/Navbar.jsx";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import {useContext, useState} from "react";
import {DataContext} from "../utils/context.js";
import {validate} from "../utils/utils.js";
import axios from "axios";
import {createUserData, STRAPI_URL} from "../utils/data.js";

const LoginPage = () => {

    const getFormData = () => {
        return {email: '', password: ''};
    }
    const navigate = useNavigate();
    const {handleLogin} = useContext(DataContext);
    const [formData, setFormData] = useState(getFormData());

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const fetchOrders = (data) => {
        const {id, token} = data;
        axios.get(`${STRAPI_URL}/api/users/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
                handleLogin(createUserData({...res.data, token}));
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate(formData)) {
            alert("Please fill all the fields!");
            return;
        }
        const {email, password} = formData;
        axios.post(`${STRAPI_URL}/api/auth/local`, {
            identifier: email,
            password
        }).then(res => {
            const {user, jwt} = res.data;
            fetchOrders({id: user.id, token: jwt});
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <Navbar/>
            <section className="w-full h-[calc(100svh-5rem)] flex justify-center items-center bg-gray">
                <form className="px-10 py-10 flex flex-col shadow-lg bg-white" onSubmit={handleSubmit}>
                    <h1 className="text-primary text-center font-[600] text-4xl mb-8 select-none">Login</h1>
                    <label className="font-[500] font-open-sans mb-1">Email</label>
                    <input
                        className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                        type="text"
                        name="email"
                        placeholder="Enter your email *"
                        value={formData.email}
                        onChange={handleChange}/>
                    <label className="font-[500] font-open-sans mt-2 mb-1">Password</label>
                    <input
                        className="border w-80 outline-0 border-zinc-400 focus:border-blue-300 rounded-sm py-1 px-2 font-open-sans text-sm"
                        type="password"
                        name="password"
                        placeholder="Enter your password *"
                        value={formData.password}
                        onChange={handleChange}/>
                    <button className="mt-8 py-2 bg-primary text-white font-[600]" type="submit">Submit</button>
                    <span className="text-primary text-sm font-open-sans mt-1.5 text-center">Don't have an account?
                        <Link to="/register" className="font-[600] underline cursor-pointer ml-1.5">Register</Link></span>
                </form>
            </section>
            <Footer/>
        </>
    )
}
export default LoginPage;
