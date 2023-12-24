import {getImage} from "../utils/food-data.js";
import {useContext, useState} from "react";
import axios from "axios";
import {DataContext} from "../utils/context.js";
import {STRAPI_URL} from "../utils/data.js";

const CartCard = ({order, updateOrders, updateQuantity}) => {

    const {user} = useContext(DataContext);
    const {name, price, quantity} = order;
    const [amount, setAmount] = useState(quantity);
    const image = getImage(name);

    const handleChecked = (e) => {
        const {checked} = e.target;
        order.checked = checked;
        updateOrders();
    }


    const updateAmount = (num) => {
        const currentAmount = amount + num;
        setAmount(currentAmount);
        update(currentAmount);
        order.quantity = currentAmount;
        updateQuantity();
    }

    const update = (amount) => {
        axios.put(`${STRAPI_URL}/api/orders/${order.id}`, {data: {quantity: amount}}, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(() => {
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="w-[700px] flex items-center bg-white py-2 px-4 shadow-md mb-4 relative">
            <input type="checkbox"
                   name="checked"
                   className="absolute top-[50%] translate-y-[-50%] left-[-30px] w-4 h-4"
                   onChange={handleChecked}/>
            <div className="overflow-hidden w-20 h-20">
                <img className="object-cover" src={image} alt={`${name}.jpg`}/>
            </div>
            <div className="flex flex-col ml-5">
                <span className="font-open-sans my-2">{name}</span>
                <span className="font-open-sans my-2">₱{price}</span>
            </div>
            <div className="flex items-center ml-auto">
                <button className="font-open-sans px-2.5 bg-primary text-white" onClick={() => updateAmount(-1)}>-</button>
                <span className="w-8 h-6 font-open-sans text-[12px] font-[600] text-center leading-6">{amount}</span>
                <button className="font-open-sans px-2 bg-primary text-white" onClick={() => updateAmount(1)}>+</button>
            </div>
        </div>
    )
}
export default CartCard;
