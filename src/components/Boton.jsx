const Boton = ({signo, funcionHandle}) => {
    return (
        <button
            type="button"
            className="w-10 h-10 flex items-center justify-center font-bold text-white text-2xl bg-pink-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-pink-500"
            onClick={funcionHandle}
        >
            {signo}
        </button>
    )
}

export default Boton