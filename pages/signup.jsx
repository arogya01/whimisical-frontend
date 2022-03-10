import Image from "next/image";
import { useReducer, useEffect, useContext } from "react";
import { PopupDialogContext } from "../context/popupDialogContext";
import Spinner from "../utility/Spinner";
import GlobalSpinnerContextProvider from "../context/globalSpinnerContext";
import { GlobalSpinnerContext } from "../context/globalSpinnerContext";
import UserForm from "../utility/userForm";
import PopupDialogContextProvider from "../context/popupDialogContext";

export default function Signup() {
  return (
    <PopupDialogContextProvider>
      <GlobalSpinnerContextProvider>
        <div className="w-full h-screen flex flex-row">
          <div className="md:flex-1 hidden md:block md:w-full md:h-full md:bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
          </div>
          <div className="flex-1 p-6 m-auto">
            <UserForm />
          </div>
        </div>
      </GlobalSpinnerContextProvider>
    </PopupDialogContextProvider>
  );
}
