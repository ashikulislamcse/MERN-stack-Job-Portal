import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { USER_API_END_POINT } from "../../../../Utils/constant.js";
import { toast } from "sonner";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md"
        onSubmit={onSubmitHandler}
      >
        <h1 className="font-bold text-lg mb-4 text-center text-gray-800">
          Login
        </h1>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
          />
        </div>

        {/* Role Selection */}
        <div className="mb-3">
          <span className="block font-medium mb-1">Select Role</span>
          <div className="flex items-center gap-4">
            <label
              className={`flex items-center p-2 rounded-md cursor-pointer border ${
                input.role === "student" ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="mr-2"
              />
              Student
            </label>

            <label
              className={`flex items-center p-2 rounded-md cursor-pointer border ${
                input.role === "recruiter"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
                className="mr-2"
              />
              Recruiter
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
