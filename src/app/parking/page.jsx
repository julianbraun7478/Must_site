/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZA5xX7ePNkl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button-main";
import Image from "next/image";

export default function Component() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center pt-[200px]"
      style={{
        backgroundImage: "url('/spot.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-[#1b2945] opacity-50" />
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <ParkingSquareIcon className="text-white h-6 w-6" />
          <span className="text-xl font-bold text-white">Must PARKING</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-white hover:text-gray-300" href="/homepage">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" href="/signin">
            LOGIN
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Spots
          </Link>
          <Link className="text-white hover:text-gray-300" href="/contact-us">
            Contact US
          </Link>
        </div>
      </nav>

      <div className="w-[90%]  mx-auto  justify-between flex flex-row">
        <div className="relative ">
          <Image
            src={"/parking1.jpg"}
            width={400}
            height={400}
            alt="parking1"
          />
          <div className="">
            <Link
              href="/login"
              className=" text-white absolute top-[20%] right-[60%] shadow-2xl bg-slate-500 p-3 rounded-xl text-3xl"
            >
              Entry
            </Link>
            <Link
              href="/login"
              className=" text-white absolute top-[20%] right-[20%] shadow-2xl bg-slate-500 p-3 rounded-xl text-3xl"
            >
              Exit
            </Link>
          </div>
        </div>

        <div className="relative ">
          <Image
            src={"/parking2.jpg"}
            width={350}
            height={350}
            alt="parking1"
          />
          <Link
            href="/login"
            className=" text-white absolute top-[20%] right-[60%] shadow-2xl bg-slate-500 p-3 rounded-xl text-3xl"
          >
            Entry
          </Link>{" "}
          <Link
            href="/login"
            className=" text-white absolute top-[20%] right-[20%] shadow-2xl bg-slate-500 p-3 rounded-xl text-3xl"
          >
            Exit
          </Link>{" "}
        </div>
        <div className="relative ">
          <Image
            src={"/parking3.jpg"}
            width={350}
            height={350}
            alt="parking1"
          />
          <Link
            href="/login"
            className=" text-white absolute top-[20%] right-[60%] shadow-2xl bg-slate-500 p-3 rounded-xl text-3xl"
          >
            Entry
          </Link>{" "}
          <Link
            href="/login"
            className=" text-white absolute top-[20%] right-[20%] shadow-2xl bg-slate-500 p-3 rounded-xl text-3xl"
          >
            Exit
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

function ParkingSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}
