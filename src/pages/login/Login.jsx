import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/slices/authSlice";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const login = async (username, password) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3000/users?username=${username}&password=${password}`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     if (data.length > 0) {
  //       return data[0];
  //     } else {
  //       throw new Error("Invalid credentials");
  //     }
  //   } catch (e) {
  //     setError(e.message);
  //   }
  // };
  const data = {
    users: [
      { id: 1, username: "admin", password: "admin", role: "editor" },
      { id: 2, username: "user", password: "user", role: "viewer" },
    ],
  };

  const login = async (username, password) => {
    try {
      const user = data.users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        throw new Error("Invalid credentials");
      }

      return user;
    } catch (e) {
      setError(e.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (username == "" || password == "") {
      setError("Please Enter Username and Password");
      return;
    }
    const user = await login(username, password);
    if (user) {
      dispatch(loginAction(user));
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

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

      <main className=" w-full h-screen flex flex-col items-center justify-center relative overflow-y-scroll">
        <div></div>
        <form
          onSubmit={handleLogin}
          className="w-[70%] flex items-center justify-center flex-col lg:flex-row h-fit gap-8 text-xl text-[#0a4975] relative"
        >
          <img src="./RC_Logo.svg" alt="RC_Logo" className="h-20 relative" />

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#f7f8fc] py-4 px-3 rounded-md border-none flex-1 w-full"
            placeholder="Username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            className="bg-[#f7f8fc] py-4 px-3 rounded-md border-none flex-1 w-full"
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="bg-[#0a4975] py-4 px-2 rounded-md border-none text-white font-bold flex-1 w-full"
          >
            Login
          </button>
        </form>

        <div className="mt-2 text-red-400 text-sm w-full h-4 text-center select-none pointer-events-none">
          {error && <p>{error}</p>}
        </div>
      </main>
    </>
  );
}

export default Login;
