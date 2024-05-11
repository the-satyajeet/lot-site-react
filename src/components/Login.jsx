import React, { useState } from "react";
import { google, logo } from "../assets";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData)); // Print form data in JSON format
    // Add your logic to submit the form data to the server
  };

  return (
    <section className="flex justify-center mt-15">
      <div className="w-[785px] h-[430px] relative bg-zinc-950 rounded-[10.91px] border border-orange-600 flex">
        <img src={logo} alt="lot logo" className="m-[4rem] ml-[10rem]" />
        <div className="left-[462.27px] top-[57.36px] absolute flex-col justify-start items-start gap-[29.09px] inline-flex">
          <div>
            <span className="text-neutral-500 text-lg font-light ">
              Welcome back,
            </span>
            <span className="text-orange-600 text-lg font-bold"> Leader!</span>
          </div>
          <div className="flex flex-col gap-2">
            <form onSubmit={handleSubmit}>
              {" "}
              {/* Wrap the inputs in a form */}
              <div className="flex-col justify-start items-start gap-[11.42px] flex">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light"
                  placeholder="example@email.com"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light"
                  placeholder="Password"
                />
                <div className="w-[251.67px] justify-between items-center inline-flex">
                  <div className="justify-center items-center gap-[4.76px] flex">
                    <input
                      className="w-[18.05px] h-[18.05px] bg-neutral-800 rounded-[3.01px]  border border-neutral-500"
                      type="checkbox"
                    />
                    <div className="text-neutral-500 text-[10.53px] font-light">
                      Remember me
                    </div>
                  </div>
                  <div className="text-white text-[10.53px] font-normal cursor-pointer">
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-[252.73px] p-[7.52px] bg-orange-600 hover:border-white hover:bg-primary rounded-[3.01px] border border-red-300 justify-center items-center gap-[7.52px] inline-flex"
                >
                  <p className="text-white text-xs font-bold">Login</p>
                </button>
              </div>
            </form>
            <p className="self-stretch text-center text-neutral-500 text-[10.53px] font-light">
              or continue with
            </p>
            <button className="w-[252.73px] p-[7.52px] hover:border-white bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-center items-center gap-[7.52px] inline-flex">
              <img src={google} className="w-[18.05px] h-[18.05px] relative" />
              <p className="text-neutral-500 text-xs font-light">
                Google Account
              </p>
            </button>
            <div>
              <span className="text-neutral-500 text-[10.53px] font-light">
                Don't have an account?{" "}
              </span>
              <span className="text-orange-600 text-[10.53px] font-bold cursor-pointer">
                <a href="">Sign Up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
