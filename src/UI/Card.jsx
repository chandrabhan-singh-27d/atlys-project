
const Card = ({ classNames, onModalOpen, children }) => {
    return (
        <div onClick={onModalOpen} className="bg-gradient-to-r from-[#969696] to-[#343434] rounded-lg p-0.5 min-w-96 my-3">
            <div className={`rounded-lg bg-[#27292D] ${classNames}`}>
                {children}
            </div>
        </div>
    )
}

export default Card