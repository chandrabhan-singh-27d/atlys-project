import { useState } from "react";
import Card from "../UI/Card"
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import Button from "../UI/Button";



const Login = () => {
    const [passwordVisible, setPasswordVisibility] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();
        if(localStorage.userAuth) {
            if(username !== JSON.parse(localStorage.userAuth).username || password !== JSON.parse(localStorage.userAuth).password) {
                alert("Username or password is incorrect")
                return;
            } else {
                /* Navigate to post page */
            }
        } else {
            alert("Please register before moving ahead");
            /* Navigate to register page */
        }
    }
    return (
        <form onSubmit={loginUser}>
            <Card classNames={`py-4 px-4 flex flex-col items-center`}>
                <p className="font-medium text-sm text-[#6B6C70] leading-4 ">WELCOME BACK</p>
                <h4 className="font-semibold text-lg text-white leading-5 py-2 mb-2">Log into your account</h4>
                <div className="flex flex-col w-full py-3">
                    <label htmlFor="email" className="font-medium text-sm text-[#C5C7CA] leading-4 py-1 px-0.5">Email or Username</label>
                    <input type="text" id="email" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-transparent border-[1.5px] border-[#35373B] text-white text-sm rounded w-full py-1 px-2.5 placeholder-[#7F8084]" placeholder="Enter your email or username" />
                </div>
                <div className="w-full">
                    <div className="flex justify-between py-1 px-0.5">
                        <label htmlFor="password" className="font-medium text-sm text-[#C5C7CA] leading-4">Password</label>
                        <label className="font-medium text-sm text-[#C5C7CA] leading-4">Forgot Password?</label>
                    </div>
                    <div className="relative">
                        <input type={passwordVisible ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-transparent border-[1.5px] border-[#35373B] text-white text-sm rounded w-full py-1 px-2.5 placeholder-[#7F8084]" placeholder="Enter your password" />
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
                    <Button type={'submit'} classNames={`w-full mt-5 mb-2`}>Login now</Button>
                    <div className="flex items-center gap-1 px-0.5 text-sm">
                        <p className="text-[#7F8084]">Not registered yet?</p>
                        <p className="text-[#C5C7CA] cursor-pointer">Register</p>
                        <span className="text-[#C5C7CA] mt-0.5 cursor-pointer">
                            <GoArrowRight />
                        </span>
                    </div>
                </div>
            </Card >
        </form>
    )
}

export default Login