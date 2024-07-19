import Link from "next/link"
import { Button } from "@/components/ui/button-main"

export default function Component() {
  return (
    <div className="bg-[#f3f4f4]">
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
              width="60" />
            <a className="text-[#1b2945] hover:text-opacity-75" href="/">
              Home
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/students-zone">
              Student's Zone
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/parking">
              Parking
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/events">
              Event
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/contact-us">
              Contact Us
            </a>
          </div>
          <a href='/signin'>
          <Button className="bg-[#1b2945] text-white">SIGN IN</Button>
          </a>
        </div>
      </nav>
      <div className="relative">
        <img
          alt="Hero"
          className="w-full"
          height="100"
          src="/sbg.jpeg"
          style={{
            aspectRatio: "439/100",
            objectFit: "cover",
          }}
          width="439"
        />
        <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-4xl py-6">
          Student's Zone
        </h1>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Student's Gates</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital">
        Hospital Service
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/certificate">
            Graduation Certificate            </Link>
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
  )
}

function FacebookIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>)
    );
  }
  
  
  function InstagramIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>)
    );
  }
  
  
  function TwitterIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path
          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>)
  
  )
}
