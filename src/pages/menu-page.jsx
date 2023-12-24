import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useContext, useEffect, useState} from "react";
import {scrollToTop, setPage} from "../utils/utils.js";
import MenuSlider from "../components/menu-slider.jsx";
import {coffee, pastries} from "../utils/food-data.js";
import Confirmation from "../components/confirmation.jsx";
import axios from "axios";
import {createOrderData, STRAPI_URL} from "../utils/data.js";
import {DataContext} from "../utils/context.js";

const MenuPage = () => {

    const {user, setUser} = useContext(DataContext);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        setPage("Home");
        scrollToTop();
    }, []);

    const handleOrder = () => {
        const {name, price, quantity} = order;
        const formData = {name, price, quantity};
        axios.post(`${STRAPI_URL}/api/orders`, {data: {...formData, user: user.id}}, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => {
            setUser({...user, orders: [...user.orders, createOrderData({name, price, quantity})]});
        }).catch(error => {
            console.log(error);
        })
        setOrder(null);
    }

    const handleSubmit = (result) => {
        if(!result) {
            setOrder(null);
            return;
        }
        handleOrder();
    }

    return (
        <>
            <Navbar page="menu"/>
            <section className="w-full bg-gray flex justify-center">
                <div className="min-h-svh w-[260px] sm:w-[640px] md:w-[768px] lg:w-[1024px] py-20 flex flex-col items-center">
                    <h1 className="cursive text-4xl text-primary font-[500] mb-5">Coffee</h1>
                    <MenuSlider slides={coffee} setOrder={setOrder}/>
                    <h1 className="cursive text-4xl text-primary font-[500] mb-5 mt-20">Pastries</h1>
                    <MenuSlider slides={pastries} setOrder={setOrder}/>
                </div>
            </section>
            <Footer/>
            {order && <Confirmation handleSubmit={handleSubmit}/>}
        </>
    )
}
export default MenuPage;
