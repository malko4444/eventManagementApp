import React, { useState, useEffect } from "react";
import axios from "axios";

export const LoanFinder = () => {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleLoanIndex, setVisibleLoanIndex] = useState(null); // Track the index of the visible loan's table

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:7000/data');
        setLoans(response.data.data);  // Set the data directly to loans state
        console.log(response.data.data); // Log the actual loan data to verify
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  const handleToggle = (index) => {
    setVisibleLoanIndex(visibleLoanIndex === index ? null : index); // Toggle the visibility of the clicked loan's table
  };

  return (
    <section id="loans" className="p-8 bg-gradient-to-r from-green-700 to-green-400">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">Agriculture Loan & Subsidy Finder</h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-6">
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : loans.length > 0 ? (
          loans.map((loan, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg p-6 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-green-800">{loan.name}</h3>
              <p className="text-gray-700 mt-2">{loan.h2}</p>
              <p className="text-gray-700 mt-2">{loan.blogData}</p>

              <a href={loan.url} target="_blank" rel="noopener noreferrer" className="text-green-600 mt-4 block hover:text-green-800">
                Read More
              </a>

              {/* Toggle Button */}
              <button
                onClick={() => handleToggle(index)} // Pass the index to toggle the table for the specific loan
                className="mt-6 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300"
              >
                {visibleLoanIndex === index ? "Hide Loan Details" : "Show Loan Details"}
              </button>

              {/* Table - Toggle visibility without animation */}
              <div
                className={`mt-6 ${visibleLoanIndex === index ? "block" : "hidden"}`}
              >
                <h4 className="font-semibold text-green-700">Loan Details</h4>
                <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left bg-green-100 text-green-800">Operational Jurisdiction</th>
                      <th className="border border-gray-300 px-4 py-2 text-left bg-green-100 text-green-800">Eligibility Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loan.table.map((item, tableIndex) => (
                      <tr key={tableIndex}>
                        <td className="border border-gray-300 px-4 py-2">{item['Operational Jurisdiction']}</td>
                        <td className="border border-gray-300 px-4 py-2">{item['Eligibility Criteria']}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          ))
        ) : (
          <p className="text-white text-center">No loan data available</p>
        )}
      </div>
    </section>
  );
};
