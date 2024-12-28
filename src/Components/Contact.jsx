import React from "react";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d161a33e-2e53-4cf3-ae11-6cfe74e4367d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div
      id="contact"
      className="contact bg-gray-100 display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 pt-10 pb-20"
    >
      <div className="contact-title mb-5">
        <h1 className="text-green-700 italic text-4xl font-bold">
          Get in touch
        </h1>
      </div>
      <div className="contact-section grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8">
        <div className="contact-left display: flex flex-col gap-4">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold">
            Lets talk
          </h1>
          <p className="max-w-xl">
            I am currently available to supply fresh poultry products and take
            on bulk orders. Feel free to contact me anytime for quality poultry
            and reliable service!
          </p>
          <div className="contact-details display: flex flex-col gap-4">
            <div className="contact-detail display: flex items-center gap-3">
              <i class="fa-solid fa-envelope"></i> <p>tizminefarm@gmail.com</p>
            </div>
            <div className="contact-detail display: flex items-center gap-3">
              <i class="fa-solid fa-phone"></i> <p>+2349038440670</p>
            </div>
            <div className="contact-detail display: flex items-center gap-3">
              <i class="fa-brands fa-instagram"></i>{" "}
              <a href="https://www.instagram.com/tizmine_farms__?igsh=MTR3Y2s5dDdxeG0xOA==">
                Tizmine_Farms
              </a>
            </div>
            <div className="contact-detail display: flex items-center gap-3">
              <i class="fa-solid fa-location-dot"></i> <p>Ibadan, Nigeria</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="contact-right display: flex flex-col items-start gap-4"
        >
          <label htmlFor="" className="text-gray-400">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="bg-green-900 p-2 rounded-lg border-none	outline-none min-w-80"
          />
          <label htmlFor="" className="text-gray-400">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="bg-green-900  p-2 rounded-lg border-none	outline-none min-w-80"
          />
          <label htmlFor="" className="text-gray-400">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className="border-none	outline-none rounded-xl p-2 bg-green-900  min-w-80"
          ></textarea>
          <button
            type="submit"
            className="contact-submit border-none text-white rounded-3xl text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl py-1 px-3"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
