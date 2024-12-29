import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const [authToken, setAuthToken] = useState(null);
    const navigate = useNavigate();  // Initialize useNavigate

    // Formik setup for form state and validation
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            password: Yup.string()
                .min(3, "Password must be at least 6 characters")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log("Form values:", values);
            loginHandler(values.email, values.password);
        },
    });

    const loginHandler = (email, password) => {
        console.log(email, password);

        let data = JSON.stringify({
            email: email,
            password: password,
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:7000/auth/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                const token = response.data.data.token;
                console.log("Token:", token); // This will log the token

                // Store token in localStorage
                localStorage.setItem("UserToken", token);
                setAuthToken(token);

                // Navigate to homepage after successful login
                navigate("/login");  // Adjust the route if necessary
            })
            .catch((error) => {
                console.log(error);
            });

        console.log("user data in database ", data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Login
                </h1>

                <form onSubmit={formik.handleSubmit}>
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
                            placeholder="Enter Email"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm mt-1">
                                {formik.errors.email}
                            </div>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
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
                            placeholder="Enter Password"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-red-500 text-sm mt-1">
                                {formik.errors.password}
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={formik.isSubmitting || !formik.isValid}
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
                    >
                        {formik.isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to={"/signup"} className="text-indigo-600 hover:text-indigo-700">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
