import Card from "../UI/Card";
import Button from "../UI/Button";
import { BsChatDots } from "react-icons/bs";
import { PiDotsThree } from "react-icons/pi";
import { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Modal from "./Modal";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [userName, setUserName] = useState("User")

    const posts = [
        {
            id: 'dsafjklda_8798687@^#$^dkjfhs',
            username: 'Theresa Webb',
            img: '../../public/assets/user1.png',
            emoji: '👋',
            postTime: '5mins',
            editStatus: false,
            postMessage: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 'cxzmvmzcxbv_4e5232563%$%$*^xczmvn',
            username: 'Marvin McKinney',
            img: '../../public/assets/user1.png',
            emoji: '😞',
            postTime: '8mins',
            editStatus: true,
            postMessage: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
    ];

    useEffect(() => {
        if(localStorage.userAuth) {
            setUserName(JSON.parse(localStorage.userAuth).username)
        }
        if (userName !== 'User') {
            setShowLogin(() => true);
        } else setShowRegister(() => true);

    }, [localStorage.userAuth])
    const createPost = (e) => {
        e.preventDefault();
        return;
    }

    const getImageURL = (imgSrc) => {
        return new URL(`${imgSrc}`, import.meta.url)
    }

    const handleShowRegister = () => {
        setShowRegister(() => true);
        setShowLogin(() => false);
    }
    const handleShowLogin = () => {
        setShowLogin(() => true);
        setShowRegister(() => false);
    }

    return (
        <>
            <div className="w-1/3 min-w-[500px]">
                <h1 className="text-3xl text-[#C5C7CA] mb-3">Hello {userName}</h1>
                <p className="text-base text-[#7F8084] w-4/5 mb-9">How are you doing today? Would you like to share something with the community &#129303;</p>
                <Card classNames={'w-full px-4 py-3'} onModalOpen={() => setIsModalOpen(true)}>
                    <div className="text-[#C5C7CA] pl-0.5 py-2">Create Post</div>
                    <form onSubmit={createPost} className="flex flex-col">
                        <div className="flex items-center bg-[#191920] rounded-lg px-3 py-4">
                            <span className="text-white p-3 rounded-full bg-[#27292D] mr-2">
                                <BsChatDots />
                            </span>
                            <span className="flex items-center w-full h-full">
                                <textarea id="comment" rows="2" className="w-full text-sm text-[#7F8084] bg-transparent
                    border-0 focus:ring-0 resize-none px-2 placeholder:pt-2" placeholder="How are you feeling today?" ></textarea>
                            </span>
                        </div>
                        <Button type={'submit'} classNames={'mt-3 self-end'}>Post</Button>
                    </form>
                </Card>
                {
                    posts.map(post => (
                        <Card classNames={'w-full px-4 py-3'} onModalOpen={() => setIsModalOpen(true)} key={post.id}>
                            <div className="flex justify-between items-center py-1">
                                <div className="text-[#C5C7CA] flex gap-3 py-3">
                                    <img src={getImageURL(post.img)} alt="user-image" className="w-12 h-12 rounded-full object-cover" />
                                    <div id="user-info">
                                        <div className="text-base">{post.username}</div>
                                        <div className="flex gap-2 text-sm text-[#7F8084]">
                                            <span>{post.postTime}</span>
                                            {post.editStatus && (
                                                <>
                                                    <span>&#8226;</span>
                                                    <span>Edited</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white self-start mt-4 cursor-pointer">
                                    <PiDotsThree />
                                </div>
                            </div>
                            <div className="flex items-center bg-[#191920] rounded-lg px-3 py-4">
                                <span className="text-white px-3 py-2.5 rounded-full bg-[#27292D] mr-2">
                                    {post.emoji}
                                </span>
                                <span className="flex items-center w-full h-full">
                                    <div id="comment" rows="2" className="w-full text-sm text-[#7F8084] bg-transparent
                    border-0 focus:ring-0 resize-none px-2 placeholder:pt-2" placeholder="How are you feeling today?">
                                        {post.postMessage}
                                    </div>
                                </span>
                            </div>
                        </Card>
                    ))
                }
            </div>
            {isModalOpen && (<Modal>
                {showRegister && <Register renderCloseButton={true} onClose={() => setIsModalOpen(false)} onShowLogin={handleShowLogin} />}

                {showLogin && <Login renderCloseButton={true} onClose={() => setIsModalOpen(false)} onShowRegister={handleShowRegister} />}

            </Modal>)}
        </>
    )
}

export default Home