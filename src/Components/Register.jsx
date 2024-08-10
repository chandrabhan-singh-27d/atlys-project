import { useState } from "react";
import Card from "../UI/Card"
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import Button from "../UI/Button";



const Register = () => {
    const [passwordVisible, setPasswordVisibility] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        localStorage.setItem('userAuth', JSON.stringify({
            username,
            password
        }));
        setUsername("");
        setPassword("");
        /* navigate to show post */
        alert("Welcome to Atlys!");
    }
    return (
        <form onSubmit={registerUser}>
            <Card classNames={`py-4 px-4 flex flex-col items-center`}>
                <p className="font-medium text-sm text-[#6B6C70] leading-4 ">SIGN UP</p>
                <h4 className="font-semibold text-lg text-white leading-5 py-2 mb-2">Create an account to continue</h4>
                <div className="flex flex-col w-full pt-3">
                    <label htmlFor="email" className="font-medium text-sm text-[#C5C7CA] leading-4 py-1 px-0.5">Email</label>
                    <input type="email" id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="bg-transparent border-[1.5px] border-[#35373B] text-white text-sm rounded w-full py-1 px-2.5 placeholder-[#7F8084]" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col w-full py-2">
                    <label htmlFor="username" className="font-medium text-sm text-[#C5C7CA] leading-4 py-1 px-0.5">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-transparent border-[1.5px] border-[#35373B] text-white text-sm rounded w-full py-1 px-2.5 placeholder-[#7F8084]" placeholder="Choose a preffered username" />
                </div>
                <div className="w-full">
                    <div className="flex justify-between py-1 px-0.5">
                        <label htmlFor="password" className="font-medium text-sm text-[#C5C7CA] leading-4">Password</label>
                    </div>
                    <div className="relative">
                        <input type={passwordVisible ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-transparent border-[1.5px] border-[#35373B] text-white text-sm rounded w-full py-1 px-2.5 placeholder-[#7F8084]" placeholder="Choose a strong password" />
                        <span className="absolute top-[20%] right-2 cursor-pointer text-[#C5C7CA]">
                            {passwordVisible
                                ? <PiEyeSlashLight
                                    onClick={(e) => setPasswordVisibility(false)}
                                />
                                : <PiEyeLight
                                    onClick={(e) => setPasswordVisibility(true)}
                                />}
                        </span>
                    </div>
                    <Button type={'submit'} classNames={`w-full mt-5 mb-2`}>Continue</Button>
                    <div className="flex items-center gap-1 px-0.5 text-sm">
                        <p className="text-[#7F8084]">Already have an account?</p>
                        <p className="text-[#C5C7CA] cursor-pointer">Login</p>
                        <span className="text-[#C5C7CA] mt-0.5 cursor-pointer">
                            <GoArrowRight />
                        </span>
                    </div>
                </div>
            </Card >
        </form>
    )
}

export default Register