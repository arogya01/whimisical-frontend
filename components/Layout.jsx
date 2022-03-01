import Navbar from "./navbar"

export default function Layout(props){
    const {...children} = props;
    return(
        <AuthProvider>
        <div>
        <Navbar></Navbar>
        {children}
        </div>
        </AuthProvider>
    )
}