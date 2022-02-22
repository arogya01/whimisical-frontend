import Image from "next/image";
import gradient from "../public/gradient03.jpg";
import { useReducer, useEffect, useContext } from "react";
import {PopupDialogContext} from "../context/popupDialogContext";
import Loader from "../utility/Loader/Loader";
import GlobalSpinnerContextProvider from "../context/globalSpinnerContext";
import { GlobalSpinnerContext } from "../context/globalSpinnerContext";
import UserForm from "../utility/userForm";
import PopupDialogContextProvider from "../context/popupDialogContext";


export default function Signup() {

  // 
 
  // const [isPopupDialogOn, setPopupDialog] = useContext(PopupDialogContext);
  // const [setGlobalSpinner] = useContext(GlobalSpinnerContext);
  
  return (
    <PopupDialogContextProvider>
    <GlobalSpinnerContextProvider>
    <div className="w-full h-screen flex flex-row">
      <Image src={gradient} alt="something" width={500} height={500} />
      <div className="m-auto relative">
      <div className="absolute top-1/2 left-1/3 z-20">
      <Loader/>
      </div>
      
      <UserForm/>
      </div>
    </div>
    </GlobalSpinnerContextProvider>
    </PopupDialogContextProvider>
  );
}
