const Card = ({ slide, setOrder }) => {

    const {name, price} = slide;

    const handleOrder = () => {
        setOrder({name, price, quantity: 1});
    }

    return (
        <div className="w-full sm:w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] mx-3 lg:mx-0 h-full bg-white p-2 rounded-lg flex flex-col justify-between select-none z-[1]">
            <div className="w-full h-[50%] lg:h-[60%] overflow-hidden">
                <img src={slide.image} alt={`${name}.jpg`} className={`object-cover rounded-t-lg ${slide.positionTop}`}/>
            </div>
            <div className="w-full h-[45%] lg:h-[35%] flex flex-col justify-between">
                <span className="cursive text-md lg:text-2xl font-[600]">{name}</span>
                <p className="text-[12px] lg:text-sm font-[500] tracking-wide">{slide.description}</p>
                <div className="w-full flex justify-between items-center">
                    <span className="text-md lg:text-xl font-[600] font-sans">₱{price}.00</span>
                    <button
                        onClick={handleOrder}
                        className="text-[12px] lg:text-sm px-3 py-1.5 rounded-md border border-primary font-[600] hover:bg-primary hover:text-white">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Card;
