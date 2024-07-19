"use client";
import React, { useState } from "react";
import QRCode from "qrcode.react";

const Page = () => {
  
  const [owner, setOwner] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [parkingPlace, setParkingPlace] = useState("");

  const [qrData, setQRData] = useState("");
  const parkingPlaces = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10"];
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Concatenate form data into a string to generate QR code data
    const data = `Owner: ${owner}, Car Number: ${carNumber}, Parking Place: ${parkingPlace} `;
    setQRData(data);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center pt-[200px]"
      style={{ backgroundImage: "url('/spot.jpeg')" }}
    >
      {qrData ? (
        <div className="mt-4 mx-auto text-center justify-around ">
          <h2 className="text-black text-4xl mb- text-center font-bold">
            Here Your  QR Code:
          </h2>
          <QRCode value={qrData} className="text-center mx-auto mt-3 " size={350}/>
        </div>
      ) : (
        <div>
          <h1 className="text-black text-2xl mb-4 font-bold  text-center">
            Log in from here
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="text-center mx-auto p-5 "
          >
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  paid
                </label>
               
              </div>
            <div className="mb-4 ">
              <label
                htmlFor="owner"
                className="block text-black text-2xl font-[500]"
              >
                Owner:
              </label>
              <input
                type="text"
                id="owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="rounded-md p-2 text-black "
              />
            </div>
             
            <div className="mb-4">
              <label
                htmlFor="carNumber"
                className="block text-black text-2xl font-[500]"
              >
                Car Number:
              </label>
              <input
                type="text"
                id="carNumber"
                value={carNumber}
                onChange={(e) => setCarNumber(e.target.value)}
                className="rounded-md p-2 text-black"
              />
            </div>
            
            <div className="mb-4">
              <label
                htmlFor="parkingPlace"
                className="block text-black text-2xl font-[500]"
              >
                Parking Place:
              </label>
              
              <select
                id="parkingPlace"
                value={parkingPlace}
                onChange={(e) => setParkingPlace(e.target.value)}
                className="rounded-md p-2 text-black"
              >
                <option value="">Select Parking Place</option>
                {parkingPlaces.map((place, index) => (
                  <option key={index} value={place}>{place}</option>
                ))}
                
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Generate QR Code
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
