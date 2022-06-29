/* eslint-disable eqeqeq */
import { useContext, useEffect, useState } from "react";
import BoxContext from "../context/Context";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const GamePage = () => {
    const {waldo, setWaldo, setResult,
        setTotalTime} = useContext(BoxContext);

    const [position, setPosition] = useState({x: null, y: null});

    const [showModal, setShowModal] = useState(false); 

    const notify = (name) => toast(`You got ${name}!`);


    console.log("render")

    const handleClick = (e) => {
        // find coordinates of the mouse when it clicks
        const bnds = e.target.getBoundingClientRect();
        const xe = e.clientX - bnds.left;
        const ye = e.clientY - bnds.bottom;
        
        // set the coordinates
        setPosition({
            x: xe,
            y: ye
        });
    };


    // this function determines wether the dropdown list selected value chosen
    // corresponds to the character clicked
    // I gather the position from the position state
    // and the dropdown list selected value from e.target.value
    const handleForm = (e) => {
        
        if (position.y < -143 && position.y > -195 && position.x > 685 && 
            position.x < 733 && e.target.value === "blue"){
            console.log("blue beccato");
            notify("Tom Cat")

            setWaldo(waldo.map((char)=>char.name === "blue" ? {
                ...char, check: true, img: "tom-cross.png"
            }:char));
            e.target.value = ""
        }

        if (position.y < -944 && position.y > -993 && position.x > 94 && 
            position.x < 142 && e.target.value === "white"){
            console.log("bianco beccato");
            notify("Brian Griffin")
            setWaldo(waldo.map((char)=>char.name === "white" ? {
                ...char, check: true, img: "brian-cross.png"
            }:char));
            e.target.value = ""
        }

        if (position.y < -1976 && position.y > -2020 && position.x > 558 && 
            position.x < 601 && e.target.value === "green"){
            console.log("green beccato");
            notify("C.C")
            setWaldo(()=>waldo.map((char)=>char.name === "green" ? {
                ...char, check: true, img: "cc-cross.png"
            }:char));
            e.target.value = ""
        }


        
    }


    useEffect(()=>{
        if (waldo[0].check == true && waldo[1].check == true &&
            waldo[2].check == true){
                setShowModal(true)
                
                
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [waldo])

    
    
    const handleModal = () => {
        setShowModal(false)
        setResult(true)
    }
    
    return (
        <div className=" overflow-x-hidden
        flex flex-col justify-start 
        items-center text-gray-700 
        font-bold h-screen gap-5 p-5 bg-white">
            {/* <Timer time={time}/> */}
            <ToastContainer 
                position="top-center"
                autoClose={500}
                hideProgressBar={false}
                theme="dark"
            />  

            
            
            <ReactModal style={{
                overlay: {
                },
                content: {
                    
                    display: "flex",
                    justifySelf: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    border: 0,
                    
                    
                }
            }} isOpen={showModal} ariaHideApp={false}>
                <div className="flex flex-col justify-center gap-10 items-center">
                    <h1 className="text-7xl text-blue-700 font-bold">You did it!</h1>
                    <div className="flex gap-6 text-center">
                    {waldo.map(char=>
                        <div key={char.name} 
                    className="flex flex-col justify-center items-center text-gray-700 rounded-lg p-5">
                        <p className="text-xl">{char.full}</p>
                        <img className="w-28" alt={char.full} src={char.img}></img>
                    </div>
                    )}
                </div>
                    <Link className="bg-blue-400 p-8 rounded-xl animate-pulse text-black text-4xl font.bold bg" 
                    to="/" onClick={handleModal}>GO BACK</Link>
                </div>
            </ReactModal>


            <div className="relative" id="img-container">
                <img id="loc" alt="" onClick={handleClick} src="loc.jpg"></img>
                              
                <div style={{
                    position: "absolute", 
                    bottom: -position.y,
                    right: -position.x+630, 
                    width: "fit-content",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    backgroundColor: "rgb(96 165 250 / var(--tw-bg-opacity))",
                    borderRadius: "5px",
                    padding: "10px"
                    }}>
                    <label htmlFor="chars" className="animate-pulse">Choose the character</label>
                    <form onChange={handleForm}>
                        <select className="text-black rounded-sm" name="chars">   
                            <option value=""></option>
                            <option value="white">Brian Griffin</option>
                            <option value="green">C.C</option>
                            <option value="blue">Tom Cat</option>
                        </select>
                    </form>
 
                    
                </div>
            </div>
        </div>
    )
}

export default GamePage;