import SectionContainer from "../ui/SectionContainer";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
    industry: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          company: "",
          message: "",
          industry: "",
        });
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 5000);
    }
  };

  return (
    <SectionContainer style={"w-full"}>
      <div className="brand-bg-green text-white px-10 py-10 w-full flex flex-col gap-10 rounded-2xl">
        
        {/* Success Message */}
        {successMsg && (
          <p className="brand-text-orange font-semibold italic text-xl animate-fadeIn">
            {successMsg}
          </p>
        )}

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-600 font-semibold animate-fadeIn">
            {errorMsg} *
          </p>
        )}

        <h2 className="font-heading text-2xl font-semibold">General Info</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Fields */}
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="flex flex-col gap-1 md:w-1/2 w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                placeholder="Enter your first name"
                className="outline px-4 py-2 rounded-full transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-white"
                required
                value={formData.firstName}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 md:w-1/2 w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                placeholder="Enter your last name"
                className="outline px-4 py-2 rounded-full transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-white"
                required
                value={formData.lastName}
                onChange={handleChange}
                type="text"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="flex flex-col gap-1 md:w-1/2 w-full">
              <label htmlFor="email">Email Address</label>
              <input
                name="email"
                placeholder="Enter your Email Address"
                className="outline px-4 py-2 rounded-full transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-white"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 md:w-1/2 w-full">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                name="phoneNumber"
                placeholder="Enter your Phone number"
                className="outline px-4 py-2 rounded-full transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-white"
                type="number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Company & Industry */}
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="flex flex-col gap-1 md:w-1/2 w-full">
              <label htmlFor="company">Company</label>
              <input
                name="company"
                placeholder="Enter your Company name"
                className="outline px-4 py-2 rounded-full transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-white"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 md:w-1/2 w-full">
              <label htmlFor="industry">Choose Industry</label>
              <input
                name="industry"
                placeholder="Enter your Industry"
                className="outline px-4 py-2 rounded-full transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-white"
                type="text"
                value={formData.industry}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="message">Message</label>
            <input
              name="message"
              placeholder="Leave your comments (4,000 symbols max.)"
              className="outline px-4 py-2 rounded-full transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-white"
              type="text"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="w-full h-[1px] bg-white"></div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-white brand-text-green py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Send My Enquiry
          </button>
        </form>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </SectionContainer>
  );
};

export default Form;
