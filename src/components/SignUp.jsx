import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../Redux/Auth/auth.action';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userName: '',
    password: '',
    conpassword: ''
  });
  const dispatch=useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData)); // Print data in JSON format to the console
    // You can add further logic here, like sending the data to a server
    dispatch(registerUserAction({data:formData}))
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="w-[785px] h-[405px] relative bg-zinc-950 rounded-[10.91px] border border-orange-600">
          <div className="left-[49.27px] top-[36.11px] absolute justify-start items-center gap-[75.91px] inline-flex">
            <div>
              <span className="text-neutral-500 text-[29.09px] font-light ">Ready to become,<br /></span>
              <span className="text-orange-600 text-[43.37px] font-bold">Leaders of Today!</span>
            </div>
            <div className="flex-col justify-start items-start gap-[11.42px] inline-flex">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light" placeholder='Full Name' />

              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light" placeholder='Email' />

              <input type="text" name="userName" value={formData.userName} onChange={handleChange} className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light" placeholder='Username' />

              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light" placeholder='Password' />

              <input type="password" name="conpassword" value={formData.conpassword} onChange={handleChange} className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex cursor-pointer hover:border-orange-600 text-neutral-100 text-xs font-light" placeholder='Confirm Password' />

              <button type="submit" className="w-[252.73px] p-[7.52px] bg-orange-600 rounded-[3.01px] border border-red-300 justify-center items-center gap-[7.52px] inline-flex">
                <div className="text-white text-xs font-bold">Sign Up</div>
              </button>
              <div className="self-stretch text-center text-neutral-500 text-[10.53px] font-light">or continue with</div>
              <button className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-center items-center gap-[7.52px] inline-flex">
                <div className="w-[18.05px] h-[18.05px] relative" />
                <div className="text-neutral-500 text-xs font-light">Google Account</div>
              </button>
              <div><span className="text-neutral-500 text-[10.53px] font-light">Already have a account? </span><span className="text-orange-600 text-[10.53px] font-bold"><a href=''>Login</a></span></div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SignUp;
