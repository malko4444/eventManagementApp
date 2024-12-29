import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Signup = () => {
  // Formik setup for form state and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      contact: Yup.string()
        .matches(
          /^[0-9]{11}$/,
          "Contact number must be exactly 11 digits"
        )
        .required("Contact number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      signupHandler(values);
    },
  });

  const signupHandler = (formData) => {
    const { name, email, password, contact } = formData;

    const data = JSON.stringify({
      name: name,
      email: email,
      password: password,
      contact: contact,
    });

    const config = {
      method: "post",
      url: "http://localhost:7000/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Response Data:", response.data);
        // You can handle successful signup here, e.g., redirect to login page
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h1>

        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>

          {/* Contact */}
          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-gray-600 font-medium"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your contact number"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {formik.touched.contact && formik.errors.contact && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.contact}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            {formik.isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:text-indigo-700">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
