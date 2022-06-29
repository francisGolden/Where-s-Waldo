/* eslint-disable eqeqeq */
import { Link } from "react-router-dom";
import { useContext } from "react";
import BoxContext from "../context/Context";
import Footbar from "../components/Footbar";

const Home = () => {
    const {waldo, setWaldo, result, setResult} = useContext(BoxContext);

    const resetScore = () => {
        setWaldo([
            {name: "green", check: false, full: "C.C.", img: "cc.png"},
            {name: "white", check: false, full: "Brian Griffin", img: "brian.png"},
            {name: "blue", check: false, full: "Tom Cat", img: "tom.png"},
        ])
    }
    
    const startGame = () => {
    
        setResult(false)
        resetScore()
    }

    // if 
    const win = () => {
        if (result == true){
            return  <div className="flex flex-col justify-center 
            items-center text-center">
                        
                <h1 className="text-3xl">You won the game!</h1><br></br>
                

            </div>
        }
    }
    
    const play = () => {
        if (result == true){
            return "replay.png"
        } else {
            return "play-button.png"
        }
    }
    
    const find = () => {
        if (result == true){
            return ""
        } else {
            return "Press the button and start the game!"
        }
    }

    return (
    
        <div className="flex flex-col justify-between items-center 
        font-bold h-full gap-5 p-5 text-gray-700 bg-neutral-200">
            
            {win()}

            <div className="flex flex-col justify-center gap-5 items-center">
                <h1 className="md:text-6xl text-4xl text-center">{find()}</h1>

                <div className="flex gap-6 text-center flex-col md:flex-row">
                    {waldo.map(char=>
                    <div key={char.name} 
                    className="shadow-md flex flex-col justify-center 
                    items-center bg-slate-500 text-gray-100 rounded-lg p-5">
                        <p className="text-xl">{char.full}</p>
                        <img className="w-28" alt={char.full} src={char.img}></img>
                    </div>
                    )}
                </div>

                <Link onClick={startGame} to="/game" className="flex flex-col 
                justify-center items-center rounded w-1/2 px-5
                p-1 text-4xl mt-10 hover:animate-pulse md:animate-none">
                    <div className="flex flex-col justify-start items-center
                     h-fit rounded-xl p-4
                    bg-transparent gap-4">
                        <img alt="play" className="w-24" src={play()}></img>
                    </div>
                </Link>
            </div>
            
            <Footbar />
            
        </div>
    )
};

export default Home;