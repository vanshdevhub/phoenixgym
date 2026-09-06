import { useState } from "react";

function ContactForm({ selectedPlan = "", selectedProgram = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const selectionText = selectedPlan
    ? `I'm interested in the ${selectedPlan} membership.`
    : selectedProgram
    ? `I'm interested in the ${selectedProgram} program.`
    : "";

  return (
    <div className="border border-white/10 bg-black/30 p-7 sm:p-8 md:p-10">
      {/* Heading */}
      <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
        Get Started
      </p>

      <h3 className="font-[var(--font-display)] mt-2 text-3xl sm:text-4xl font-black uppercase leading-none text-white">
        Get In Touch
      </h3>

      <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
        Have a question or want to get started? Send us a message and our team
        will get back to you.
      </p>

      {/* Selection */}
      {selectedPlan && (
        <div className="mt-7 border border-orange-500/30 bg-orange-500/10 px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
            Selected Membership
          </p>

          <p className="mt-1 font-semibold text-white">
            {selectedPlan}
          </p>
        </div>
      )}

      {selectedProgram && (
        <div className="mt-7 border border-orange-500/30 bg-orange-500/10 px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
            Selected Program
          </p>

          <p className="mt-1 font-semibold text-white">
            {selectedProgram}
          </p>
        </div>
      )}

      {/* Success */}
      {submitted && (
        <div className="mt-7 border border-green-500/30 bg-green-500/10 px-4 py-4">
          <p className="text-sm font-semibold text-green-400">
            Thanks! Your enquiry has been received.
          </p>

          <p className="mt-1 text-xs text-green-500/80">
            Our team will get back to you soon.
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            autoComplete="name"
            required
            className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            autoComplete="email"
            required
            className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit Phone Number"
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            required
            className="w-full border border-white/10 bg-black px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-500"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help you..."
            required
            className="w-full resize-none border border-white/10 bg-black px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group w-full bg-orange-500 px-6 py-4 font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
        >
          <span className="inline-flex items-center gap-3">
            Send Enquiry

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>
      </form>

      {/* Privacy */}
      <p className="mt-5 text-[11px] leading-relaxed text-gray-600">
        Your information will only be used to respond to your enquiry.
      </p>
    </div>
  );
}

export default ContactForm;