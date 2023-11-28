import React, { useState } from "react";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isSubmitted, setisSubmitted] = useState(false);
  const [timer, setTimer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const formWait = () => {
    setTimeout(() => {
      setTimer(true);
    }, 7000);
  };

  const handleSubmit = async () => {
    formWait();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/dde486e9072e97fb65b8dcd3ae9ab3f2",
        {
          method: "post",
        }
      );

      console.log("Response Status:", response.status);

      if (response.status === 200) {
        console.log("Form submitted successfully!");
        setisSubmitted(true);
        setError(null);
      } else {
        const errorMessage = await response.text();
        console.error(
          `Form submission failed. Status: ${response.status}, Message: ${errorMessage}`
        );
        setisSubmitted(false);
        setError("Form submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setisSubmitted(false);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-blue-950 w-screen h-screen">
      <div className="absolute top-0 left-0 m-3">
        <button className="px-3 py-2 border-b-2 border-blue-500 text-white">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
      <div className="flex h-screen">
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl border-b-4 border-blue-500 text-gray-300 mb-3">
            Contact
          </h1>
          {timer ? (
            <p className="text-blue-300 mx-auto">
              This is taking longer than expected...
            </p>
          ) : null}
          {isSubmitted ? <p className="text-blue-300 mx-auto">Form submitted successfully!</p> : '' }
        
            { error && <p className="text-red-500 mx-auto">{error}</p> }
          
          <form
            action="https://formsubmit.co/dde486e9072e97fb65b8dcd3ae9ab3f2"
            method="post"
            className="text-black flex flex-col space-y-3 w-3/4 sm:w-1/2"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              className="rounded-md outline-none p-2 bg-gray-200"
              autoComplete="off"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="rounded-md outline-none p-2 bg-gray-200 "
              autoComplete="off"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="15"
              placeholder="Message"
              className="shadow-lg rounded-md outline-none p-2 bg-gray-200"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-transparent w-32 mx-auto text-gray-200 px-4 py-1 border hover:bg-blue-500 hover:border-blue-500"
              disabled={isLoading}
            >
              Message
            </button>
            {isLoading ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
