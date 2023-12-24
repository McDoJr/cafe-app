import {DataContext} from "./utils/context.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import MenuPage from "./pages/menu-page.jsx";
import ContactPage from "./pages/contact-page.jsx";
import LoginPage from "./pages/login-page.jsx";
import RegisterPage from "./pages/register-page.jsx";
import {useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import {createOrderData, createUserData, STRAPI_URL} from "./utils/data.js";
import CartPage from "./pages/cart-page.jsx";

const App = () => {

    const cookies = new Cookies();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = cookies.get("mc_token");
        if(token) {
            setLoading(true);
            const {id} = jwtDecode(token);
            axios.get(`${STRAPI_URL}/api/users/${id}?populate=*`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                    let {orders} = res.data;
                    orders = orders.map(order => createOrderData(order));
                    setUser(createUserData({...res.data, token, orders}));
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                })
        }
    }, []);

    if(loading) {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
                <h1 className="text-white text-7xl font-primary">Madame’s Café</h1>
                <span className="text-white my-4 font-open-sans">Starting backend server.....</span>
                <div className="loader mt-5"></div>
            </div>
        )
    }

    const handleLogin = (userData) => {
        const {token} = userData;
        const decoded = jwtDecode(token);
        let {orders} = userData;
        orders = orders.map(order => createOrderData(order));
        setUser({...userData, orders});
        cookies.set('mc_token', token, {
           expires: new Date(decoded.exp * 1000)
        });
    }

    const handleLogout = () => {
        cookies.remove("mc_token");
        setUser(null);
    }

    return (
        <DataContext.Provider value={{user, setUser, handleLogin, handleLogout}}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/profile/cart" element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}
export default App;
