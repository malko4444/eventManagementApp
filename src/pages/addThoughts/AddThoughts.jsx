import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AddThoughts = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState(""); // New location state
    const [category, setCategory] = useState(""); // New category state
    const [eventDate, setEventDate] = useState(""); // New event date state
    const [message, setMessage] = useState("");
    const [token,setToken] = useState("")
    useEffect(()=>{
        const tokenFunction = async () => {
            const token = localStorage.getItem("UserToken");
            setToken(token)
            console.log("token in add function",token);
            
            }
            tokenFunction();
    },[])
    

    const onAddProductHandler = async () => {
        try {
            setMessage(""); // Reset the message
            console.log("Sending request with:", { title, description, image, location, category, eventDate });
    
            // Retrieve the token from localStorage
            
    
            if (!token) {
                setMessage("Authorization token is missing.");
                return;
            }
    
            // Make the POST request with token in the Authorization header
            let response = await axios.post(
                "http://localhost:7000/experience/post",
                {
                    title: title,
                    description: description,
                    image: image,
                    location: location,
                    category: category,
                    eventDate: eventDate,
                    token: token
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`  // Send token in the Authorization header
                    }
                }
            );
    
            console.log("Server Response:", response.data);
    
            // Check for success status
            if (response.data.status === "success") {
                setMessage("Event added successfully!");
                setTitle("");
                setDescription("");
                setImage("");
                setLocation("");
                setCategory("");
                setEventDate("");
            } else {
                setMessage("Failed to add event. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while submitting. Please try again later.");
        }
    };
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
                
                <h2 className="text-2xl font-semibold text-center text-white mb-6">
                    Add Your Events Details
                </h2>
                <form className="space-y-6">
                    {/* Title Input */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                            Event Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your event title"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    {/* Description Input */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                            Event Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter your event description"
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        ></textarea>
                    </div>

                    {/* Image Input */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                            Event Video URL
                        </label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    {/* Location Input */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                            Event Location
                        </label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter event location"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    {/* Category Input */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                            Event Category
                        </label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Enter event category"
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    {/* Event Date Input */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                            Event Date
                        </label>
                        <input
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-700 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        
                            <button
                                type="button"
                                onClick={onAddProductHandler}
                                className="w-full px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Add Event!
                            </button>
                        
                    </div>

                    {/* Success/Error Message */}
                    {message && (
                        <p className="text-center mt-4 text-sm font-semibold text-red-500">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
