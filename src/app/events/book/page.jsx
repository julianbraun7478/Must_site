
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button as Button1  } from "@/components/ui/button-main"

export default function Contactus() {
  return (
    (<div className="relative bg-white">
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
            <a className="text-[#1b2945] hover:text-opacity-75" href="/homepage">
              Home
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="#">
            Academics
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/students-zone">
              Student's Zone
            </a>
            <a className="text-[#1b2945] hover:text-opacity-75" href="/contact-us">
              Contact Us
            </a>
          </div>
         
        </div>
      </nav>
      <div className="relative">
        <img
          alt="Contact Us Background"
          className="w-full h-[300px] object-cover"
          height="533"
          src="/opera.jpg"
          style={{
            aspectRatio: "341/533",
            objectFit: "cover",
          }}
          width="341" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">book halls</h1>
        </div>
      </div>
      <div className="bg-[#f8f9fa] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <MailIcon className="text-[#1b2945]" />
              <a className="text-sm" href="#">
                info@must.edu.eg
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="text-[#1b2945]" />
              <a className="text-sm" href="#">
                +202-38247455 – 38247456
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="text-[#1b2945]" />
              <a className="text-sm" href="#" target="_blank">
                View On Google Map
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-4">Enter the required data</h2>
          <p className="mb-6">AND WE WILL GET BACK TO YOU.</p>
          <form className="grid grid-cols-1 gap-4">
            <Input placeholder=" College*" />
            <Input placeholder="time*" type="time" />
            <Input placeholder="Subject*" />
            <Textarea placeholder="description" />
            <Button className="bg-[#1b2945] text-white">Submit Now</Button>
          </form>
        </div>
      </div>
      <footer className="bg-[#f8f9fa] py-4">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm">Copyright © 2024 - All Rights Reserved</p>
          <div className="flex items-center space-x-4">
            <FacebookIcon className="text-[#1b2945]" />
            <TwitterIcon className="text-[#1b2945]" />
            <InstagramIcon className="text-[#1b2945]" />
          </div>
        </div>
      </footer>
    </div>)
  );
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
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
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
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
