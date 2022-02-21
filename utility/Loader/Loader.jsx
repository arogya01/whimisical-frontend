import styles from "./Loader.module.css";
import {GlobalSpinnerContext} from "../../context/globalSpinnerContext";
import { useContext } from "react";

export default function Loader() {
  const [ isGlobalSpinnerOn ] = useContext(GlobalSpinnerContext);

  return isGlobalSpinnerOn ? (
    <div className="h-screen w-full flex justify-center items-center">
      <div className={styles.lds}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
}
