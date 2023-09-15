import Image from "next/image"
import { signIn } from "next-auth/react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import FacebookLoginLogo from '../Assets/img/facebook logo.svg'



export default function Login() {
    return(
        <div className=" w-[100%] h-[100vh] flex bg-[#18191a]">
            <div className="w-[50%] h-[100vh] flex flex-col justify-center pl-[50px]">
                <div>
                    <Image
                        src={FacebookLoginLogo}
                        alt="Facebook"
                        className="w-[65%]"
                    />
                </div>
                <div className="ml-[45px]">
                    <p className="text-[#e4e6eb] text-[22px] font-light">Facebook helps you connect and share with the people in your life.</p>
                </div>
            </div>
            <div className="w-[50%] flex justify-center items-center px-[50px]">
                    <div>
                        <div className="flex gap-4 bg-[#3a3b3c] p-4 px-6 items-center rounded-[6px] cursor-pointer backdrop-blur-md text-[#e4e6eb]"
                            onClick={() => signIn("google")}
                            >
                            <FcGoogle className="text-[30px]" />
                            Sign In with Google
                        </div>
                    </div>
            </div>
        </div>
    )
}