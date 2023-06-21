import React, { useState } from "react";
import SmMan from "../assets/footer/smMan.svg";
import axios from "axios";

const Contact = () => {
  const [Error, setError] = useState(true);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [loading, setloading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);
    const data = {
      name: Name,
      email: Email,
      phone_number: Phone,
      post_code: Pincode,
      message: Message,
    };
    const Contact = await fetch(
      "https://backend.raghavbuildtech.com/contact/contact_us/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await Contact.json();
    if (res?.success) {
      setError(false);
      setEmail("");
      setMessage("");
      setPhone("");
      setName("");
      setPincode("");
      setloading(false);
    } else {
      setError(true);
      setloading(false);
    }
  };

  return (
    <div className="w-full lg:bg-[#F1F1EF] lg:flex items-center">
      <img
        src={SmMan}
        className="w-[630px] lg:ml-[120px] mx-auto lg:mx-0"
        data-aos="fade-right"
      />
      <div className="px-5 lg:pl-8 bg-[#F1F1EF]">
        <h1
          className="font-normal text-[28px] lg:text-[42px] text-center md:text-center lg:text-start pt-5 lg:pt-0"
          data-aos="fade-up"
        >
          Get in touch
        </h1>
        <p
          className="pt-1 text-[13px] lg:text-base text-center md:text-center lg:text-start"
          data-aos="fade-up"
        >
          Let’s discuss what’s next
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-[40px] max-w-[426px] mx-auto lg:mx-0 mb-5 md:mb-8 lg:mb-0"
          data-aos="fade-left"
        >
          <div className="lg:flex gap-[15px]">
            <input
              type="text"
              name="name"
              id="name"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Your name"
              className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your email"
              className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[0px]"
            />
          </div>
          <div className="lg:flex gap-[15px]">
            <input
              type="text"
              name="phone_number"
              id="phone"
              value={Phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Phone number"
              className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px]"
            />
            <input
              type="text"
              name="post_code"
              id="pinCode"
              value={Pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              placeholder="Post Code"
              className="mt:[10px] outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px]"
            />
          </div>
          <textarea
            name="message"
            id="text"
            placeholder="Message"
            value={Message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="outline-none border border-[#9E9E9E] rounded-none text-base px-4 py-2 w-full mt-[10px] lg:mt-[20px] resize-none h-[109px]"
          ></textarea>
          {!Error ? (
            <button
              className="text-black text-base py-2 w-full bg-[#F1F1EF] mt-[10px] lg:mt-[20px]"
              disabled
            >
              Message sent
            </button>
          ) : (
            <button
              className="text-white text-base py-2 w-full bg-[#CD4055] mt-[10px] lg:mt-[20px]"
              disabled={loading ? true : false}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
