
import Link from "next/link"
import { Button } from "@/components/ui/button-secondary"
import { Button as Button1 } from "@/components/ui/button-main"
export default function Component() {
  return (
    <div key="1" className="bg-[#f5f5f5] min-h-screen">
      <header className="bg-[#1b2945] text-white">
      <nav className="bg-white px-4 py-2 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-xl font-bold">Must OPERA</span>
          <div className="flex space-x-4">
            <Link className="text-gray-600 hover:text-gray-900" href="/homepage">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/events">
              Events
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="/contact-us">
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-2">
            <Button
              className="border border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-900"
              variant="outline">
              Register
            </Button>
            <a href='/signin'>
            <Button1 className="bg-[#1b2945] text-white">SIGN IN</Button1>
          </a>
          </div>
        </div>
      </nav>
      </header>
      <main className="py-8 px-16">
        <h1 className="text-3xl font-bold text-center mb-8">Enter Ticket Details</h1>
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center bg-[#1b2945] text-white p-4">
            <div className="bg-[#33415c] p-4 mb-4">
              <h2 className="text-xl mb-2">Ticket Title</h2>
              <div className="mb-2">
                <strong>Name</strong>
                <p>T. CAT</p>
              </div>
              <div className="mb-2">
                <strong>Date</strong>
                <p>09-08-2022</p>
              </div>
              <div>
                <strong>Event Address</strong>
                <p>5 Morris Rd. Long Beach, NY 11561</p>
              </div>
            </div>
            <div className="bg-[#1b2945] text-white w-32 h-32" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Choose Your Seat</h2>
            <form className="grid grid-cols-10 gap-2 mb-4">
              <input id="seat-1" type="checkbox" />
              <label htmlFor="seat-1">Seat 1</label>
              <input id="seat-2" type="checkbox" />
              <label htmlFor="seat-2">Seat 2</label>
              <input id="seat-3" type="checkbox" />
              <label htmlFor="seat-3">Seat 3</label>
              <input id="seat-4" type="checkbox" />
              <label htmlFor="seat-4">Seat 4</label>
              <input id="seat-5" type="checkbox" />
              <label htmlFor="seat-5">Seat 5</label>
              <input id="seat-6" type="checkbox" />
              <label htmlFor="seat-6">Seat 6</label>
              <input id="seat-7" type="checkbox" />
              <label htmlFor="seat-7">Seat 7</label>
              <input id="seat-8" type="checkbox" />
              <label htmlFor="seat-8">Seat 8</label>
              <input id="seat-9" type="checkbox" />
              <label htmlFor="seat-9">Seat 9</label>
              <input id="seat-10" type="checkbox" />
              <label htmlFor="seat-10">Seat 10</label>
              <input id="seat-11" type="checkbox" />
              <label htmlFor="seat-11">Seat 11</label>
              <input id="seat-12" type="checkbox" />
              <label htmlFor="seat-12">Seat 12</label>
              <input id="seat-13" type="checkbox" />
              <label htmlFor="seat-13">Seat 13</label>
              <input id="seat-14" type="checkbox" />
              <label htmlFor="seat-14">Seat 14</label>
              <input id="seat-15" type="checkbox" />
              <label htmlFor="seat-15">Seat 15</label>
              <input id="seat-16" type="checkbox" />
              <label htmlFor="seat-16">Seat 16</label>
              <input id="seat-17" type="checkbox" />
              <label htmlFor="seat-17">Seat 17</label>
              <input id="seat-18" type="checkbox" />
              <label htmlFor="seat-18">Seat 18</label>
              <input id="seat-19" type="checkbox" />
              <label htmlFor="seat-19">Seat 19</label>
              <input id="seat-20" type="checkbox" />
              <label htmlFor="seat-20">Seat 20</label>
            </form>
            <Button className="bg-[#f3c623] hover:bg-[#e0b520] text-[#1b2945] px-16 py-4 rounded-md">Done</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

