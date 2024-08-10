const Button = ({type, classNames, children}) => {
    return (
        <button type={type || 'button'} className={`bg-[#4A96FF] rounded-[4px] py-1.5 px-3 text-white ${classNames}`}>
            {children}
        </button>
    )
}

export default Button