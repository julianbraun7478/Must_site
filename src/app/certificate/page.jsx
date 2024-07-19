"use client";
import { NextResponse } from "next/server";
import path from "path";
import Link from "next/link";
import { Button } from "@/components/ui/button-main";
import { Card } from "@/components/ui/card-main";
import Image from "next/image";
import { useEffect, useState } from "react";

export function page() {
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [file, setFile] = useState();
  const [communicationDetails, setCommunicationDetails] = useState({
    phone1: '',
    phone2: '',
    recipient: '',
    nationalId: '',
    note: '',
  });
  const [selectedItem, setSelectedItem] = useState(true); // State to track selected item
  const [items, setItems] = useState([
    { id: 1, name: 'Scientific Research certificate', description: 'Description for Item 1', price: '$50' },
    { id: 2, name: 'Grades Statement Certificate', description: 'Description for Item 2', price: '$75' },
    { id: 3, name: 'Graduation Certificate', description: 'Description for Item 3', price: '$100' }
  ]);
  const handleCommunicationDetailsChange = (e) => {
    const { name, value } = e.target;
    setCommunicationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }; // Sample items data

  useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, []);

  // Function to handle selecting an item
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Function to handle file upload
  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully.");
        // Reset the file input
        setFile(null);
      } else {
        throw new Error("Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file.");
    }
   
  };


  return (
    <div
    style={{
      backgroundColor:"white",
    }}
    >
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
            <a className="text-[#1b2945] hover:text-opacity-75" href="/homepage">
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
      <main className="flex-1 py-10 px-6">
        <div className="container mx-auto">
            <section className="mb-10">
            <h2 className="block text-gray-700 font-bold text-2xl mb-4">Choose Item</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl text-gray-700 font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-500 font-bold">{item.price}</span>
                    <Button onClick={() => handleSelectItem(item)}>Select</Button> {/* Button to select item */}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-10">
            <h2 className="block text-gray-700 font-bold text-2xl mb-4">Communication Details</h2>
            <form className="bg-white shadow-md rounded-lg p-6">
              {/* Input fields for communication details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone1">
                    Phone Number 1
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone1"
                    name="phone1"
                    value={communicationDetails.phone1}
                    onChange={handleCommunicationDetailsChange}
                    placeholder="Enter phone number 1"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone2">
                    Phone Number 2
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone2"
                    name="phone2"
                    value={communicationDetails.phone2}
                    onChange={handleCommunicationDetailsChange}
                    placeholder="Enter phone number 2"
                    type="tel"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="recipient">
                  Recipient's Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="recipient"
                    name="recipient"
                    value={communicationDetails.recipient}
                    onChange={handleCommunicationDetailsChange}
                    placeholder="Enter Recipient's Name"
                    type="text"
                  />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="nationalId">
                  National ID Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nationalId"
                    name="nationalId"
                    value={communicationDetails.nationalId}
                    onChange={handleCommunicationDetailsChange}
                    placeholder="Enter nationalId'"
                    type="id"
                  />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="nationalId">
                Add Note
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nationalId"
                  placeholder="Add Note"
                  type="text"
                />
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="bg-[#1b2945] text-white">Submit Now</Button>

                
              </div>
            </form>
          </section>
          <section className="mb-10">
            <h2 className="block text-gray-700 font-bold text-2xl mb-4">
              Upload Document
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <form encType="multipart/form-data" onSubmit={handleUpload}>
                <input type="file" name="file" onChange={handleFileChange} />
                <button type="submit" value="upload">Upload</button>
              </form>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Upload an image of your national ID or passport
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="block text-gray-700 font-bold text-2xl mb-4">Review and Finish</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <h2 className="block text-gray-700 font-bold text-2xl mb-4">Selected Item</h2>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl text-gray-700 font-bold mb-2">{selectedItem.name}</h3>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-500 font-bold">{selectedItem.price}</span>
                  <Button onClick={() => setSelectedItem(true)}>Remove</Button> {/* Button to remove selected item */}
                </div>
              </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Communication Details</h3>
                  <p>Phone 1: {communicationDetails.phone1}</p>
                  <p>Phone 2: {communicationDetails.phone2}</p>
                  <p>recipient: {communicationDetails.recipient}</p>
                  <p>national Id: {communicationDetails.nationalId}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="bg-[#1b2945] text-white">Submit Now</Button>

                
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto text-center">
          
          <p>© 2023 Certificate Request. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

export default page;
