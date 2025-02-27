import React from "react";

function Login() {
  return (
    <>
      <div
        className="w-[120svw] min-h-[128svh] absolute -z-1 -left-25"
        style={{
          backgroundImage: 'url("/BackgroundElement.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <main className=" w-full h-screen flex items-center justify-center relative overflow-y-scroll">
        <div></div>
        <div className="w-[70%] flex items-center justify-center flex-col lg:flex-row h-fit gap-8 text-xl text-[#0a4975] relative">
          <img src="./RC_Logo.svg" alt="RC_Logo" className="h-20 relative" />
          <input
            type="text"
            className="bg-[#f7f8fc] py-4 px-3 rounded-md border-none flex-1 w-full "
            placeholder="Username"
          />
          <input
            type="password"
            className="bg-[#f7f8fc] py-4 px-3 rounded-md border-none flex-1 w-full"
            placeholder="Password"
          />
          <input
            type="button"
            value="Login"
            className="bg-[#0a4975] py-4 px-2 rounded-md border-none  text-white font-bold flex-1 w-full"
          />
        </div>
      </main>
    </>
  );
}

export default Login;
