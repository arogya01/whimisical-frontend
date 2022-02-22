import { useReducer, useEffect } from "react";

export default function Login() {
  const initialState = {
    name: "arogya",
    email: "",
    password: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "addUser":
        return { ...state, [action.field]: action.payload };
        break;
    }
  }

  const handleTextChange = (event) => {
    dispatch({
      type: "addUser",
      field: event.target.name,
      payload: event.target.value,
    });
  };

  const [formState, dispatcher] = useReducer(reducer, initialState);

  const handleUserLogin = async (event) => {
    event.preventDefault();
    const res = fetch("http://localhost:3001/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formState),
    });

    const JSONDetails = await res.json();
    console.log(loginDetails);
  };

  return (
    <div className="w-full h-screen m-auto flex flex-row items-center justify-center ">
      <form
        onSubmit={handleUserLogin}
        className="flex flex-row flex-wrap    border-2 p-6 w-1/2"
      >
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full rounded-lg p-2.5"
            placeholder="arogya@gmail.com"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full  rounded-lg p-2.5"
            placeholder="arogya12"
            required
          />
        </div>
        <div className="mt-4 w-full grid place-content-center">
          <button
            type="submit"
            className="bg-cyan-500 transition-all hover:bg-cyan-600  font-bold font-sans p-3 rounded-md mr-8 p-2.5"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
