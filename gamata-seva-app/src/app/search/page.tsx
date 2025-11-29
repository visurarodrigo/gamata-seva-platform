"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Service = {
  id: number;
  provider_id: string;
  name: string;
  category: string;
  price_rate: number;
  description: string;
};

export default function SearchPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const fetchServices = async () => {
    let query = supabase.from("services").select("*");

    if (keyword) query = query.ilike("name", `%${keyword}%`);
    if (category) query = query.eq("category", category);

    const { data, error } = await query;
    if (error) console.log("Error fetching services:", error);
    else setServices(data as Service[]);
  };

  useEffect(() => {
    fetchServices();
  }, [keyword, category]);

  const handleBook = async (serviceId: number) => {
    const customer_id = "YOUR_TEST_CUSTOMER_UUID"; // Replace with real logged-in user ID later

    const { error } = await supabase.from("bookings").insert([
      {
        service_id: serviceId,
        customer_id,
        date: new Date().toISOString().slice(0, 10),
        status: "Pending",
      },
    ]);

    if (error) alert("Booking failed: " + error.message);
    else alert("Booking successful!");
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Find Local Services
      </h1>

      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-gray-300 p-4 rounded text-gray-900 text-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          placeholder="Category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-4 rounded text-gray-900 text-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={fetchServices}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition-colors"
        >
          Search
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Category:</span> {service.category}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Price:</span> ₹{service.price_rate}
            </p>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button
              onClick={() => handleBook(service.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {services.length === 0 && (
        <p className="text-center text-gray-600 mt-10">
          No services found. Try changing the keyword or category.
        </p>
      )}
    </div>
  );
}
