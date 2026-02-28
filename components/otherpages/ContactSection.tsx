"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { LoaderCircle, SplinePointerIcon } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      const templateParams = {
        fullname: formData.firstName + " " + formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toDateString,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
        )
        .then(
          () => {
            setSubmitted(true);
            setLoading(false);
          },
          (error) => {
            console.log("FAILED...", error);
            setLoading(false);
          },
        );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="w-full bg-white py-30 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-vgbrown mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Ready to discuss your agricultural commodity needs? Get in touch
            with our global team for personalized solutions and competitive
            pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Get In Touch */}
          <div>
            <h2 className="text-2xl font-bold text-vgbrown mb-8">
              Get In Touch
            </h2>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lightGreen flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a
                    href="mailto:info@vicagogroup.com"
                    className="text-vgbrown hover:text-amber-700 text-sm"
                  >
                    info@vicagogroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lightGreen flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Website</h3>
                  <a
                    href="https://www.vicagogroup.com"
                    className="text-vgbrown hover:text-amber-700 text-sm"
                  >
                    www.vicagogroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Our Offices */}
            <h3 className="text-lg font-bold text-vgbrown mb-6">Our Offices</h3>

            {/* Nigeria Office */}
            <div className="bg-orange-50 p-6 rounded-lg mb-6 hover-lift border-vgbrown border">
              <h4 className="font-semibold text-gray-800 mb-3">
                Nigeria Head Office
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                333 Broad Street
                <br />
                Odode-Idanre, Ondo State
                <br />
                Nigeria
              </p>
            </div>

            {/* Canada Office */}
            <div className="bg-green-50 p-6 rounded-lg hover-lift border-vgreen border">
              <h4 className="font-semibold text-gray-800 mb-3">
                Canadian Office
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                556 Market Avenue
                <br />
                Toronto, Canada
                <br />
                M6B 0B1
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-vgbrown mb-8">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your message has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
              {/* First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </h3>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-vgbrown/70 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className=" text-sm font-medium text-gray-800 mb-2">
                    Last Name
                  </h3>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-vgbrown/70 ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className=" text-sm font-medium text-gray-700 mb-2">
                  Email
                </h3>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-vgbrown/70 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Dropdown — Custom styled */}
              <div>
                <h3 className=" text-sm font-medium text-gray-700 mb-2">
                  Subject
                </h3>
                <div style={{ position: "relative" }}>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("subject-dropdown");
                      if (el)
                        el.style.display =
                          el.style.display === "block" ? "none" : "block";
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: errors.subject
                        ? "1px solid #ef4444"
                        : "1px solid #d1d5db",
                      borderRadius: 8,
                      backgroundColor: "#fff",
                      textAlign: "left",
                      fontSize: 14,
                      color: formData.subject ? "#1f2937" : "#9ca3af",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {formData.subject
                      ? [
                          "General Inquiry",
                          "Products Information",
                          "Partnership Opportunity",
                          "Pricing Request",
                          "Support",
                        ][
                          [
                            "general",
                            "products",
                            "partnership",
                            "pricing",
                            "support",
                          ].indexOf(formData.subject)
                        ] || "Select a subject"
                      : "Select a subject"}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    id="subject-dropdown"
                    style={{
                      display: "none",
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      zIndex: 20,
                      backgroundColor: "#fff",
                      border: "1px solid #d1d5db",
                      borderRadius: 8,
                      marginTop: 4,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                    }}
                  >
                    {[
                      { value: "general", label: "General Inquiry" },
                      {
                        value: "products",
                        label: "Products Information",
                      },
                      {
                        value: "partnership",
                        label: "Partnership Opportunity",
                      },
                      { value: "pricing", label: "Pricing Request" },
                      { value: "support", label: "Support" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            subject: opt.value,
                          }));
                          if (errors.subject) {
                            setErrors((prev) => ({ ...prev, subject: "" }));
                          }
                          const el =
                            document.getElementById("subject-dropdown");
                          if (el) el.style.display = "none";
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: 14,
                          border: "none",
                          cursor: "pointer",
                          backgroundColor:
                            formData.subject === opt.value ? "#815331" : "#fff",
                          color:
                            formData.subject === opt.value ? "#fff" : "#374151",
                        }}
                        onMouseEnter={(e) => {
                          if (formData.subject !== opt.value) {
                            e.currentTarget.style.backgroundColor =
                              "rgba(129, 83, 49, 0.1)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (formData.subject !== opt.value) {
                            e.currentTarget.style.backgroundColor = "#fff";
                          }
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <h3 className=" text-sm font-medium text-gray-700 mb-2">
                  Message
                </h3>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Drop your message here ..."
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-vgbrown/70 resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-vgbrown hover:bg-vgbrown/90 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 hover-lift flex items-center justify-center gap-2 disabled:bg-vgbrown/80 disabled:cursor-not-allowed "
                disabled={loading}
              >
                {loading && (
                  <span>
                    <LoaderCircle strokeWidth={1.5} className="animate-spin" />
                  </span>
                )}
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
