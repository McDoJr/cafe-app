import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useContext, useState} from "react";
import {DataContext} from "../utils/context.js";
import CartCard from "../components/cart-card.jsx";

const CartPage = () => {

    const {user, setUser} = useContext(DataContext);
    const [clicked, setClicked] = useState(false);

    const toggleClicked = () => setClicked(!clicked);

    const updateOrders = () => {
        setUser(user);
        toggleClicked();
    }


    const getTotal = () => {
        return user.orders
            .filter(order => order.checked)
            .reduce((total, order) => total + (order.price * order.quantity), 0);
    }

    return (
        <>
            <Navbar/>
            <section className="w-full h-screen bg-gray pt-20 px-32 flex flex-col items-center relative">
                {user && (
                    <div className="absolute right-10 top-10 flex items-center">
                        <span className="font-open-sans text-[14px] font-bold mr-5">Total: ₱{getTotal()}.00</span>
                        <button className="bg-primary text-white font-[500] py-1.5 px-6">checkout</button>
                    </div>
                )}
                {user && user.orders.map((order, index) => {
                    return <CartCard order={order} updateOrders={updateOrders} key={index}/>
                })}
            </section>
            <Footer/>
        </>
    )
}
export default CartPage;
