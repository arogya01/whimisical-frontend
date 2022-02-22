import { useContext, useReducer, useEffect } from "react";
import { GlobalSpinnerContext } from "../context/globalSpinnerContext";


export default function UserForm() {
    const [isGlobalSpinnerOn, setGlobalSpinner] = useContext(GlobalSpinnerContext);
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

  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleTextChange = (event) => {
    dispatch({
      type: "addUser",
      field: event.target.name,
      payload: event.target.value,
    });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const registerUser = async (event) => {
    setGlobalSpinner(true);
    event.preventDefault();

    const res = await fetch("http://localhost:3001/signup", {
  
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formState),
    });

    const result = await res.json();
    console.log(result);
    setGlobalSpinner(false);
  };

  return (
    <div className="z-2 bg-gray-100">
    <form
      onSubmit={(event) => {
        registerUser(event);
      }}
      className="flex flex-row flex-wrap self-center mx-auto border-2 p-6 w-full"
    >
      <div className="mb-4 w-full">
        <label htmlFor="full_name" className="block font-bold">
          Full Name
        </label>
        <input
          type="text"
          id="full_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2   w-full  rounded-lg p-2.5"
          placeholder="arogya"
          value={formState.name}
          name="name"
          autoComplete="name"
          onChange={(event) => handleTextChange(event)}
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="email" className="block font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full rounded-lg p-2.5"
          value={formState.email}
          onChange={(event) => handleTextChange(event)}
          placeholder="arogya@gmail.com"
          required
        />
        <span className="text-red-600 text-xs hidden">Email already exists!!!!</span>
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="password" className="block font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full  rounded-lg p-2.5"
          value={formState.password}
          onChange={(event) => handleTextChange(event)}
          placeholder="arogya12"
          required
        />
      </div>
      <div className="mt-4 w-full grid place-content-center">
        <button
          type="submit"
          className="bg-cyan-500 transition-all hover:bg-cyan-600  font-bold font-sans p-3 rounded-md mr-8 p-2.5"
        >
          Signup
        </button>
      </div>
    </form>
    </div>

  );
}
