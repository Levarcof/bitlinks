import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
// import localFont from "next/font/local";
// const poppins = localFont({ ye karne ye local font ko load karta hai jo hamne dawnload karke app ke andar font vale folder me rakhe hai 
//   src: "./fonts/Poppins-ExtraBold.ttf",
//   variable: "--font-poppins",
//   weight: "100 900",
// });

const poppins = Poppins({
  weight: ['700'],    // Load the Bold weight
  variable: '--font-poppins',
  subsets: ["latin"],
});
export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[60vh]">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className={`text-4xl font-bold  ${poppins.variable} `}>The best URL Shortener in Market</p>
            <p className="text-center text-lg px-20">We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener </p>
            <div className="flex gap-3">
            <Link href="/generate"><button className=' text-white bg-purple-500 hover:bg-purple-400 px-4 p-2 rounded-2xl'>Try Now</button></Link>
            <Link href="/github"><button className=' text-white bg-purple-500 hover:bg-purple-400 px-4 p-2 rounded-2xl'>GitHub</button></Link>
            </div>
          </div>
          <div className="relative">
            <Image className="mix-blend-darken" alt="vector  image" fill={true} src={"/vector.jpg"} />

          </div>

        </section>
      </main>
    </>

  );
}
