"use client";
import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button-main";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card-main";
import { Input } from "@/components/ui/input-main";
import { useRouter } from "next/navigation";

const Page = () => {
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const router = useRouter();

  const doctors = [
    "دكتور أحمد",
    "دكتور محمد",
    "دكتور علي",
    "دكتور فاطمة",
    "دكتور ياسمين",
  ];

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];
  const data = {
    doctor,
    time,
    date: selectedDate,
  };
  const handleBooking = () => {

    console.log("data in the first page",data);

    // const queryString = new URLSearchParams(appointment).toString();

    // Navigate to the reservation page with the query string
  // router.push({pathname:"/hospital/form/reservation", query: { appointment: appointment } });
  };

  return (
    <div key="1" className="flex flex-col min-h-screen bg-[#1b2945]">
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
          <a href="/signin">
            <Button className="bg-[#1b2945] text-white">SIGN IN</Button>
          </a>
        </div>
      </nav>
      <div
        className="flex-grow container mx-auto flex flex-col items-center justify-center p-6"
        style={{
          backgroundColor: "#f3f4f4",
        }}
      >
        <h1 className="text-4xl text-[#1b2945] font-bold mb-8">
          Welcome to Hospital
        </h1>
        <Card className="w-[500px] text-center">
          <CardHeader>
            <CardTitle>Book appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="  bg-white p-5 mx-auto text-center rounded-2xl">
              <div className="mb-4">
                <label
                  htmlFor="doctor"
                  className="block text-black text-2xl font-[500]"
                >
                  Choose Doctor
                </label>
                <select
                  id="doctor"
                  value={doctor}
                  onChange={(e) => {setDoctor(e.target.value)}}
                  className="rounded-md p-2 text-black"
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-black text-2xl font-[500]"
                >
                  Choose Time
                </label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="rounded-md p-2 text-black"
                >
                  <option value="">Select Time</option>
                  {times.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4  mx-auto outline-dashed">
                <div className="flex flex-row justify-around">
                  <label
                    htmlFor="date"
                    className="block text-black text-2xl font-[500]"
                  >
                    Choose Date
                  </label>
                  <input type="date" name="" id="" className="text-black" value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)}/>
                </div>
              </div>
            </div>
          </CardContent>
          <button
            className="bg-white p-3  text-black rounded-xl m-1"
            onClick={handleBooking}
          >
            <Link href={{pathname:"/hospital/form/reservation", data:{data}}}>
            Book
            </Link>
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Page;
