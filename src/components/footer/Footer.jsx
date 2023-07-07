import { Link } from "react-router-dom";
import NewsletterSubscribe from "./NewsletterSubscribe ";

export default function Footer() {
  return (
    <div className="container mx-auto px-4 md:px-10 pt-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            className="inline-flex items-center"
          >
            <img
              className={"h-8"}
              src="https://i.ibb.co/yRF3f1P/logo2.png"
              alt="company logo"
            />
          </a>
          <div className="lg:max-w-sm">
            <p className="text-sm text-gray-800">
              You can generate accurate property descriptions, stunning images, and seamless browsing experience. Experience the future of real estate with ReaEstateGenious.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-base font-bold tracking-wide text-gray-900">
            Stay Tuned
          </span>
          <p className="mt-4 text-sm text-gray-500">
            Sign up to get first crack at exclusive invoicing features!
          </p>
          <NewsletterSubscribe/>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:+15551234567"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-[#7C6EE4] hover:text-deep-purple-800"
            >
              +1 (555) 123-4567
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-[#7C6EE4] hover:text-deep-purple-800"
            >
              airealestate90@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-[#7C6EE4] hover:text-deep-purple-800"
            >
              173 Main Street, Dhaka
            </a>
          </div>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://twitter.com/Realestate84906"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/real-estate-ai-869082281/"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
            </a>
            <a
              href="https://airealestate90.medium.com/"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-medium" viewBox="0 0 16 16"> <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/> </svg>
            </a>
            <a
              href="https://facebook.com/"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col-reverse justify-between pt-5 pb-6 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} ReaEstateGenious. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Powered by OpenAI | <a href="/privacy" className="text-[#a3a5a7] hover:text-gray-800"><Link to="/privacy">Privacy Policy</Link></a> | <a href="/terms" className="text-[#a3a5a7] hover:text-gray-800"><Link to="/term">Terms of Service</Link></a>
        </p>
      </div>
    </div>
  );
}