import {FaCaretUp} from "react-icons/fa6";
import {useEffect, useState} from "react";

const ScrollUp = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        const listener = () => {
            setActive(window.scrollY > 100);
        }

        window.addEventListener('scroll', listener);

        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <FaCaretUp className={`fixed right-[50px] bg-primary rounded-[50%] text-white w-[45px] h-[45px] px-[10px] pt-[8px] pb-[6px] shadow-primary-lighter shadow-sm transition-all delay-100 ease-in cursor-pointer ${active ? "opacity-[1] bottom-[50px]" : "opacity-0 bottom-[70px]"}`} onClick={scrollToTop}/>
    )
}
export default ScrollUp;
