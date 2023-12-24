import {useState} from "react";
import Card from "./card.jsx";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";

const MenuSlider = ({slides, setOrder}) => {

    const [page, setPage] = useState(1);
    const lastIndex = slides.length-1;

    const setCurrentPage = (amount) => {
        let currentPage = page + amount;
        if(currentPage < 0) {
            currentPage = lastIndex;
        }else if(currentPage > lastIndex) {
            currentPage = 0;
        }
        setPage(currentPage);
    }

    const getThreeSlides = () => {
        if(page === 0) {
            return [lastIndex, 0, 1];
        }
        if(page === lastIndex) {
            return [page-1, page, 0];
        }
        return [page-1, page, page+1];
    }

    const getTwoSlides = () => {
        if(page === 0) {
            return [lastIndex, page];
        }
        if(page === lastIndex) {
            return [page, 0];
        }
        return [page-1, page];
    }

    return (
        <div className="w-full flex justify-between relative">
            <div className="hidden w-full h-[500px] lg:flex justify-between relative">
                <FaChevronLeft className="absolute top-[50%] translate-y-[-50%] text-primary left-[110px] md:left-[80px] lg:left-[-50px] w-10 h-10 cursor-pointer" onClick={() => setCurrentPage(-1)}/>
                {getThreeSlides().map((index) => {
                    return <Card slide={slides[index]} setOrder={setOrder} key={index}/>
                })}
                <FaChevronRight className="absolute top-[50%] translate-y-[-50%] text-primary right-[110px] md:right-[80px] lg:right-[-50px] w-10 h-10 cursor-pointer" onClick={() => setCurrentPage(1)}/>
            </div>
            <div className="w-full h-[400px] lg:h-[500px] hidden md:flex lg:hidden justify-center relative">
                <FaChevronLeft className="absolute top-[50%] translate-y-[-50%] text-primary left-[110px] md:left-[80px] lg:left-[-50px] w-10 h-10 cursor-pointer" onClick={() => setCurrentPage(-1)}/>
                {getTwoSlides().map((index) => {
                    return <Card slide={slides[index]} setOrder={setOrder} key={index}/>
                })}
                <FaChevronRight className="absolute top-[50%] translate-y-[-50%] text-primary right-[110px] md:right-[80px] lg:right-[-50px] w-10 h-10 cursor-pointer" onClick={() => setCurrentPage(1)}/>
            </div>
            <div className="w-full h-[400px] lg:h-[500px] flex md:hidden justify-center relative">
                <FaChevronLeft className="absolute top-[50%] translate-y-[-50%] text-primary left-[-40px] sm:left-[100px] md:left-[-20px] w-10 h-10 cursor-pointer" onClick={() => setCurrentPage(-1)}/>
                <Card slide={slides[page]} setOrder={setOrder}/>
                <FaChevronRight className="absolute top-[50%] translate-y-[-50%] text-primary right-[-40px] sm:right-[100px] md:right-[-20px] w-10 h-10 cursor-pointer" onClick={() => setCurrentPage(1)}/>
            </div>
        </div>
    )
}
export default MenuSlider;
