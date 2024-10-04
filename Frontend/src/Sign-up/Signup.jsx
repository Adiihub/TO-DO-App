import React, { useState } from "react";
import PasswordInput from "../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helper";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    e.preventDefault()

    if(!name){
        setError("PLease Enter your Name")
    }

    if(!validateEmail(email)){
        setError("Please Enter a valid Email Address");
        return 
    }

    if(!password){
        setError("Please Enter a Password");
        return
    }

    setError("");


    // Sign Up API call
    
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form onSubmit={handleSignUp}>
          <h4 className="text-2xl mb-7">Sign Up</h4>

          <input
            type="text"
            placeholder="Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm pb-1"> {error} </p>}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>

          <p className="text-sm text-center mt-4 ">
            Already have an Account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-[#2B85FF] underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
