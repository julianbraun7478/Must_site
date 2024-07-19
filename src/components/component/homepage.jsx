"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button-main";
import { Card } from "@/components/ui/card-main";
import Image from "next/image";
import { useEffect, useState } from "react";
export function Homepage() {
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    setEmail(email);
    console.log(`email is >> ${email} password is >> ${password}`);
  }, []);

  return (
    <div className="flex flex-col">
      <nav className="bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img
              alt="Must Logo"
              className="h-16 w-16"
              height="60"
              src="/logo.svg"
              style={{
                aspectRatio: "60/60",
                objectFit: "cover",
              }}
              width="60"
            />
            <a className="text-[#1b2945] hover:text-opacity-75" href="/">
              Home
            </a>
            <a
              className="text-[#1b2945] hover:text-opacity-75"
              href="/students-zone"
            >
              Student's Zone
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/parking">
              Parking
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/events">
              Event
            </a>
            <a
              className="text-[#1b2945] hover:text-opacity-75"
              href="/contact-us"
            >
              Contact Us
            </a>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
            
          >
        { email&& <Image
            src={"/profile.png"}
            width={35}
            height={35}
            alt="profiel "
            className=""
          />}
            {showEmail && email && (
              <div className=" text-black  fixed top-18 right-24 "> welcome :{email}</div>
            )}
          </div>
          {!email && (
            <a href="/signin">
              <Button className="bg-[#1b2945] text-white">SIGN IN</Button>
            </a>
          )}
        </div>
      </nav>
      <div
        className="relative text-center text-white py-32"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold">Find Your Future Today!</h1>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/parking">
            <Card className="w-full cursor-pointer">
              <img
                alt="Must Parking Spot"
                className="w-full h-48 object-cover"
                height="150"
                src="./park.jpeg"
                style={{
                  aspectRatio: "283/150",
                  objectFit: "cover",
                }}
                width="283"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Must Parking Spot</h2>
                <p className="text-sm text-gray-600 mt-2">
                  The university parking spot, where convenience meets
                  accessibility! Our well-designed parking facility provides
                  students and staff with ample space to safely park their
                  vehicles. With easy access to campus buildings and dedicated
                  staff to assist, we strive to make your parking experience
                  stress-free and efficient.
                </p>
              </div>
            </Card>
          </Link>
          <Link href="/events">
            <Card className="w-full cursor-pointer">
              <img
                alt="Must Events"
                className="w-full h-48 object-cover"
                height="150"
                src="./ev.png"
                style={{
                  aspectRatio: "283/150",
                  objectFit: "cover",
                }}
                width="283"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Must Events</h2>
                <p className="text-sm text-gray-600 mt-2">
                  University conferences are the vibrant platforms where
                  knowledge meets curiosity, creating a fertile ground for
                  intellectual growth and innovation.
                </p>
              </div>
            </Card>
          </Link>
          <Link href="/hospital">
            <Card className="w-full cursor-pointer col-span-1 md:col-span-2">
              <img
                alt="Must Hospital"
                className="w-full h-48 object-cover"
                height="150"
                src="./hos.png"
                style={{
                  aspectRatio: "283/150",
                  objectFit: "cover",
                }}
                width="283"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Must Hospital</h2>
                <p className="text-sm text-gray-600 mt-2">
                  The university hospital where doctors and students pass
                  through their expertise and dedication.
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
      <footer className="bg-[#1b2945] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>Copyright © 2024 - All Rights Reserved</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link className="hover:text-gray-300" href="#">
              <FacebookIcon className="text-white" />
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <InstagramIcon className="text-white" />
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <TwitterIcon className="text-white" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
