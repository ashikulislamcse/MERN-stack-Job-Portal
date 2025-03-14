import { Camera } from "lucide-react";
import React, { useState } from "react";
import { Label } from "../../label";
import { Input } from "../../input";
import axios from "axios";
import { USER_API_END_POINT } from "../../../../Utils/constant.js";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
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
        onSubmit={onSubmitHandler}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md"
      >
        <h1 className="font-bold text-lg mb-4 text-center text-gray-800">
          Create Account
        </h1>

        {/* Full Name & Email (Side by Side on Larger Screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input.name}
              name="name"
              onChange={changeEventHandler}
            />
          </div>
          <div>
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
        </div>

        {/* Phone Number & Password (Side by Side on Larger Screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
            />
          </div>
          <div>
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
        </div>

        {/* Radio Buttons for Role Selection */}
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

        {/* Profile Photo Upload */}
        <div className="flex items-center gap-2">
          <Label>Profile</Label>
          <Input
            accept="image/*"
            type="file"
            onChange={changeFileHandler}
            className="cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
