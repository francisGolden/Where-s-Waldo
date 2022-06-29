import { Link } from "react-router-dom";
import { useContext } from "react";
import BoxContext from "../context/Context";


const Navbar = () => {
    const { waldo } = useContext(BoxContext);

    

    return (
        
            <div className="shadow-md flex flex-col md:flex-row 
            md:gap-10 gap-3 bg-blue-400 py-4
            justify-center items-center  text-gray-700">

                <Link to="/" className="text-2xl font-bold 
                underline md:text-3xl">Find 'em!
                </Link>
                <p className="text-sm md:text-xl text-center">WARNING: <br></br>Not for mobile</p>
                <ul className="flex">
                    {waldo.map(char=>
                    <li key={char.name}>
                        <img className="w-16" alt={char.full} src={char.img}></img>
                    </li>
                    )}
                </ul>
                
            </div>
        
        
    )
}

export default Navbar;