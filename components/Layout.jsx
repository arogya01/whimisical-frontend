import Navbar from "./navbar"

export default function Layout(props){
    const {...Children} = props;
    return(
        <div>
        <Navbar></Navbar>
        {Children}
        </div>
    )
}