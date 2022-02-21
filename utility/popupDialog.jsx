import Link from 'next/Link';
import Loader from '../utility/Loader/Loader';


export default function PopupDialog(){
    return( 
        <div>
        <div className="flex border-4 border-cyan-200 p-6">
        <p>Signup Succssful</p>
        <Link href="/login" />
        </div>
        </div>
    )
}