"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) return setMessage(error.message);

    await supabase.from("profiles").insert([
      { user_id: data?.user?.id, role, name: "", phone: "", skills: [] },
    ]);

    setMessage("Sign-up successful! Please check your email.");
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return setMessage(error.message);

    setMessage("Login successful!");
    router.push("/search"); // Redirect to search after login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Gamata Seva
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Sign in or create an account to book local services
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-4 mb-4 w-full rounded text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-4 mb-4 w-full rounded text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-300 p-4 mb-6 w-full rounded text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="customer">Customer</option>
          <option value="provider">Provider</option>
        </select>

        <div className="flex gap-4 mb-4">
          <button
            onClick={handleSignUp}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition-colors"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors"
          >
            Login
          </button>
        </div>

        {message && (
          <p className="text-center text-red-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
