const Confirmation = ({handleSubmit}) => {

    return (
        <div className="w-full h-screen fixed top-0 bg-black/50 left-0 flex justify-center items-center z-20">
            <div className="bg-white w-60 h-40 flex justify-center items-center">
                <button className="text-white text-sm outline-0 w-20 py-1 bg-primary cursor-pointer mx-2 border-2 border-transparent"
                       autoFocus={true}
                        onClick={() => handleSubmit(true)}>confirm</button>
                <button className="text-primary text-sm font-[600] outline-0 w-20 py-1 bg-white cursor-pointer mx-2 border-2 border-primary"
                        onClick={() => handleSubmit(false)}>cancel</button>
            </div>
        </div>
    )
}
export default Confirmation;
