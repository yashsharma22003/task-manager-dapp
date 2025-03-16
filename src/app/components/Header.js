'use client';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {

    return (
        <div className=" w-full h-20 flex items-center bg-gradient-to-r from-blue-100 via-red-100 to-pink-100 border-b-2 border-gray-400">
            <h1 className="ml-4 font-bold text-3xl">Task Manager</h1>
            <div className="ml-auto mr-4">
                <ConnectButton />
            </div>
        </div>
    )

}

export default Header;