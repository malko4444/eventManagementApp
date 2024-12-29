import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateData from "../../components/updateData/UpdateData";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";

export const FarmerCommunity = () => {
    const [data, setData] = useState([]);
    const [token1, setToken] = useState("");
    const [currentItem, setCurrentItem] = useState(null); // State to hold the fetched data
    const [loading, setLoading] = useState(true);  // For handling loading state
    const [error, setError] = useState(null);      // For handling errors

    useEffect(() => {
        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:7000/experince/get",
        };

        axios
            .request(config)
            .then((response) => {
                console.log("Fetched Data:", response.data);
                setData(response.data.data);
                setLoading(false);  // Data fetched successfully
            })
            .catch((error) => {
                console.error("Axios error:", error);
                setError("Failed to fetch data.");
                setLoading(false);  // End loading state even on error
            });
    }, []);

    useEffect(() => {
        const usertoken = localStorage.getItem("token");
        console.log("token", usertoken);
        setToken(usertoken);
    }, []);

    const onUpdateHandler = (data) => {
        console.log(data);
        setCurrentItem(data);
    };

    const onDeleteHandler = (id) => {
        console.log("id in delete component", id);

        let config = {
            method: "delete",
            maxBodyLength: Infinity,
            url: `http://localhost:7000/experience/delete/${id}`,
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                // After deleting, remove from the local state to reflect changes immediately
                setData((prevData) => prevData.filter(item => item._id !== id));
            })
            .catch((error) => {
                console.log(error);
                setError("Failed to delete data.");
            });
    };

    if (loading) {
        return <div>Loading...</div>;  // Display loading state while fetching data
    }

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-black">
            <div className="mb-12">
                <Navbar />
            </div>
            <div className="container mx-auto p-8 min-h-screen">
                <h2 className="text-4xl font-extrabold text-center text-white mb-10">
                    UpComming Events
                </h2>

                {/* Error handling for failed data fetch */}
                {error && (
                    <p className="text-center text-red-500 text-xl mt-8">
                        {error}
                    </p>
                )}

                {/* Conditional Rendering when No Data is Available */}
                {data.length === 0 && !error && (
                    <p className="text-center text-gray-500 text-xl mt-8">
                        No data available.
                    </p>
                )}

                {/* Display Cards when Data is Available */}
                {data.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                        {data.map((item) => (
                            <li
                                key={item._id}
                                className="bg-gray-900 border border-gray-700 shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl flex flex-col justify-between h-full"
                            >
                                <div className="relative overflow-hidden">
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-3">
                                        {item.description}
                                    </p>

                                    {/* Location and Category */}
                                    <p className="text-gray-500 text-sm mb-1">
                                        <strong>Location:</strong> {item.location}
                                    </p>
                                    <p className="text-gray-500 text-sm mb-3">
                                        <strong>Category:</strong> {item.category}
                                    </p>

                                    {/* Event Date */}
                                    <p className="text-gray-400 text-sm mb-4">
                                        <strong>Event Date:</strong> {new Date(item.eventDate).toLocaleDateString()}
                                    </p>

                                    {/* Actions */}
                                    {token1 == item.token? "":
                                    <div>
                                        <button
                                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 w-full text-center mb-2"
                                    onClick={() => onDeleteHandler(item._id)}
                                >
                                    Delete
                                </button>

                                {/* Update Button */}
                                <button
                                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 w-full text-center"
                                    onClick={() => onUpdateHandler(item)}
                                >
                                    Update
                                </button>
                                </div>
                                }
                                </div>
                            </li>
                        ))}

                        {/* Conditionally rendering UpdateData only when currentItem is not empty */}
                        {currentItem && (
                            <UpdateData currItem={currentItem} setCurrentItem={setCurrentItem} />
                        )}
                    </ul>
                )}
            </div>
            <Footer/>
        </div>
    );
};
