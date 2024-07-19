
import Link from "next/link"
import { Button } from "@/components/ui/button-main"

export default function Component() {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white py-4 px-8 flex justify-between items-center">
        <span className="font-bold text-xl">Must Hospital</span>
        <div className="space-x-4">
          <Link className="text-gray-700 hover:text-gray-900" href="/homepage">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/hospital/form">
            Reservation
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/contact-us">
            Contact Us
          </Link>
          <a href='/signin'>
          <Button className="bg-[#1b2945] text-white">SIGN IN</Button>
          </a>
        </div>
      </nav>
      <div
        className="text-center py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hosbg.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet the Best Hospital</h1>
        <p className="text-xl text-gray-600 mb-8">Take Your Place Now</p>
        <a href="/hospital/reservation">
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white" variant="default">
          Make a Reservation
        </Button>
        </a>
      </div>
      <section className="bg-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Departments</h2>
          <div className="grid grid-cols-3 gap-4">
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Dentistry
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Surgery
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Orthopedic
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form#">
              Pediatric
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Obstetrics & Gynecology
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Ear, Nose & Throat
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Neurology
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Hepatology
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Nephrology
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Oncology
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Rheumatology
            </Link>
            <Link className="block bg-[#1b2945] text-white py-4 px-6 rounded-md text-center" href="/hospital/form">
              Cardiology
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-white py-4 mt-8">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <span className="text-sm text-gray-500">Copyright © 2024 - All Rights Reserved</span>
          <div className="flex space-x-2">
            <Link className="text-blue-600 hover:text-blue-800" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="text-yellow-500 hover:text-yellow-700" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="text-orange-500 hover:text-orange-700" href="#">
              <RssIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
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
  )
}


function RssIcon(props) {
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
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
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
  )
}
