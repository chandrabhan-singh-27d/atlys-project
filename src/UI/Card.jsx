
const Card = ({ classNames, children }) => {
    return (
        <div className="bg-gradient-to-r from-[#969696] to-[#343434] max-w-sm rounded-lg p-0.5 min-w-96">
            <div className={`rounded-lg bg-[#27292D] ${classNames}`}>
                {children}
            </div>
        </div>
    )
}

export default Card