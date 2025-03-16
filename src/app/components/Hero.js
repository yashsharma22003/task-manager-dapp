'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
const Hero = () => {

    const router = useRouter();
    return (
        <div className="h-screen flex items-center justify-center  bg-gradient-to-r from-blue-100 via-red-100 to-pink-100">
            <div className="font-bold text-5xl mr-auto ml-56 mb-20">
                <h1 className=""> Blockchain powered</h1>

                <h1 className="text-red-400 ml-16 my-6"> Productivity at </h1>

                <h1>your fingertips</h1>

                <button className="mt-20 ml-64 font-normal text-3xl border-2 border-gray-600 rounded-full p-2.5 bg-gradient-to-r from-blue-100 to-pink-100 hover:from-purple-200 hover:to-yellow-100 transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-102 cursor-pointer"
                onClick={() => router.push('./tasks')}
                >Get Productive</button>
            </div>

            <div>
                <Image className="mr-64"
                    src={"productivity.svg"}
                    alt="Productivity"
                    width={500}
                    height={300}
                />
            </div>

           

        </div>
    )
}

export default Hero;