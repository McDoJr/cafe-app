import {FaBars, FaCartShopping, FaCircleUser, FaUser, FaXmark} from "react-icons/fa6";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import {DataContext} from "../utils/context.js";

const Navbar = ({page}) => {

    const ref = useRef(null);
    const navigate = useNavigate();
    const {user, handleLogout} = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const listener = () => {
            if(open) {
                window.scroll({top: 0});
            }
        }

        window.addEventListener('scroll', listener);

        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, [open]);

    useEffect(() => {
        const listener = (e) => {
            if(!ref.current?.contains(e.target) && dropdown) {
                setDropdown(false);
            }
        }

        document.addEventListener('click', listener);

        return () => {
            document.removeEventListener('click', listener);
        }
    }, [dropdown]);

    const toggleDropdown = () => setDropdown(!dropdown);

    const toggle = () => {
        setOpen(!open);
    }

    const applyFocusedStyle = (name) => {
        return name === page ? ' border-b-white ' : ' ';
    }

    const goToLink = (link) => {
        setOpen(false);
        navigate(link);
    }

    const logoutUser = () => {
        handleLogout();
        setDropdown(false);
    }

    return (
        <div className="w-full h-20 bg-primary flex justify-center shadow-md">
            <div className="w-[350px] tablet:w-[640px] md:w-[768px] lg:w-[1024px] 2xl:w-[1280px] h-full flex justify-between items-center bg-primary text-white select-none">
                <h1 className="font-primary text-4xl md:text-5xl cursor-pointer" onClick={() => navigate("/")}>Madame’s Café</h1>
                <div className="hidden md:flex">
                    <Link to="/home"
                          className={`text-md md:text-lg font-[500] pb-1${applyFocusedStyle('home')}cursor-pointer hover:text-primary-light mx-2 border-[2px] border-transparent`}
                          name="home">Home</Link>
                    <Link to="/menu"
                          className={`text-md md:text-lg font-[500] pb-1${applyFocusedStyle('menu')}cursor-pointer hover:text-primary-light mx-2 border-[2px] border-transparent`}
                          name="menu">Menu</Link>
                    <Link to="/contact"
                          className={`text-md md:text-lg font-[500] pb-1${applyFocusedStyle('contact')}cursor-pointer hover:text-primary-light mx-2 border-[2px] border-transparent`}
                          name="contact">Contact</Link>
                </div>
                {user ? (
                    <div className="flex items-center">
                        <div className="relative mr-5 cursor-pointer"
                             onClick={() => navigate("/profile/cart")}>
                            <FaCartShopping className="w-7 h-7"/>
                            <span className="absolute top-[-5px] right-[-7px] text-[10px] text-white bg-primary rounded-[50%]
                                w-[22px] h-[22px] leading-[20px] text-center border border-white">{user.orders.length}</span>
                        </div>
                        <div ref={ref} className="relative">
                            <FaCircleUser className="w-7 h-7 cursor-pointer" onClick={toggleDropdown}/>
                            <div className={dropdown ? "absolute left-[-32px] top-7 bg-white flex flex-col shadow-sm px-1.5 py-1.5" : "hidden"}>
                                <span className="text-sm font-[500] text-primary px-5 py-1 border-b border-b-transparent hover:border-b-primary cursor-pointer">Profile</span>
                                <span className="text-sm font-[500] text-primary px-5 py-1 border-b border-b-transparent hover:border-b-primary cursor-pointer"
                                      onClick={logoutUser}>Logout</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button className="hidden md:block bg-white hover:bg-primary-lighter text-primary hover:text-white px-10 py-2 font-[700] tracking-wide"
                            onClick={() => navigate("/login")}>Login</button>
                )}

                {open ? <FaXmark className="w-6 h-6 cursor-pointer md:hidden" onClick={toggle}/> : <FaBars className="w-6 h-6 cursor-pointer md:hidden" onClick={toggle}/>}
            </div>
            <div className={open ? 'fixed left-0 top-20 w-full h-screen flex flex-col items-center py-3 bg-primary/95 z-10' : 'hidden'}>
                <a onClick={() => goToLink("/home")} className={`w-[200px] text-center text-white text-lg font-[500] pb-1${applyFocusedStyle('home')}cursor-pointer hover:text-primary-light border-[2px] border-transparent`}>Home</a>
                <a onClick={() => goToLink("/menu")} className={`w-[200px] mt-2 text-center text-white text-lg font-[500] pb-1${applyFocusedStyle('menu')}cursor-pointer hover:text-primary-light border-[2px] border-transparent`}>Menu</a>
                <a onClick={() => goToLink("/contact")} className={`w-[200px] mt-2 text-center text-white text-lg font-[500] pb-1${applyFocusedStyle('contact')}cursor-pointer hover:text-primary-light border-[2px] border-transparent`}>Contact</a>
                <button className="bg-white mt-5 hover:bg-primary-lighter text-primary hover:text-white px-20 py-2 font-[700] tracking-wide"
                        onClick={() => goToLink("/login")}>Login</button>
            </div>
        </div>
    )
}
export default Navbar;
