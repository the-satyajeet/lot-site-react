import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    registrationNumber: "",
    course: "DEFAULT",
    contactNumber: "",
    whatsAppNumber: "",
    email: "",
    batch: "",
    stay: "DEFAULT",
    ad: "DEFAULT",
    roles: "DEFAULT",
    file: "",
    selfDefinition: "",
    enableWhatsApp: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <section className="flex justify-center mt-15 z-20">
      <div className="w-[785px] h-[460px] relative bg-zinc-950 rounded-[10.91px] border border-orange-600">
        <div className="left-[70px] top-[47px] absolute">
          <span className="text-neutral-500 text-lg font-normal">
            Welcome,
          </span>
          <span className="text-orange-600 text-lg font-bold ">
            {" "}
            Leader!
          </span>
        </div>
        <div className="w-[252.73px] left-[70px] top-[97.68px] absolute flex-col justify-start items-start gap-[11.42px] inline-flex">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex text-neutral-100 text-xs font-normal"
            placeholder="Full Name"
          />

          <div className="self-stretch px-2 justify-between items-center inline-flex ml-[4.2rem]">
            <div className="w-[45.81px] self-stretch justify-center items-center gap-2 flex">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="text-neutral-500 text-[10.53px] font-normal checked:bg-orange-600"
              />
              <label htmlFor="male" className="text-xs text-neutral-500">
                Male
              </label>

              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="text-neutral-500 text-[10.53px] font-normal checked:bg-orange-600"
              />
              <label htmlFor="female" className="text-xs text-neutral-500">
                Female
              </label>

              <input
                type="radio"
                name="gender"
                value="others"
                checked={formData.gender === "others"}
                onChange={handleChange}
                className="text-neutral-500 text-[10.53px] font-normal checked:bg-orange-600"
              />
              <label htmlFor="others" className="text-xs text-neutral-500">
                Others
              </label>
            </div>
          </div>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 text-xs font-normal justify-start items-center gap-[7.52px] inline-flex text-neutral-100"
            placeholder="Registration Number"
            required
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center text-[0.65rem] gap-[7.52px] inline-flex ${
              formData.course === "DEFAULT" ? "text-neutral-500 text-xs" : "text-neutral-100"
            }`}
          >
            <option
              value="DEFAULT"
              className="text-neutral-500 text-xs font-normal"
              disabled
              hidden
            >
              Courses
            </option>
            <option
              value="Btech"
              className="text-neutral-500 text-xs font-normal"
            >
              BTech
            </option>
            <option
              value="BCA"
              className="text-neutral-500 text-xs font-normal"
            >
              BCA
            </option>
            <option
              value="MCA"
              className="text-neutral-500 text-xs font-normal"
            >
              MCA
            </option>
            <option
              value="MBA"
              className="text-neutral-500 text-xs font-normal"
            >
              MBA
            </option>
            <option
              value="Fashion Design"
              className="text-neutral-500 text-xs font-normal"
            >
              Fashion Design
            </option>
            <option
              value="Hotel Management"
              className="text-neutral-500 text-xs font-normal"
            >
              Hotel Management
            </option>
          </select>

          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex text-xs font-normal text-neutral-100"
            placeholder="Contact Number"
            required
          />

          <input
            type="text"
            name="whatsAppNumber"
            value={formData.whatsAppNumber}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex text-neutral-100 text-xs font-normal"
            placeholder="WhatsApp Number"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex text-neutral-100 text-xs font-normal"
            placeholder="Email"
            required
          />
        </div>

        <div className="left-[462.27px] top-[45.75px] absolute flex-col justify-start items-start gap-[12.09px] inline-flex">
          <div className="flex-col justify-start items-start gap-[11.42px] flex">
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center gap-[7.52px] inline-flex text-neutral-100 text-xs font-normal"
              placeholder="Batch ie. 2024"
            />
          </div>

          <select
            name="stay"
            value={formData.stay}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center text-neutral-100 text-[0.65rem] gap-[7.52px] inline-flex"
          >
            <option
              value="DEFAULT"
              className="text-neutral-500 text-xs font-normal"
              disabled
              hidden
            >
              Hostler or Day Scholar
            </option>
            <option
              value="Hostler"
              className="text-neutral-500 text-xs font-normal"
            >
              Hostler
            </option>
            <option
              value="Day Scholar"
              className="text-neutral-500 text-xs font-normal"
            >
              Day Scholar
            </option>
          </select>

          <select
            name="ad"
            value={formData.ad}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center text-neutral-100 text-[0.65rem] gap-[7.52px] inline-flex"
          >
            <option
              value="DEFAULT"
              className="text-neutral-500 text-xs font-normal"
              disabled
              hidden
            >
              How do you hear about LOT?
            </option>
            <option
              value="Poster"
              className="text-neutral-500 text-xs font-normal"
            >
              Poster
            </option>
            <option
              value="Instagram"
              className="text-neutral-500 text-xs font-normal"
            >
              Instagram
            </option>
            <option
              value="Friends"
              className="text-neutral-500 text-xs font-normal"
            >
              Friends
            </option>
            <option
              value="Website"
              className="text-neutral-500 text-xs font-normal"
            >
              Website
            </option>
          </select>

          <select
            name="roles"
            value={formData.roles}
            onChange={handleChange}
            className="w-[252.73px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 justify-start items-center text-neutral-100 text-[0.65rem] gap-[7.52px] inline-flex"
          >
            <option
              value="DEFAULT"
              className="text-neutral-500 text-xs font-normal"
              disabled
              hidden
            >
              Choose your preferred domain
            </option>
            <option
              value="Public Speaking"
              className="text-neutral-500 text-xs font-normal"
            >
              Public Speaking
            </option>
            <option
              value="Social Media Management"
              className="text-neutral-500 text-xs font-normal"
            >
              Social Media Management
            </option>
            <option
              value="Event Coordinator"
              className="text-neutral-500 text-xs font-normal"
            >
              Event Coordinator
            </option>
            <option
              value="Fine Arts"
              className="text-neutral-500 text-xs font-normal"
            >
              Fine Arts
            </option>
            <option
              value="Graphic Designing"
              className="text-neutral-500 text-xs font-normal"
            >
              Graphic Designing
            </option>
            <option
              value="Web Development"
              className="text-neutral-500 text-xs font-normal"
            >
              Web Development
            </option>
            <option
              value="Photography"
              className="text-neutral-500 text-xs font-normal"
            >
              Photography
            </option>
          </select>
          <label
            htmlFor="file"
            className="text-neutral-500 text-xs font-normal"
          >
            Click to choose a file or drag here
          </label>
          <input
            type="file"
            accept="image/*"
            name="file"
            value={formData.file}
            onChange={handleChange}
            className="w-[252px] rounded-[0.2rem] border-neutral-800  h-5 text-xs text-neutral-500 text-[10.53px] font-normal"
          />

          <input
            type="textbox"
            name="selfDefinition"
            value={formData.selfDefinition}
            onChange={handleChange}
            className="w-[253px] h-[58.08px] p-[7.52px] bg-neutral-800 rounded-[3.01px] border border-neutral-500 gap-[7.52px] inline-flex self-stretch text-neutral-100 text-xs font-normal"
            placeholder="How do you define yourself in your domain?"
          />

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="enableWhatsApp"
              checked={formData.enableWhatsApp}
              onChange={handleChange}
              className="w-[18.05px] h-[18.05px]"
            />
            <label
              htmlFor="whatsapp"
              className="text-neutral-500 text-xs font-normal"
            >
              Enable sending WhatsApp messages
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-[252.73px] p-[7.52px] bg-orange-600 rounded-[3.01px] border border-red-300 justify-center items-center gap-[7.52px] inline-flex text-white text-xs font-bold"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
