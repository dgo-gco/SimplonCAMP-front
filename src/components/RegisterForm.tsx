import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await axios.post(`api/users/register`, {
        username: username,
        email: email,
        password: password,
      });
      toast("Successfully registered", { icon: "✅" });
      setSuccess(true)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-red-50 flex flex-col justify-center items-center">
        {success ? (
            <div className="bg-white w-80 h-80 flex flex-col justify-center items-center gap-4">
                <p>You've been successfully registered!</p>
                <Link to='/login' className="bg-red-200 text-white rounded w-24 flex justify-center hover:bg-red-500">Log in</Link>
            </div>
        ) : (
            <form
              className="w-80 flex flex-col gap-2 group"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  required
                  minLength={5}
                  maxLength={20}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                  className="rounded w-full h-12 pl-3 border-2 border-zinc-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 valid:border-green-500"
                />
              </div>
              <div className="form-group">
                <input
                  required
                  minLength={5}
                  maxLength={50}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded w-full h-12 pl-3 border-2 border-zinc-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 valid:border-green-500 peer"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid email address
                </span>
              </div>
              <div className="form-group">
                <input
                  required
                  minLength={8}
                  maxLength={80}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,80}$"
                  className="rounded w-full h-12 pl-3 border-2 border-zinc-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 valid:border-green-500 peer"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Password must be at least 8 characters
                </span>
              </div>
              <button className="rounded w-full h-12 pl-3 bg-blue-500 text-white group-invalid:pointer-events-none group-invalid:opacity-30">
                Submit
              </button>
            </form>
        )}
    </div>
  );
};
